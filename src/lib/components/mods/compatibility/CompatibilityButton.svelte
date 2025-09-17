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

  const openCompatibility = () => {
    modalStore.trigger({
      type: 'component',
      component: {
        ref: CompatibilityModal,
        props: {
          compatibility
        }
      }
    });
  };
</script>

<button
  class="preset-tonal-surface btn m-0 min-w-0 px-1 py-0 text-xs"
  title={$t('compatibility-info.button')}
  onclick={openCompatibility}>
  <CompatibilityIcon compatibility={compatibility?.EA} />
  <CompatibilityIcon compatibility={compatibility?.EXP} EXP={true} />
</button>
