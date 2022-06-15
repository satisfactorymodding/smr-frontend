<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';

  export let compatibility: CompatibilityInfoInput;
</script>

{#if compatibility}
  <div>Early Access: <CompatibilityStateText state={compatibility.EA.state} /></div>
  {#if compatibility.EA.note}
    {compatibility.EA.note}
  {/if}
  <br />
  <div>Experimental: <CompatibilityStateText state={compatibility.EXP.state} /></div>
  {#if compatibility.EXP.note}
    {compatibility.EXP.note}
  {/if}
{/if}
