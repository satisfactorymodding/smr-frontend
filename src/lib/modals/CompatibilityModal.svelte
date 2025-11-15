<script lang="ts">
  import CompatibilityInfo from '$lib/components/mods/compatibility/CompatibilityInfo.svelte';
  import type { CompatibilityInfoInput } from '$lib/generated';
  import { getTranslate } from '@tolgee/svelte';
  import BaseModal from '$lib/components/general/BaseModal.svelte';

  interface Props {
    compatibility: CompatibilityInfoInput;
    open?: boolean;
  }

  let { compatibility, open = $bindable(false) }: Props = $props();

  export const { t } = getTranslate();
</script>

<BaseModal bind:open>
  <h2 class="text-2xl">{$t('compatibility-info')}</h2>
  <div>
    <CompatibilityInfo {compatibility} />
  </div>
</BaseModal>
