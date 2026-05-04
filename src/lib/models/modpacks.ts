import type { CompatibilityState, ModpackModEntry, Tag } from '$lib/generated/graphql';
import * as zod from 'zod';

export type ModpackData = {
  name: string;
  short_description: string;
  full_description?: string;
  logo?: string;
  compatibility?: {
    EA: {
      state: CompatibilityState;
      note?: string;
    };
    EXP: {
      state: CompatibilityState;
      note?: string;
    };
  };
  parent_id?: string;
  hidden: boolean;
  mods: ModpackModEntry[];
  tagIDs?: string[];
  tags?: Tag[];
};

export const modpackSchema = zod.object({
  name: zod.string().min(3).max(32),
  short_description: zod.string().min(16).max(128),
  full_description: zod.string().min(1),
  logo: zod.optional(zod.any().refine((logo) => 'name' in logo && 'size' in logo && 'type' in logo)),
  logo_thumbhash: zod.string().optional(),
  mods: zod
    .array(
      zod.object({
        mod_id: zod.string(),
        version_constraint: zod.string()
      })
    )
    .min(1, 'At least one mod is required'),

  compatibility: zod.optional(
    zod.object({
      EA: zod.object({
        state: zod.string(),
        note: zod.optional(zod.string())
      }),
      EXP: zod.object({
        state: zod.string(),
        note: zod.optional(zod.string())
      })
    })
  ),
  parent_id: zod.string().optional(),
  hidden: zod.boolean().default(false),
  tagIDs: zod.optional(zod.string().array())
});
