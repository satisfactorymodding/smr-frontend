import type { Thing, WithContext } from 'schema-dts';
import type { Mod } from '$lib/generated';
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
