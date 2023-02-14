<script lang="ts">
  import type { Version } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { prettyArch, prettyBytes, prettyDate, prettyHash, prettyNumber } from '$lib/utils/formatting';

  export let version!: Pick<
    Version,
    'created_at' | 'sml_version' | 'size' | 'stability' | 'downloads' | 'hash' | 'arch'
  >;

  const hash_toggle: boolean[] = [];
  for (let i = 0; version.arch.length < i; i++) {
    hash_toggle.push(true);
  }
</script>

<Card>
  <Content>
    <div class="text-lg break-words">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>Created:</strong> {prettyDate(version.created_at)}</span><br />
      <span><strong>Downloads:</strong> {prettyNumber(version.downloads)}</span><br />
      <span><strong>SML Version:</strong> {version.sml_version}</span><br />
      <span><strong>Stability:</strong> {version.stability}</span><br />
      {#if version.arch.length != 0}
        {#each version.arch as arch, i}
          <hr style="margin-top: 10px; margin-bottom: 10px; vertical-align: middle;" />
          <span><strong>Platform:</strong> {prettyArch(arch.platform)}</span><br />
          <span><strong>Size:</strong> {prettyBytes(arch.size)}</span><br />
          <span
            ><strong>Hash:</strong>
            {prettyHash(hash_toggle[i], arch.hash)}
            <button on:click={() => (hash_toggle[i] = !hash_toggle[i])}>show/hide</button>
          </span>
        {/each}
      {:else}
        <span><strong>Size:</strong> {prettyBytes(version.size)}</span><br />
        <span><strong>Hash:</strong> {version.hash}</span>
      {/if}
    </div>
  </Content>
</Card>
