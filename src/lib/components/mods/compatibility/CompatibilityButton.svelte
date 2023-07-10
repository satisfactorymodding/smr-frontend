<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import Dialog, { Content, Title } from '@smui/dialog';
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import Button from '@smui/button';
  import CompatibilityIcon from './CompatibilityIcon.svelte';
  import { getTranslate } from "@tolgee/svelte";
  let open = false;

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();
</script>

<Button
  --mdc-text-button-container-height="20px"
  class="min-w-0 m-0"
  title={$t('compatibility-info.button')}
  on:click={() => {
    open = true;
  }}>
  <CompatibilityIcon compatibility={compatibility?.EA} />
  <CompatibilityIcon compatibility={compatibility?.EXP} EXP={true} />
</Button>

<Dialog bind:open>
  <Title>{$t('compatibility-info')}</Title>
  <Content>
    <CompatibilityInfo {compatibility} />
  </Content>
</Dialog>
