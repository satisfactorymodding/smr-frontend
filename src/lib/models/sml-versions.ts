import * as zod from 'zod';
import type { VersionStabilities } from '$lib/generated';

export type SMLLinksData = {
  platform: string;
  side: string;
  link: string;
};

/* export let SMLLinksData = Object.keys(SMLLinks) */

export type SMLVersionData = {
  version: string;
  satisfactory_version: number;
  bootstrap_version?: string;
  stability: VersionStabilities;
  link: string;
  links: SMLLinksData[SMLLink];
  changelog: string;
  date: string;
};

const versionRegex =
  /^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const smlLinksSchema = zod.object({
  platform: zod.string(),
  side: zod.string(),
  link: zod.string().url()
});

export type SMLLink = zod.infer<typeof smlLinksSchema>;

export const smlVersionSchema = zod.object({
  version: zod.string().regex(versionRegex),
  satisfactory_version: zod.number(),
  bootstrap_version: zod.string().regex(versionRegex),
  stability: zod.string(),
  link: zod.string().url(),
  links: zod.array(smlLinksSchema),
  changelog: zod.string(),
  date: zod.string()
});