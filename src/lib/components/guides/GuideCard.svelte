<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { prettyNumber } from '$lib/utils/formatting';

  export let guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
  export let logo = assets + '/images/no_image.webp';
</script>

<FicsitCard name={guide.name} {logo} description={guide.short_description} link={base + `/guide/${guide.id}`}>
  <div slot="stats">
    <span><span class="material-icons align-middle text-sm">visibility</span>{prettyNumber(guide.views)}</span>
  </div>
</FicsitCard>
