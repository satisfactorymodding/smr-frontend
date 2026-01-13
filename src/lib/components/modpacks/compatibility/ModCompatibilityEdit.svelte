<script lang="ts">
  import { CompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/modpacks/compatibility/CompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  const prefilledCompatibilityInfo = {
    EA: {
      state: CompatibilityState.Works,
      note: ''
    },
    EXP: {
      state: CompatibilityState.Works,
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
</Accordion>
