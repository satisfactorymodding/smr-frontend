<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';
  import { getTranslate } from '@tolgee/svelte';

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();
  export const compatibilityStateDescriptions: {
    [key: string]: string;
  } = {
    Works: $t('compatibility-info.state.works.description'),
    Damaged: $t('compatibility-info.state.damaged.description'),
    Broken: $t('compatibility-info.state.broken.description'),
    Unknown: $t('compatibility-info.state.unknown.description')
  };
</script>

<div>
  {$t('compatibility-info.maintained-by')}
  <a href="https://discord.gg/xkVJ73E" style="text-decoration: underline">{$t('discord')}</a>!
</div>
<br />
{#if compatibility}
  <div>{$t('early-access')}: <CompatibilityStateText state={compatibility?.EA?.state} /></div>
  <div class="compatibility-state-description">
    {compatibilityStateDescriptions[compatibility?.EA?.state || 'Unknown']}
  </div>
  {#if compatibility.EA.note}
    <div>
      {$t('compatibility-info.note')}: {#await markdown(compatibility.EA.note) then rendered}
        <!-- eslint-disable -->
        {@html rendered}
      {/await}
    </div>
  {/if}
  <br />
  <div>{$t('experimental')}: <CompatibilityStateText state={compatibility?.EXP?.state} /></div>
  <div class="compatibility-state-description">
    {compatibilityStateDescriptions[compatibility?.EXP?.state || 'Unknown']}
  </div>
  {#if compatibility.EXP.note}
    <div>
      {$t('compatibility-info.note')}: {#await markdown(compatibility.EXP.note) then rendered}
        <!-- eslint-disable -->
        {@html rendered}
      {/await}
    </div>
  {/if}
{:else}
  <div>
    {compatibilityStateDescriptions.Unknown}
  </div>
{/if}
