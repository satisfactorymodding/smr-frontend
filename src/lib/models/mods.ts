import * as zod from 'zod';

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
  hidden: boolean;
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
  hidden: zod.boolean()
});
