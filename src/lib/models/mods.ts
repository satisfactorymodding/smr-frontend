import * as zod from 'zod';
import {
  AiUseDisclosureType,
  type CompatibilityState,
  type ControllerCompatibilityState,
  type Tag
} from '$lib/generated';

// eslint bug? https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
// eslint-disable-next-line no-shadow
export enum AiDisclosureChoice {
  Unspecified = 'unspecified', // Added for frontend dropdowns
  AiUsage = AiUseDisclosureType.AiUsage,
  NoAiUsage = AiUseDisclosureType.NoAiUsage,
  RuntimeAiUsage = AiUseDisclosureType.RuntimeAiUsage
}

export const AiDisclosureChoiceToDbType = {
  [AiDisclosureChoice.AiUsage]: AiUseDisclosureType.AiUsage,
  [AiDisclosureChoice.NoAiUsage]: AiUseDisclosureType.NoAiUsage,
  [AiDisclosureChoice.RuntimeAiUsage]: AiUseDisclosureType.RuntimeAiUsage
};

export const AiChoiceRequiresDescription = (choice: AiDisclosureChoice | AiUseDisclosureType | undefined) =>
  [AiDisclosureChoice.AiUsage.valueOf(), AiDisclosureChoice.RuntimeAiUsage.valueOf()].includes(choice?.valueOf() ?? '');

// Since network usage disclosure is stored as a null/empty string/non-empty string,
// the enum of states only exists here on the frontend
// eslint-disable-next-line no-shadow
export enum NetworkDisclosureState {
  Unspecified,
  NoNetworkUsage,
  YesNetworkUsage
}

export type ModData = {
  name: string;
  mod_reference: string;
  short_description: string;
  full_description?: string;
  logo?: string;
  source_url?: string;
  authors?: {
    role: string;
    user_id: string;
  }[];
  compatibility?: {
    EA: {
      state: CompatibilityState;
      note?: string;
    };
    EXP: {
      state: CompatibilityState;
      note?: string;
    };
    Controller: {
      state: ControllerCompatibilityState;
      note?: string;
    };
  };
  ai_use_disclosure?: {
    disclosure_type: AiUseDisclosureType;
    message?: string;
  };
  hidden: boolean;
  tagIDs?: string[];
  tags?: Tag[];
  network_use_disclosure?: string;
};

export type FormAiDisclosure = {
  choice: AiDisclosureChoice;
  message?: string;
};

type ModAdditionalFormData = {
  pending_ai_use_disclosure?: FormAiDisclosure;
};

export type ModFormData = ModData & ModAdditionalFormData;

export const modFormSchema = zod.object({
  name: zod.string().min(3).max(32),
  mod_reference: zod
    .string()
    .min(3)
    .max(32)
    .regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/)
    .refine(
      async () =>
        // TODO Check if mod reference exists
        true
    ),
  short_description: zod.string().min(16).max(128),
  full_description: zod.optional(zod.string()),
  logo: zod.optional(zod.any().refine((logo) => 'name' in logo && 'size' in logo && 'type' in logo)),
  source_url: zod.string().url().optional().or(zod.literal('')),
  authors: zod.optional(
    zod
      .object({
        role: zod.string(),
        user_id: zod.string()
      })
      .array()
  ),
  compatibility: zod.optional(
    zod.object({
      EA: zod.object({
        state: zod.string(),
        note: zod.ostring()
      }),
      EXP: zod.object({
        state: zod.string(),
        note: zod.ostring()
      }),
      Controller: zod.object({
        state: zod.string(),
        note: zod.ostring()
      })
    })
  ),
  pending_ai_use_disclosure: zod
    .object({
      choice: zod.nativeEnum(AiDisclosureChoice),
      message: zod.string().optional()
    })
    // WARNING: Very frustrating workaround below.
    // Must use superRefine to work around weird issue where if this is the only error in the form,
    // the reported error is `[{"choice": [], "message": []}]` which is not a string,
    // breaking the expected types for the felte forms validation, and displays on the frontend as `[object Object]`.
    // Note that this only seems to happen if this is the first error ever reported in the "session",
    // as soon as any other validation error is also reported, it'd properly return just a string, even if that other error is fixed.
    // Also, sometimes the reported error is just `[]` because reasons!!!
    // See ModForm.svelte for the other half that makes this work
    .superRefine(({ choice, message }, ctx) => {
      if (AiChoiceRequiresDescription(choice)) {
        if ((message?.trim().length ?? 0) == 0) {
          ctx.addIssue({
            code: zod.ZodIssueCode.custom,
            path: ['message'],
            // TODO not sure how to localize, no convenient Tolgee context. Only mod devs will see this so not a huge priority
            message: 'You must provide a description.'
          });
        }
      }
    })
    .optional(),
  ai_use_disclosure: zod.optional(
    zod.object({
      disclosure_type: zod.nativeEnum(AiUseDisclosureType),
      message: zod.string().optional()
    })
  ),
  hidden: zod.boolean(),
  tagIDs: zod.optional(zod.string().array()),

  // Also validated separately in ModForm to determine if empty string is valid based on dropdown choice
  network_use_disclosure: zod.ostring().nullable()
});
