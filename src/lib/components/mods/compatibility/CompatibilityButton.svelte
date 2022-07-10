<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { CompatibilityState } from '$lib/generated';
  import IconButton from '@smui/icon-button';
  import Dialog, { Content, Title } from '@smui/dialog';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  let open = false;

  export let compatibility: CompatibilityInfoInput;

  let CSSClass = '';
  if (compatibility) {
    switch (compatibility.EXP.state) {
      case CompatibilityState.Broken:
        CSSClass = 'mod-broken-button';
        break;
      case CompatibilityState.Damaged:
        CSSClass = 'mod-damaged-button';
        break;
    }
  }
</script>

{#if compatibility}
  <IconButton
    class="{CSSClass} material-icons"
    title="Compatibility issues"
    on:click={() => {
      open = true;
    }}>
    warning
  </IconButton>

  <Dialog bind:open>
    <Title>Compatibility Info</Title>
    <Content>
      <CompatibilityInfo {compatibility} />
    </Content>
  </Dialog>
{/if}
