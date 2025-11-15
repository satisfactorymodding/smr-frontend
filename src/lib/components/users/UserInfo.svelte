<script lang="ts">
  import type { User } from '$lib/generated';
  import { prettyDate } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import InfoCard from '$lib/components/general/InfoCard.svelte';

  interface Props {
    user: Pick<User, 'created_at'>;
  }

  let { user }: Props = $props();

  export const { t } = getTranslate();
</script>

<InfoCard>
  <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(user.created_at)}</span><br />
</InfoCard>
