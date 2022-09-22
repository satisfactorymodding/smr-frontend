<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';

  export let compatibility: CompatibilityInfoInput;
</script>

{#if compatibility}
  <div>Early Access: <CompatibilityStateText state={compatibility.EA.state} /></div>
  {#if compatibility.EA.note}
    <div>
      Note: {#await markdown(compatibility.EA.note) then rendered}
        {@html rendered}
      {/await}
    </div>
  {/if}
  <div>Experimental: <CompatibilityStateText state={compatibility.EXP.state} /></div>
  {#if compatibility.EXP.note}
    <div>
      Note: {#await markdown(compatibility.EXP.note) then rendered}
        {@html rendered}
      {/await}
    </div>
  {/if}
{/if}
