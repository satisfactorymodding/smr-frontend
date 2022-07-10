<script lang="ts">
  import Accordion, { Header, Panel, Content } from '@smui-extra/accordion';
  import { CompatibilityState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/CompatibilityEdit.svelte';
  import { onMount } from 'svelte';

  export let compatibilityInfo: CompatibilityInfo = null;
  let compatibilityInfoEdit: CompatibilityInfo = {
    EA: {
      state: CompatibilityState.Works,
      note: ''
    },
    EXP: {
      state: CompatibilityState.Works,
      note: ''
    }
  };

  $: compatibilityInfo = compatibilityInfoEdit;

  onMount(() => {
    if (compatibilityInfo != null) {
      compatibilityInfoEdit = compatibilityInfo;
    }
  });
</script>

<Accordion>
  <Panel>
    <Header>Early Access - Compatibility</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfoEdit.EA} />
    </Content>
  </Panel>
  <Panel>
    <Header>Experimental - Compatibility</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfoEdit.EXP} />
    </Content>
  </Panel>
</Accordion>
