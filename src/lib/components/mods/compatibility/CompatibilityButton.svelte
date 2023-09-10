<script lang="ts">
  import type { CompatibilityInfoInput } from '$lib/generated';
  import CompatibilityIcon from './CompatibilityIcon.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import CompatibilityModal from '$lib/modals/CompatibilityModal.svelte';

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();

  const modalStore = getModalStore();
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
  class="btn text-xs px-1 py-0 variant-soft-surface min-w-0 m-0"
  title={$t('compatibility-info.button')}
  on:click={openCompatibility}>
  <CompatibilityIcon compatibility={compatibility?.EA} />
  <CompatibilityIcon compatibility={compatibility?.EXP} EXP={true} />
</button>
