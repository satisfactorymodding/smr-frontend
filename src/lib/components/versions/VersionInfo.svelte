<script lang="ts">
  import type { Version } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { prettyBytes, prettyDate, prettyNumber } from '$lib/utils/formatting';
  import { getTranslate } from "@tolgee/svelte";

  export let version!: Pick<Version, 'created_at' | 'sml_version' | 'size' | 'stability' | 'downloads' | 'hash'>;

  export const { t } = getTranslate();
</script>

<Card>
  <Content>
    <div class="text-lg break-words">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>{ $t('entry.created-at') }:</strong> {prettyDate(version.created_at)}</span><br />
      <span><strong>{ $t('downloads') }:</strong> {prettyNumber(version.downloads)}</span><br />
      <span><strong>SML { $t('version') }:</strong> {version.sml_version}</span><br />
      <span><strong>{ $t('stability') }:</strong> {version.stability}</span><br />
      <span><strong>{ $t('size') }:</strong> {prettyBytes(version.size)}</span><br />
      <span><strong>{ $t('hash') }:</strong> {version.hash}</span>
    </div>
  </Content>
</Card>
