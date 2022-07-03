<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import Dialog, { Content, Title } from '@smui/dialog';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import Button from '@smui/button';
  import CompatibilityIcon from './CompatibilityIcon.svelte';
  let open = false;

  export let compatibility: CompatibilityInfoInput;
</script>

{#if compatibility}
  <Button
    title="Compatibility information"
    on:click={() => {
      open = true;
    }}
  >
    <CompatibilityIcon compatibility={compatibility.EA} />
    <CompatibilityIcon compatibility={compatibility.EXP} EXP={true} />
  </Button>

  <Dialog bind:open>
    <Title>Compatibility Information</Title>
    <Content>
      <CompatibilityInfo {compatibility} />
    </Content>
  </Dialog>
{/if}
