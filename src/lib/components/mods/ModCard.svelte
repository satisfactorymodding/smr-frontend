<script lang="ts">
  import type { Mod, Maybe, Version } from '$lib/generated';
  import { base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { installMod } from '$lib/stores/launcher';
  import { prettyNumber } from '$lib/utils/formatting';
  import OutdatedBanner from '$lib/components/mods/compatibility/OutdatedBanner.svelte';
  import CompatibilityButton from '$lib/components/mods/compatibility/CompatibilityButton.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';

  interface Props {
    mod: Pick<
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
  }

  let { mod }: Props = $props();

  let installable = $derived(
    'latestVersions' in mod ? mod.latestVersions.alpha || mod.latestVersions.beta || mod.latestVersions.release : false
  );
</script>

<FicsitCard
  name={mod.name}
  link={base + '/mod/' + mod.mod_reference}
  logo={mod.logo}
  thumbhash={mod.logo_thumbhash}
  description={mod.short_description}>
  {#snippet stats()}
    <div class="flex flex-row items-center gap-2">
      <span><span class="material-icons mr-1 align-middle text-sm">visibility</span>{prettyNumber(mod.views)}</span>
      <span><span class="material-icons mr-1 align-middle text-sm">download</span>{prettyNumber(mod.downloads)}</span>
      <CompatibilityButton compatibility={mod.compatibility} />
    </div>
  {/snippet}
  {#snippet tags()}
    <div>
      <TagList tags={mod.tags} />
    </div>
  {/snippet}
  {#snippet actions()}
    {#if installable}
      <button class="variant-soft-surface btn btn-sm" title="Install" onclick={() => installMod(mod.mod_reference)}>
        <span class="material-icons">download</span>
      </button>
    {/if}
  {/snippet}
  {#snippet outer()}
    <div>
      <OutdatedBanner compatibility={mod.compatibility} />
    </div>
  {/snippet}
</FicsitCard>
