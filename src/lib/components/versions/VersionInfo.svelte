<script lang="ts">
  import type { Version } from '$lib/generated';
  import { prettyBytes, prettyDate, prettyNumber } from '$lib/utils/formatting';
  import { getTranslate } from '@tolgee/svelte';

  interface Props {
    version: Pick<Version, 'created_at' | 'game_version' | 'size' | 'downloads' | 'hash'>;
  }

  let { version }: Props = $props();

  export const { t } = getTranslate();
</script>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    <div class="text-lg break-words">
      <h3 class="my-4 text-2xl font-bold">Info</h3>
      <span><strong>{$t('entry.created-at')}:</strong> {prettyDate(version.created_at)}</span><br />
      <span><strong>{$t('downloads')}:</strong> {prettyNumber(version.downloads)}</span><br />
      <span><strong>{$t('game-versions')}:</strong> {version.game_version}</span><br />
      <span><strong>{$t('size')}:</strong> {prettyBytes(version.size)}</span><br />
      <span><strong>{$t('hash')}:</strong> {version.hash}</span>
    </div>
  </section>
</div>
