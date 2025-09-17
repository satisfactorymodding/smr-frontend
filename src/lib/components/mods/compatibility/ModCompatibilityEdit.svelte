<script lang="ts">
  import { run } from 'svelte/legacy';

  import { CompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/CompatibilityEdit.svelte';
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

  interface Props {
    compatibilityInfo?: CompatibilityInfo;
  }

  let { compatibilityInfo = $bindable(null) }: Props = $props();
  run(() => {
    if (compatibilityInfo == null) {
      compatibilityInfo = prefilledCompatibilityInfo;
    }
  });
  export const { t } = getTranslate();
</script>

<Accordion>
  <AccordionItem>
    {#snippet summary()}
      <span class="material-icons text-sm">rocket_launch</span>
      {$t('early-access')} - {$t('compatibility')}
    {/snippet}
    {#snippet content()}
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EA} />
    {/snippet}
  </AccordionItem>
  <AccordionItem>
    {#snippet summary()}
      <span class="material-icons text-sm">science</span>
      {$t('experimental')} - {$t('compatibility')}
    {/snippet}
    {#snippet content()}
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EXP} />
    {/snippet}
  </AccordionItem>
</Accordion>
