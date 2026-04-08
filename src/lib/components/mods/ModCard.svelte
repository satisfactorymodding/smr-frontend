<script lang="ts">
  import { onMount } from 'svelte';
  import { GetModVersionsDocument } from '$lib/generated';
  import { getContext } from 'svelte';
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';
  import CompatibilityButton from '$lib/components/mods/compatibility/CompatibilityButton.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { getTranslate, T } from '@tolgee/svelte';
  import { getContextClient, queryStore } from '@urql/svelte';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

  export const { t } = getTranslate();

  const context = getContext<{
    addMod: (id: string, version: string) => void;
    removeMod: (id: string) => void;
  }>('MOD_MANAGER');

  export let mod: Pick<
    Mod,
    | 'id'
    | 'mod_reference'
    | 'name'
    | 'logo'
    | 'views'
    | 'downloads'
    | 'short_description'
    | 'compatibility'
    | 'tags'
    | 'logo_thumbhash'
  > & {
    latestVersions: {
      alpha?: Maybe<Pick<Version, 'id'>>;
      beta?: Maybe<Pick<Version, 'id'>>;
      release?: Maybe<Pick<Version, 'id'>>;
    };
  };

  const client = getContextClient();
  const modVersions = queryStore({
    query: GetModVersionsDocument,
    client,
    pause: !mod,
    variables: mod ? { mod: mod.id, limit: 100, offset: 0 } : undefined,
    requestPolicy: 'network-only'
  });

  export let include = false;
  export let exclude = false;

  function handleAdd(version: string) {
    context.addMod(mod.id, version);
  }

  $: installable = !!(mod.latestVersions?.alpha || mod.latestVersions?.beta || mod.latestVersions?.release);

  const popupId = `popup-${mod.id}`;
  let triggerButton: HTMLButtonElement;

  const popupSettings: PopupSettings = {
    event: 'click',
    target: popupId,
    placement: 'bottom-end'
  };

  onMount(() => {
    if (triggerButton) {
      popup(triggerButton, popupSettings);
    }
  });
</script>

<div class="relative" data-popup-root>
  <FicsitCard
    name={mod.name}
    link="{base}/mod/{mod.mod_reference}"
    logo={mod.logo}
    thumbhash={mod.logo_thumbhash}
    description={mod.short_description}>
    <div slot="stats" class="flex flex-row items-center gap-2">
      <span class="flex items-center">
        <span class="material-icons mr-1 text-sm">visibility</span>
        {prettyNumber(mod.views)}
      </span>
      <span class="flex items-center">
        <span class="material-icons mr-1 text-sm">download</span>
        {prettyNumber(mod.downloads)}
      </span>
      <CompatibilityButton compatibility={mod.compatibility} />
    </div>

    <div slot="tags">
      <TagList tags={mod.tags} />
    </div>

    <svelte:fragment slot="actions">
      {#if installable && !exclude && !include}
        <button class="variant-soft-surface btn btn-sm" on:click={() => installMod(mod.mod_reference)}>
          <span class="material-icons">download</span>
        </button>
      {/if}

      {#if include && context}
        <button class="variant-soft-surface btn btn-sm" on:click={() => context.removeMod(mod.id)}>
          <span class="material-icons">remove</span>
        </button>
      {:else if exclude && context}
        <button class="variant-soft-surface btn btn-sm" bind:this={triggerButton}>
          <span class="material-icons">add</span>
        </button>
      {/if}
    </svelte:fragment>

    <div slot="outer">
      <OutdatedBanner compatibility={mod.compatibility} />
    </div>
  </FicsitCard>

  <div
    data-popup={popupId}
    class="card z-[999] min-w-[14rem] border border-surface-500/30 bg-surface-800 p-2 shadow-xl">
    <nav class="list-nav">
      <ul>
        <li>
          <button class="option variant-filled-primary w-full" on:click={() => handleAdd('>=0.0.0')}>
            <span class="flex-auto text-left">
              <T defaultValue="Any" keyName="mod-details.change-version-any" />
            </span>
          </button>
        </li>

        <hr class="my-2 opacity-20" />

        {#if $modVersions?.data?.getMod?.versions}
          {#each $modVersions.data.getMod.versions as version}
            <li class="mb-1 flex gap-1 last:mb-0">
              <button class="option variant-soft-surface flex-1 text-left" on:click={() => handleAdd(version.version)}>
                {version.version}
              </button>

              <button
                class="variant-soft-surface btn btn-sm px-3"
                title={$t('modpack.add-mod.or-newer')}
                on:click={() => handleAdd(`>=${version.version}`)}>
                {$t('modpack.add-mod.or-newer')}
              </button>
            </li>
          {/each}
        {/if}
      </ul>
    </nav>
  </div>
</div>
