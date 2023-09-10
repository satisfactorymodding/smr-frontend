<script lang="ts">
  import { CompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/CompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  export let compatibilityInfo: CompatibilityInfo = undefined;
  if (compatibilityInfo == null) {
    compatibilityInfo = {
      EA: {
        state: CompatibilityState.Works,
        note: ''
      },
      EXP: {
        state: CompatibilityState.Works,
        note: ''
      }
    };
  }

  export const { t } = getTranslate();
</script>

<Accordion>
  <AccordionItem>
    <svelte:fragment slot="summary">{$t('early-access')} - {$t('compatibility')}</svelte:fragment>
    <svelte:fragment slot="content">
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EA} />
    </svelte:fragment>
  </AccordionItem>
  <AccordionItem>
    <svelte:fragment slot="summary">{$t('experimental')} - {$t('compatibility')}</svelte:fragment>
    <svelte:fragment slot="content">
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EXP} />
    </svelte:fragment>
  </AccordionItem>
</Accordion>
