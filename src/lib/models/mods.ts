import * as zod from 'zod';
import {
  type CompatibilityState,
  type ControllerCompatibilityState,
  AiUseDisclosureType,
  type Tag
} from '$lib/generated';

// Since network usage disclosure is stored as a null/empty string/non-empty string,
// the enum of states only exists here on the frontend
// eslint bug? https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
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
    disclosure_string?: string;
  };
  hidden: boolean;
  tagIDs?: string[];
  tags?: Tag[];
  network_use_disclosure?: string;
};

export const modSchema = zod.object({
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
  ai_use_disclosure: zod.optional(
    zod
      .object({
        disclosure_type: zod.nativeEnum(AiUseDisclosureType),
        disclosure_string: zod.string().or(zod.literal(''))
      })
      .refine(
        (data) => {
          if (
            data.disclosure_type === AiUseDisclosureType.AiUsage ||
            data.disclosure_type === AiUseDisclosureType.RuntimeAiUsage
          ) {
            return data.disclosure_string?.trim().length > 0;
          }
          return true;
          // TODO not sure how to localize, no convenient Tolgee context. Only devs will see this so not a huge priority
        },
        { message: 'You must provide a description.' }
      )
  ),
  hidden: zod.boolean(),
  tagIDs: zod.optional(zod.string().array()),

  // Also validated separately in ModForm to determine if empty string is valid based on dropdown choice
  network_use_disclosure: zod.ostring().nullable()
});
