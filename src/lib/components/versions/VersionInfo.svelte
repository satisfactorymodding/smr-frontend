<script lang="ts">
  import type { Version } from '$lib/generated';
  import { prettyBytes, prettyDate, prettyNumber } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';
  import InfoCard from '$lib/components/general/InfoCard.svelte';

  interface Props {
    version: Pick<Version, 'created_at' | 'game_version' | 'size' | 'downloads' | 'hash'>;
  }

  let { version }: Props = $props();

  export const { t } = getTranslate();
</script>

<InfoCard>
  <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(version.created_at)}</span><br />
  <span><strong>{$t('downloads')}:</strong> {prettyNumber(version.downloads)}</span><br />
  <span><strong>{$t('game-versions')}:</strong> {version.game_version}</span><br />
  <span><strong>{$t('size')}:</strong> {prettyBytes(version.size)}</span><br />
  <span><strong>{$t('hash')}:</strong> {version.hash}</span>
</InfoCard>
