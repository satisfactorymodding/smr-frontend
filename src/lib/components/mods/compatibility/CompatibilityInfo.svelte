<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';

  export let compatibility: CompatibilityInfoInput;
</script>

{#if compatibility}
  <div>Early Access: <CompatibilityStateText state={compatibility.EA.state} /></div>
  {#if compatibility.EA.note}
    Note: {compatibility.EA.note}
  {/if}
  <div>Experimental: <CompatibilityStateText state={compatibility.EXP.state} /></div>
  {#if compatibility.EXP.note}
    Note: {compatibility.EXP.note}
  {/if}
{/if}
