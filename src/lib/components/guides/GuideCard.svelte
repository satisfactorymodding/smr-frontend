<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { assets, base } from '$app/paths';
  import { Icon } from '@smui/icon-button';
  import FicsitCard from '$lib/components/general/FicsitCard.svelte';
  import { prettyNumber } from '$lib/utils/formatting';

  export let guide: Pick<Guide, 'id' | 'name' | 'views' | 'short_description'>;
  export let logo = assets + '/images/no_image.png';
</script>

<FicsitCard name={guide.name} {logo} description={guide.short_description} link={base + `/guide/${guide.id}/`}>
  <div slot="stats">
    <span><Icon class="material-icons align-middle text-sm">visibility</Icon>{prettyNumber(guide.views)}</span>
  </div>
</FicsitCard>
