<script lang="ts">
  import type { Version } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { prettyBytes, prettyDate, prettyNumber } from '$lib/utils/formatting';

  export let version!: Pick<Version, 'created_at' | 'sml_version' | 'size' | 'stability' | 'downloads' | 'hash'>;
</script>

<Card>
  <Content>
    <div class="text-lg">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>Created:</strong> {prettyDate(version.created_at)}</span><br />
      <span><strong>Downloads:</strong> {prettyNumber(version.downloads)}</span><br />
      <span><strong>SML Version:</strong> {version.sml_version}</span><br />
      <span><strong>Stability:</strong> {version.stability}</span><br />
      <span><strong>Size:</strong> {prettyBytes(version.size)}</span><br />
      <span><strong>Hash:</strong> {version.hash}</span>
    </div>
  </Content>
</Card>
