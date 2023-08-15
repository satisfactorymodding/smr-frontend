<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';
  import MultiplayerStateText from '$lib/components/mods/compatibility/MultiplayerStateText.svelte';

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

  export const multiplayerStateDescriptions: {
    [key: string]: string;
  } = {
    Unknown:
      'The mod developer has not indicated if this mod is multiplayer compatible or not. Try it and find out, then let us know on the Discord so we can mark it accordingly.',
    SinglePlayer: 'This mod will cause crashes if loaded in multiplayer',
    HostOnly:
      'This mod will load without crashes in multiplayer, but most functionality is only usable by the host player. Remember, on dedicated servers, everyone is a client player.',
    Unstable:
      "(Not sure if we should keep this one) Some way for mod devs to indicate that they intend multiplayer support, but it isn't totally working yet",
    Compatible: 'This mod will work on multiplayer clients, hosts, and dedicated servers',
    ClientOnly:
      'This mod only needs to be installed on the game client to work, installing it on servers has no effect',
    ServerOnly: 'This mod only needs to be installed on dedicated servers'
  };
</script>

<div>
  Compatibility information is maintained by the community. If you encounter issues with a mod, please report it on the <a
    href="https://discord.gg/xkVJ73E"
    style="text-decoration: underline">Discord</a
  >!
</div>
<br />
<div class="grid grid-flow-row flex flex-wrap h-auto">
  {#if compatibility}
    <div class="grid grid-flow-col flex flex-wrap">
    <div>
      <div style="font-weight: bold;">General Mod Functionality:</div>
      <div class="grid grid-flow-row">
        <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
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
        </div>
        <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
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
        </div>
      </div>
    </div>
    <div>
      <div style="font-weight: bold;">Multiplayer Functionality:</div>
      <div class="grid grid-flow-row">
        <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
          <div>Early Access: <MultiplayerStateText multi={compatibility?.EA?.multi} /></div>
          <div class="compatibility-state-description">
            {multiplayerStateDescriptions[compatibility?.EA?.multi || 'Unknown']}
          </div>
        </div>
        <div class="text-1xl col-span-3 w-auto h-auto p-2.5">
          <br />
          <div>Experimental: <MultiplayerStateText multi={compatibility?.EXP?.multi} /></div>
          <div class="compatibility-state-description">
            {multiplayerStateDescriptions[compatibility?.EXP?.multi || 'Unknown']}
          </div>
        </div>
      </div>
    </div>
  </div>
  {:else}
      <div style="font-weight: bold;">General Mod Functionality:</div>
      <div>
        {compatibilityStateDescriptions.Unknown}
      </div>
      <br />
      <div style="font-weight: bold;">Multiplayer Functionality:</div>
      <div>
        {multiplayerStateDescriptions.Unknown}
      </div>
  {/if}
</div>
