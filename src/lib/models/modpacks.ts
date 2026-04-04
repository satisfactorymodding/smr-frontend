import * as zod from 'zod';

export type ModpackData = {
  name: string;
  short_description: string;
  full_description?: string;
  logo?: string;
  logo_thumbhash?: string; // Unsure if this is a string, type not shown in txt
  creator_id: string;
  views: number;
  hotness: number;
  installs: number;
  popularity: number;
  readonly parent_id?: string; // Readonly as it should not be changed after creation
  hidden: boolean;
};

export const modpackSchema = zod.object({
  name: zod.string().min(3).max(32),
  short_description: zod.string().min(16).max(128),
  full_description: zod.string(),
  logo: zod.optional(zod.any().refine((logo) => 'name' in logo && 'size' in logo && 'type' in logo)),
  logo_thumbhash: zod.string().optional(),
  creator_id: zod.string().uuid(),
  views: zod.number().min(0).default(0),
  hotness: zod.number().min(0).default(0),
  installs: zod.number().min(0).default(0),
  popularity: zod.number().min(0).default(0),
  parent_id: zod.string().uuid().optional().readonly(),
  hidden: zod.boolean().default(false)
});
