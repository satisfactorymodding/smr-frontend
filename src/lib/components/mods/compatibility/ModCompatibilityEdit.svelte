<script lang="ts">
  import { CompatibilityState, ControllerCompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/branch/CompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import ControllerCompatibilityEdit from './controller/ControllerCompatibilityEdit.svelte';

  const prefilledCompatibilityInfo = {
    EA: {
      state: CompatibilityState.Works,
      note: ''
    },
    EXP: {
      state: CompatibilityState.Works,
      note: ''
    },
    Controller: {
      state: ControllerCompatibilityState.Untested,
      note: ''
    }
  };

  export let compatibilityInfo: CompatibilityInfo = null;
  $: if (compatibilityInfo == null) {
    compatibilityInfo = prefilledCompatibilityInfo;
  }
  export const { t } = getTranslate();
</script>

<Accordion>
  <AccordionItem>
    <svelte:fragment slot="summary">
      <span class="material-icons text-sm">rocket_launch</span>
      {$t('early-access')} - {$t('compatibility')}</svelte:fragment>
    <svelte:fragment slot="content">
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EA} />
    </svelte:fragment>
  </AccordionItem>
  <AccordionItem>
    <svelte:fragment slot="summary">
      <span class="material-icons text-sm">science</span>
      {$t('experimental')} - {$t('compatibility')}</svelte:fragment>
    <svelte:fragment slot="content">
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EXP} />
    </svelte:fragment>
  </AccordionItem>
  <AccordionItem>
    <svelte:fragment slot="summary">
      <span class="material-icons text-sm">videogame_asset</span>
      {$t('controller')} - {$t('compatibility')}</svelte:fragment>
    <svelte:fragment slot="content">
      <ControllerCompatibilityEdit bind:compatibility={compatibilityInfo.Controller} />
    </svelte:fragment>
  </AccordionItem>
</Accordion>
