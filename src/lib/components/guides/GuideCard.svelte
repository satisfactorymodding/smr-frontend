<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { prettyNumber } from '$lib/utils/formatting';

  interface Props {
    guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
    logo?: string;
  }

  let { guide, logo = assets + '/images/no_image.webp' }: Props = $props();
</script>

<FicsitCard name={guide.name} {logo} description={guide.short_description} link={base + `/guide/${guide.id}`}>
  {#snippet stats()}
    <div>
      <span><span class="material-icons align-middle text-sm">visibility</span>{prettyNumber(guide.views)}</span>
    </div>
  {/snippet}
</FicsitCard>
