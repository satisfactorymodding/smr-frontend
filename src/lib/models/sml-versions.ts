import * as zod from 'zod';
import type { TargetName, UpdateSmlVersionTarget, VersionStabilities } from '$lib/generated';

export type SMLTargetData = {
  targetName: TargetName;
  link: string;
};

export type SMLVersionData = {
  version: string;
  satisfactory_version: number;
  bootstrap_version?: string;
  stability: VersionStabilities;
  link: string;
  changelog: string;
  date: string;
  targets: UpdateSmlVersionTarget[];
  engine_version: string;
};

const versionRegex =
  /^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const smlTargetSchema = zod.object({
  targetName: zod.string(),
  link: zod.string().url()
});

export const smlVersionSchema = zod.object({
  version: zod.string().regex(versionRegex),
  satisfactory_version: zod.number(),
  bootstrap_version: zod.string().regex(versionRegex).optional(),
  stability: zod.string(),
  link: zod.string().url(),
  targets: zod.array(smlTargetSchema).superRefine((targets, ctx) => {
    for (let i = 0; i < targets.length; i += 1) {
      if (targets.findIndex((t) => t.targetName == targets[i].targetName) !== i) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: 'Targets must be unique',
          path: [i, 'targetName']
        });
      }
    }
  }),
  changelog: zod.string(),
  date: zod.string(),
  engine_version: zod.string()
});
