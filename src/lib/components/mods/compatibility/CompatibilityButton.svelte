<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityIcon from './CompatibilityIcon.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import CompatibilityModal from '$lib/modals/CompatibilityModal.svelte';

  interface Props {
    compatibility: CompatibilityInfoInput;
  }

  let { compatibility }: Props = $props();

  export const { t } = getTranslate();

  let open = $state(false);
</script>

<button class="m-0 btn min-w-0 px-1 py-0" title={$t('compatibility-info.button')} onclick={() => (open = true)}>
  <CompatibilityIcon compatibility={compatibility?.EA} />
  <CompatibilityIcon compatibility={compatibility?.EXP} EXP={true} />
</button>

<CompatibilityModal bind:open {compatibility}></CompatibilityModal>
