<script lang="ts">
  import Accordion, { Header, Panel, Content } from '@smui-extra/accordion';
  import { CompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/CompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';

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
  <Panel>
    <Header>{$t('early-access')} - {$t('compatibility')}</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EA} />
    </Content>
  </Panel>
  <Panel>
    <Header>{$t('experimental')} - {$t('compatibility')}</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EXP} />
    </Content>
  </Panel>
</Accordion>
