<script lang="ts">
  import type { Guide } from '$lib/generated';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import InfoCard from '$lib/components/general/InfoCard.svelte';

  interface Props {
    guide: Pick<Guide, 'created_at'>;
  }

  let { guide }: Props = $props();

  export const { t } = getTranslate();
</script>

<InfoCard>
  <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(guide.created_at)}</span><br />
</InfoCard>
