import type { Thing, WithContext } from 'schema-dts';
import type { Mod, Modpack } from '$lib/generated';
import { assets } from '$app/paths';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(schema: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

export const modSchema = (mod: Pick<Mod, 'name' | 'logo' | 'short_description'>): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  image: mod.logo || assets + '/images/no_image.webp',
  name: mod.name,
  description: mod.short_description
});

export const modpackSchema = (modpack: Pick<Modpack, 'name' | 'logo' | 'short_description'>): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  image: modpack.logo || assets + '/images/no_image.webp',
  name: modpack.name,
  description: modpack.short_description
});
