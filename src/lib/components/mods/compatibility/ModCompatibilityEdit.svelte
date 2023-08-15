<script lang="ts">
  import Accordion, { Header, Panel, Content } from '@smui-extra/accordion';
  import { CompatibilityState, MultiplayerState } from '$lib/generated';
  import type { CompatibilityInfo } from '$lib/generated';
  import CompatibilityEdit from '$lib/components/mods/compatibility/CompatibilityEdit.svelte';

  export let compatibilityInfo: CompatibilityInfo = undefined;
  if (compatibilityInfo == null) {
    compatibilityInfo = {
      EA: {
        state: CompatibilityState.Works,
        note: '',
        multi: MultiplayerState.Compatible
      },
      EXP: {
        state: CompatibilityState.Works,
        note: '',
        multi: MultiplayerState.Compatible
      }
    };
  }
</script>

<Accordion>
  <Panel>
    <Header>Early Access - Compatibility</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EA} />
    </Content>
  </Panel>
  <Panel>
    <Header>Experimental - Compatibility</Header>
    <Content>
      <CompatibilityEdit bind:compatibility={compatibilityInfo.EXP} />
    </Content>
  </Panel>
</Accordion>
