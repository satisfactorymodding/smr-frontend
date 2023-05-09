import * as zod from 'zod';
import type { UpdateSmlVersionTarget, VersionStabilities } from '$lib/generated';

export type SMLTargetData = {
  targetName: string;
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
  bootstrap_version: zod.string().regex(versionRegex),
  stability: zod.string(),
  link: zod.string().url(),
  targets: zod.array(smlTargetSchema),
  changelog: zod.string(),
  date: zod.string()
});
