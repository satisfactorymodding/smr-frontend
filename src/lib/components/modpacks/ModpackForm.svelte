<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModpackData } from '$lib/models/modpacks';
  import { modpackSchema } from '$lib/models/modpacks';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import { CompatibilityState, type ModpackModEntry } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { getModalStore, SlideToggle, type ModalSettings } from '@skeletonlabs/skeleton';
  import TagList from '../utils/TagList.svelte';
  import ManageModsModal from '$lib/modals/ManageModsModal.svelte';

  export const { t } = getTranslate();

  export let onSubmit: (data: ModpackData) => void;
  export let initialValues: ModpackData = {
    full_description: '',
    name: '',
    short_description: '',
    hidden: false,
    compatibility: {
      EA: {
        state: CompatibilityState.Works,
        note: ''
      },
      EXP: {
        state: CompatibilityState.Works,
        note: ''
      }
    },
    mods: [] as ModpackModEntry[],
    tags: []
  };
  export let submitText = $t('entry.create');
  export let manageMods = $t('modpack.create.manage-mods');

  export let editing = false;

  const { form, data } = createForm<ModpackData>({
    initialValues: initialValues,
    extend: [validator({ schema: modpackSchema }), reporter],
    onSubmit: (submitted: ModpackData) => onSubmit(trimNonSchema(submitted, modpackSchema))
  });

  let tags = $data.tags;
  const computeTags = () => {
    $data.tagIDs = tags.map((tag) => tag.id);
  };

  $: if (tags) {
    computeTags();
  }

  const modalStore = getModalStore();

  $: manageModsModal = {
    type: 'component',
    component: {
      ref: ManageModsModal,
      props: {
        modpack: $data,
        onDone: (mods) => {
          $data.mods = mods;
        }
      }
    }
  } satisfies ModalSettings;

  $: {
    if (!editing) {
      delete $data.compatibility;
    }
  }

  $: preview = ($data.full_description as string) || '';

  let editCompatibility = false;
  $: $data.compatibility = $data.compatibility ? $data.compatibility : undefined;
  const originalCompatibility = $data.compatibility;
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.name')} *</span>
        <input type="text" bind:value={$data.name} required class="input p-2" />
      </label>
      <ValidationMessage for="name" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.short-description')} *</span>
        <input type="text" bind:value={$data.short_description} required class="input p-2" />
      </label>
      <ValidationMessage for="short_description" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="split grid gap-6">
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <label class="label">
          <span>{$t('entry.full-description')} *</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.full_description} required rows={10} />
        </label>
        <ValidationMessage for="full_description" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <span>{$t('preview')}:</span>
        {#await markdown(preview) then previewRendered}
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div class="grid grid-flow-row gap-2">
      <TagList editable={true} bind:tags />
    </div>

    <div class="grid grid-flow-row gap-2">
      <label for="logo">{$t('logo')}:</label>
      <input
        id="logo"
        class="base-input"
        name="logo"
        type="file"
        accept="image/png,image/jpeg,image/gif"
        placeholder="Logo" />
      <ValidationMessage for="logo" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <SlideToggle name="slider-label" bind:checked={$data.hidden}>
        {$t('entry.hidden')}
      </SlideToggle>
      <ValidationMessage for="hidden" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if editing}
      <div>
        <SlideToggle
          name="slider-label"
          bind:checked={editCompatibility}
          on:change={() => {
            $data.compatibility = editCompatibility ? originalCompatibility : undefined;
          }}>
          {$t('compatibility-info.edit')}
        </SlideToggle>
      </div>

      {#if editCompatibility}
        <ModCompatibility bind:compatibilityInfo={$data.compatibility} />
      {/if}
    {/if}

    <div class="grid grid-flow-row gap-2">
      <div>
        <button class="variant-ghost-primary btn" type="button" on:click={() => modalStore.trigger(manageModsModal)}>
          {manageMods}
        </button>
      </div>
      <ValidationMessage for="mods" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    <div>
      <button class="variant-ghost-primary btn" type="submit">{submitText}</button>
    </div>
  </div>
</form>

<style lang="postcss">
  .split {
    grid-template-columns: 50% 50%;

    & .right {
      max-height: 75vh;
      overflow: auto;
    }
  }
</style>
