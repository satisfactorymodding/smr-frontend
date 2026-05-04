<script lang="ts">
  import { CompatibilityState, type Modpack } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installModpack } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  import OutdatedBanner from '$lib/components/modpacks/compatibility/OutdatedBanner.svelte';
  import CompatibilityButton from '$lib/components/modpacks/compatibility/CompatibilityButton.svelte';
  import { queryStore, getContextClient } from '@urql/svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { GetModCompatibilitiesDocument } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';

  export const { t } = getTranslate();

  export let downloadable = true;
  export let modpack: Pick<
    Modpack,
    'id' | 'name' | 'logo' | 'views' | 'installs' | 'short_description' | 'tags' | 'logo_thumbhash' | 'compatibility'
  >;

  const client = getContextClient();
  $: worstModList = queryStore({
    query: GetModCompatibilitiesDocument,
    client,
    pause: !modpack.id,
    variables: modpack.id ? { modpackID: modpack.id } : undefined,
    requestPolicy: 'network-only'
  });

  $: modpackTrueCompatibility = { EA: { state: null, note: null }, EXP: { state: null, note: null } };

  $: worst = $worstModList.data?.getModCompatibilities;

  function findCompatibilityLabel(modpackCompat, worstCompat, state) {
    if (state === CompatibilityState.Broken) {
      if (modpackCompat?.state === CompatibilityState.Broken) {
        return $t('modpack.compatibility.note.broken.modpack');
      } else {
        return $t({
          key: 'modpack.compatibility.note.broken.mod',
          params: { mods: worstCompat?.length, modName: worstCompat?.[0]?.name }
        });
      }
    } else if (state === CompatibilityState.Damaged) {
      if (modpackCompat?.state === CompatibilityState.Damaged) {
        return $t('modpack.compatibility.note.damaged.modpack');
      } else {
        return $t({
          key: 'modpack.compatibility.note.damaged.mod',
          params: { mods: worstCompat?.length, modName: worstCompat?.[0]?.name }
        });
      }
    } else if (state === CompatibilityState.Works) {
      return $t('modpack.compatibility.note.works');
    }
    return null;
  }

  $: modpackTrueCompatibility.EA.state =
    modpack?.compatibility?.EA?.state === 'Broken' || worst?.compatibility.EA.state === CompatibilityState.Broken
      ? CompatibilityState.Broken
      : modpack?.compatibility?.EA.state === 'Damaged' || worst?.compatibility.EA.state === 'Damaged'
        ? CompatibilityState.Damaged
        : modpack?.compatibility?.EA.state === 'Works' || worst?.compatibility.EA.state === 'Works'
          ? CompatibilityState.Works
          : null;

  $: modpackTrueCompatibility.EXP.state =
    modpack?.compatibility?.EXP?.state === 'Broken' || worst?.compatibility.EXP.state === CompatibilityState.Broken
      ? CompatibilityState.Broken
      : modpack?.compatibility?.EXP.state === 'Damaged' || worst?.compatibility.EXP.state === 'Damaged'
        ? CompatibilityState.Damaged
        : modpack?.compatibility?.EXP.state === 'Works' || worst?.compatibility.EXP.state === 'Works'
          ? CompatibilityState.Works
          : null;

  $: modpackTrueCompatibility.EA.note = findCompatibilityLabel(
    modpack?.compatibility?.EA,
    worst?.worstEA,
    modpackTrueCompatibility?.EA?.state
  );

  $: modpackTrueCompatibility.EXP.note = findCompatibilityLabel(
    modpack?.compatibility?.EXP,
    worst?.worstEXP,
    modpackTrueCompatibility?.EXP?.state
  );
</script>

<FicsitCard
  name={modpack.name}
  link={base + '/modpack/' + modpack.id}
  logo={modpack.logo}
  thumbhash={modpack.logo_thumbhash}
  description={modpack.short_description}>
  <div slot="stats" class="flex flex-row items-center gap-2">
    <span><span class="material-icons mr-1 align-middle text-sm">visibility</span>{prettyNumber(modpack.views)}</span>
    <span><span class="material-icons mr-1 align-middle text-sm">download</span>{prettyNumber(modpack.installs)}</span>
    <CompatibilityButton compatibility={modpackTrueCompatibility} />
  </div>
  <div slot="tags">
    <TagList tags={modpack.tags} />
  </div>
  <svelte:fragment slot="actions">
    {#if downloadable}
      <button class="variant-soft-surface btn btn-sm" title="Install" on:click={() => installModpack(modpack.id, '')}>
        <span class="material-icons">download</span>
      </button>
    {/if}
  </svelte:fragment>
  <div slot="outer">
    <OutdatedBanner compatibility={modpackTrueCompatibility} />
  </div>
</FicsitCard>
