import * as zod from 'zod';
import JSZip from 'jszip';
import { validateUPluginJson } from '$lib/utils/uplugin';
import type { Writable } from 'svelte/store';
import type { ZodObject, ZodRawShape } from 'zod';
import type { File } from '$lib/models/file';
import type { VersionStabilities } from '$lib/generated';
import { TargetName } from '$lib/generated/graphql';

export type VersionData = {
  file: File;
  changelog: string;
  stability: VersionStabilities;
};

export type VersionMetadata = {
  uplugin: {
    Version: string;
    SemVersion?: string;
    Plugins?: {
      Name: string;
      SemVersion?: string;
    }[];
  };
  objects: string[];
  targets: string[];
};

const ALLOWED_TARGETS = Object.keys(TargetName)
  .map((key) => TargetName[key])
  .filter((value) => typeof value === 'string') as TargetName[];

const readUPluginJson = async (
  uPluginJson: string,
  modReference: string
): Promise<{ [key: string]: unknown } | VersionMetadata['uplugin']> => {
  const result = await validateUPluginJson(uPluginJson);

  if (result.length != 0) {
    return {
      message: `invalid ${modReference}.uplugin`,
      extended: result
    };
  }

  const parsed = JSON.parse(uPluginJson) as VersionMetadata['uplugin'];

  let foundSML = false;
  for (const dependency of parsed.Plugins) {
    if (dependency.Name === 'SML') {
      foundSML = true;
      break;
    }
  }

  if (!foundSML) {
    return {
      message: 'mod must depend on SML'
    };
  }

  return parsed;
};

function basename(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

function dirname(path: string): string {
  const parts = path.split('/');
  return parts.slice(0, parts.length - 1).join('/');
}

const validateModZip = async (
  file: unknown,
  modReference: string
): Promise<{ [key: string]: unknown } | VersionMetadata> => {
  const zipper = new JSZip();
  return (
    zipper
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .loadAsync(file as any)
      .then(async (zip) => {
        const uPluginFiles = zip.filter((filePath) => basename(filePath) == modReference + '.uplugin');

        if (uPluginFiles.length === 0) {
          return {
            message: 'Mod does not contain any ' + modReference + '.uplugin files'
          };
        }

        if (uPluginFiles.length === 1 && uPluginFiles[0].name === modReference + '.uplugin') {
          // Single-target mod
          const uPluginData = await readUPluginJson(await uPluginFiles[0].async('string'), modReference);

          if ('message' in uPluginData) {
            return uPluginData;
          }

          return {
            uplugin: uPluginData,
            objects: Object.keys(zip.files).filter(
              (f) => f.endsWith('.so') || f.endsWith('.dll') || f.endsWith('.pak')
            ),
            targets: ['Windows']
          };
        }

        // Do not allow multi-target mods for now
        return {
          message: 'multi-target mods are not allowed'
        };

        // Multi-target mod
        if (uPluginFiles.some((f) => f.name === modReference + '.uplugin')) {
          return {
            message:
              'Mod contains ' +
              modReference +
              '.uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html'
          };
        }

        const targets = uPluginFiles.map((f) => dirname(f.name));

        const invalidTargets = targets.filter((t) => !ALLOWED_TARGETS.includes(t as TargetName));
        if (invalidTargets.length !== 0) {
          return {
            message: `invalid target(s): ${invalidTargets.join(', ')}`
          };
        }

        const outsideFiles = zip.filter((filePath) => !targets.some((target) => filePath.startsWith(target + '/')));
        if (outsideFiles.length !== 0) {
          return {
            message: `file(s) outside target directories: ${outsideFiles.map((f) => f.name).join(', ')}`
          };
        }

        const uPluginFilesData = await Promise.all(
          uPluginFiles.map((f) =>
            f.async('string').catch((err) => {
              // Will be caught by the .catch below
              throw new Error(`invalid ${modReference}.uplugin: ${err}`);
            })
          )
        );

        if (!uPluginFilesData.every((f) => f === uPluginFilesData[0])) {
          return {
            message: 'Mod contains ' + modReference + '.uplugin files with different contents'
          };
        }

        // Since the .uplugin files are all the same, we only need to parse one
        const uPluginData = await readUPluginJson(uPluginFilesData[0], modReference);

        if ('message' in uPluginData) {
          return uPluginData;
        }

        return {
          uplugin: uPluginData,
          objects: Object.keys(zip.files).filter((f) => f.endsWith('.so') || f.endsWith('.dll') || f.endsWith('.pak')),
          targets
        };
      })
      .catch((err) => ({
        message: 'invalid zip/smod file: ' + err
      }))
  );
};

export const constructVersionSchema = (
  modReference: string,
  modMetadata: Writable<VersionMetadata>
): ZodObject<ZodRawShape> =>
  zod.object({
    file: zod.optional(
      zod.any().superRefine(async (file, ctx) => {
        if (!('name' in file && 'size' in file && 'type' in file)) {
          ctx.addIssue({
            message: 'Unknown file error',
            code: zod.ZodIssueCode.custom
          });
          return;
        }

        const result = await validateModZip(file, modReference);

        if ('message' in result) {
          ctx.addIssue({
            message: result.message as string,
            code: zod.ZodIssueCode.custom
          });
          return;
        }

        modMetadata.set(result as VersionMetadata);
      })
    ),
    changelog: zod.string(),
    stability: zod.string()
  });
