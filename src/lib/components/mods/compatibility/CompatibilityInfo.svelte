<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';

  export let compatibility: CompatibilityInfoInput;
  export const compatibilityStateDescriptions: {
    [key: string]: string;
  } = {
    Works: 'The mod should be functioning as intended.',
    Damaged:
      'Something is causing the mod to work improperly, but it is partially working. Be sure to read the note and see an explanation of what is going wrong!',
    Broken:
      'The mod is suffering from a critical problem and could do things like crash your game at launch if you were to install it. Be sure to read the note and see an explanation of what is going wrong!',
    Unknown:
      'No compatibility information has been reported for this mod yet. Try it out and contact us on the Discord so it can be updated!'
  };
</script>

<div>
  Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the <a
    href="https://discord.gg/xkVJ73E"
    style="text-decoration: underline">Discord</a
  >!
</div>
<br />
{#if compatibility}
  <div>Early Access: <CompatibilityStateText state={compatibility?.EA?.state} /></div>
  <div class="compatibility-state-description">
    {compatibilityStateDescriptions[compatibility?.EA?.state || 'Unknown']}
  </div>
  {#if compatibility.EA.note}
    <div>
      Note: {#await markdown(compatibility.EA.note) then rendered}
        {@html rendered}
      {/await}
    </div>
  {/if}
  <div>Experimental: <CompatibilityStateText state={compatibility?.EXP?.state} /></div>
  <div class="compatibility-state-description">
    {compatibilityStateDescriptions[compatibility?.EXP?.state || 'Unknown']}
  </div>
  {#if compatibility.EXP.note}
    <div>
      Note: {#await markdown(compatibility.EXP.note) then rendered}
        {@html rendered}
      {/await}
    </div>
  {/if}
{:else}
  <div>
    {compatibilityStateDescriptions.Unknown}
  </div>
{/if}
