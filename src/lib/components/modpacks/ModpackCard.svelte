<script lang="ts">
  import { type Modpack } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installModpack } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  // import OutdatedBanner from '$lib/components/modpacks/compatibility/OutdatedBanner.svelte';
  // import CompatibilityButton from '$lib/components/modpacks/compatibility/CompatibilityButton.svelte';
  // import { queryStore, getContextClient } from '@urql/svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  // import { GetModsCompatabilityDocument } from '$lib/generated';

  export let modpack: Pick<
    Modpack,
    'id' | 'name' | 'logo' | 'views' | 'installs' | 'short_description' | 'tags' | 'logo_thumbhash' | 'compatibility'
  >;

  // const client = getContextClient();
  // $: worstModList = [[modpack.compatibility], [modpack.compatibility]];
  //  $: worstModList = queryStore({
  //   query: GetModsCompatabilityDocument,
  //   client,
  //   pause: !modpack.id,
  //   variables: modpack.id ? { modpackID: modpack.id } : undefined,
  //   requestPolicy: 'network-only'
  // });

  // let modpackTrueCompatibility: typeof modpack.compatibility;

  // $: modpackTrueCompatibility.EA.state = (modpack.compatibility.EA.state === "Broken" || worstModList[0][0].EA.state === "Broken") ? CompatibilityState.Broken :
  //     (modpack.compatibility.EA.state === "Damaged" || worstModList[0][0].EA.state === "Damaged") ? CompatibilityState.Damaged :
  //     (modpack.compatibility.EA.state === "Works" || worstModList[0][0].EA.state === "Works") ? CompatibilityState.Works : null;

  // $: modpackTrueCompatibility.EXP.state = (modpack.compatibility.EXP.state === "Broken" || worstModList[1][0].EXP.state === "Broken") ? CompatibilityState.Broken :
  //     (modpack.compatibility.EXP.state === "Damaged" || worstModList[1][0].EXP.state === "Damaged") ? CompatibilityState.Damaged :
  //     (modpack.compatibility.EXP.state === "Works" || worstModList[1][0].EXP.state === "Works") ? CompatibilityState.Works : null;

  // $: modpackTrueCompatibility.EA.note = modpackTrueCompatibility.EA.state === CompatibilityState.Broken ? "Broken" :
  //     modpackTrueCompatibility.EA.state === CompatibilityState.Damaged ? "" :
  //     modpackTrueCompatibility.EA.state === CompatibilityState.Works ? "modpack.compatibility.note.works" :
  //     modpack.compatibility.EA.note;
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
    <!-- <CompatibilityButton compatibility={modpackTrueCompatibility} /> -->
  </div>
  <div slot="tags">
    <TagList tags={modpack.tags} />
  </div>
  <svelte:fragment slot="actions">
    <button class="variant-soft-surface btn btn-sm" title="Install" on:click={() => installModpack(modpack.id)}>
      <span class="material-icons">download</span>
    </button>
  </svelte:fragment>
  <div slot="outer">
    <!-- <OutdatedBanner compatibility={modpackTrueCompatibility} /> -->
  </div>
</FicsitCard>
