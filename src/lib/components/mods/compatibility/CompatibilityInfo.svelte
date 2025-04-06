<script lang="ts">
  import { ControllerCompatibilityState, type CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityStateText from '$lib/components/mods/compatibility/branch/CompatibilityStateText.svelte';
  import { markdown } from '../../../utils/markdown';
  import { getTolgee, getTranslate } from '@tolgee/svelte';
  import ControllerCompatibilityStateText from './controller/ControllerCompatibilityStateText.svelte';
  import {
    getCompatibilityStateDescriptionFor,
    getControllerCompatibilityStateDescriptionFor
  } from '$lib/utils/compatibility-descriptions';

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<div>
  {$t('compatibility-info.maintained-by')}
  <a href="https://discord.gg/xkVJ73E" style="text-decoration: underline">{$t('discord')}</a>!
</div>
<br />
{#if compatibility}
  <div>{$t('early-access')}: <CompatibilityStateText state={compatibility?.EA?.state} /></div>
  <div class="compatibility-state-description">
    {getCompatibilityStateDescriptionFor(compatibility?.EA?.state || 'Unknown', tolgee)}
  </div>
  {#if compatibility.EA.note}
    <div>
      {$t('compatibility-info.note')}: {#await markdown(compatibility.EA.note) then rendered}
        <!-- eslint-disable-next-line -->
        {@html rendered}
      {/await}
    </div>
  {/if}
  <br />
  <div>{$t('experimental')}: <CompatibilityStateText state={compatibility?.EXP?.state} /></div>
  <div class="compatibility-state-description">
    {getCompatibilityStateDescriptionFor(compatibility?.EXP?.state || 'Unknown', tolgee)}
  </div>
  {#if compatibility.EXP.note}
    <div>
      {$t('compatibility-info.note')}: {#await markdown(compatibility.EXP.note) then rendered}
        <!-- eslint-disable-next-line -->
        {@html rendered}
      {/await}
    </div>
  {/if}
  <br />
  <div>{$t('controller')}: <ControllerCompatibilityStateText state={compatibility?.Controller?.state} /></div>
  <div class="compatibility-state-description">
    {getControllerCompatibilityStateDescriptionFor(
      compatibility?.Controller?.state || ControllerCompatibilityState.Untested,
      tolgee
    )}
  </div>
  {#if compatibility.Controller.note}
    <div>
      {$t('compatibility-info.note')}: {#await markdown(compatibility.Controller.note) then rendered}
        <!-- eslint-disable-next-line -->
        {@html rendered}
      {/await}
    </div>
  {/if}
{:else}
  <div>
    {getCompatibilityStateDescriptionFor('Unknown', tolgee)}
  </div>
{/if}
