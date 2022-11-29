import * as zod from 'zod';
import JSZip from 'jszip';
import { validateUPluginJson } from '$lib/utils/uplugin';
import type { Writable } from 'svelte/store';
import type { ZodObject, ZodRawShape } from 'zod';
import type { File } from '$lib/models/file';
import type { VersionStabilities } from '$lib/generated';

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
};

export type modArchData = {
  ModVersionID: string;
  platform: string;
  asset: string;
  hash?: string;
  size?: number;
};

export type VersionData = {
  file: File;
  changelog: string;
  stability: VersionStabilities;
  arch: modArchData[];
};

const validateUPluginJsonModZip = async (
  zip: JSZip,
  uPluginJsonFile: JSZip.JSZipObject,
  modReference: string
): Promise<{ [key: string]: unknown } | VersionMetadata> =>
  uPluginJsonFile
    .async('string')
    .then(async (uPluginJson) => {
      const result = await validateUPluginJson(uPluginJson);

      if (result.length != 0) {
        return {
          message: `invalid ${modReference}.uplugin`,
          extended: result
        };
      }

      const parsed = JSON.parse(uPluginJson);

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

      const uPluginLinuxServer = await zip.file('LinuxServer/' + modReference + '.uplugin')?.async('string');
      const uPluginWin64Server = await zip.file('WindowsServer/' + modReference + '.uplugin')?.async('string');

      if (uPluginLinuxServer.length != 0) {
        if (uPluginJson != uPluginLinuxServer) {
          return {
            message: 'LinuxServer uPlugin does not match WindowsNoEditor uPlugin'
          };
        }
      }

      if (uPluginWin64Server.length != 0) {
        if (uPluginJson != uPluginWin64Server) {
          return {
            message: 'WindowsServer uPlugin does not match WindowsNoEditor uPlugin'
          };
        }
      }

      return {
        uplugin: parsed,
        objects: Object.keys(zip.files).filter((f) => f.endsWith('.so') || f.endsWith('.dll') || f.endsWith('.pak'))
      };
    })
    .catch((err) => ({
      message: `invalid ${modReference}.uplugin: ${err}`
    }));

const validateModZip = async (
  file: unknown,
  modReference: string
): Promise<{ [key: string]: unknown } | VersionMetadata> => {
  const zipper = new JSZip();
  return (
    zipper
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .loadAsync(file as any)
      .then((zip) => {
        const uPluginJsonFile = zip.file('WindowsNoEditor/' + modReference + '.uplugin');
        if (uPluginJsonFile) {
          return validateUPluginJsonModZip(zip, uPluginJsonFile, modReference);
        }

        return {
          message: 'WindowsNoEditor/' + modReference + '.uplugin missing from mod'
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
