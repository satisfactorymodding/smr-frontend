import type { ModpackTarget } from '$lib/generated/graphql';
import * as zod from 'zod';

export type ReleaseData = {
  version: string;
  changelog: string;
  targets: ModpackTarget[];
};

export const releaseSchema = zod.object({
  version: zod
    .string()
    .min(1)
    .regex(/^\d+\.\d+\.\d+$/, 'Must be X.X.X format'),
  changelog: zod.string().min(1),
  targets: zod.array(
    zod.object({
      id: zod.string(),
      modpack_id: zod.string(),
      target_name: zod.string()
    })
  )
});
