<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModData } from '$lib/models/mods';
  import { modSchema } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import ModAuthor from '$lib/components/mods/ModAuthor.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { CompatibilityState, ControllerCompatibilityState } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import ModNetworkDisclosureEdit from './disclosure/ModNetworkDisclosureEdit.svelte';

  export const { t } = getTranslate();

  export let onSubmit: (data: ModData) => void;
  export let initialValues: ModData = {
    full_description: '',
    mod_reference: '',
    name: '',
    short_description: '',
    source_url: '',
    hidden: false,
    tagIDs: [],
    compatibility: {
      EA: {
        state: CompatibilityState.Works,
        note: ''
      },
      EXP: {
        state: CompatibilityState.Works,
        note: ''
      },
      Controller: {
        state: ControllerCompatibilityState.Untested,
        note: ''
      }
    }
  };
  export let submitText = $t('entry.create');

  export let editing = false;

  const { form, data } = createForm<ModData>({
    initialValues: initialValues,
    extend: [validator({ schema: modSchema }), reporter],
    onSubmit: (submitted: ModData) => onSubmit(trimNonSchema(submitted, modSchema))
  });

  let tags = $data.tags;
  const computeTags = () => {
    $data.tagIDs = tags.map((tag) => tag.id);
  };

  $: if (tags) {
    computeTags();
  }

  // The GQL type NewMod does not have a compatibility field.
  // We remove the field from the data so that the GQL request is valid
  $: {
    if (!editing) {
      delete $data.compatibility;
    }
  }

  $: preview = ($data.full_description as string) || '';

  const addAuthor = () => {
    $data.authors.push({ role: 'editor', user_id: '', key: '' });
    $data.authors = $data.authors;
  };

  const removeAuthor = (i: number) => {
    $data.authors.splice(i, 1);
    $data.authors = $data.authors;
  };

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
        <span>{$t('mod.reference')} *</span>
        <input type="text" bind:value={$data.mod_reference} required class="input p-2" disabled={editing} />
        {#if !editing}
          <span>{$t('mod.reference-warning')}</span>
        {/if}
      </label>
      <ValidationMessage for="mod_reference" let:messages={message}>
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
          <!-- eslint-disable -->
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
      <label class="label">
        <span>{$t('entry.source-url')}</span>
        <input type="text" bind:value={$data.source_url} required class="input p-2" />
      </label>
      <ValidationMessage for="source_url" let:messages={message}>
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
      <div class="card p-4">
        <SlideToggle
          name="slider-label"
          bind:checked={editCompatibility}
          on:change={() => {
            $data.compatibility = editCompatibility ? originalCompatibility : undefined;
          }}>
          {$t('compatibility-info.edit')}
        </SlideToggle>

        {#if editCompatibility}
          <ModCompatibility bind:compatibilityInfo={$data.compatibility} />
        {/if}
      </div>

      <div class="card p-4">
        <ModNetworkDisclosureEdit bind:disclosure={$data.network_use_disclosure} />
      </div>

      <div class="card p-4">
        <div class="grid grid-flow-row gap-2">
          <div class="flex items-center">
            <h4 class="mr-4">{$t('authors')}</h4>
            <button class="variant-ghost-primary btn" type="button" on:click={addAuthor}>
              <span>{$t('add')}</span>
            </button>
          </div>
          {#each $data.authors as author, i}
            <div class="flex items-end">
              {#if $data.authors[i].user_id}
                <div class="p-2">
                  <ModAuthor id={$data.authors[i].user_id} />
                </div>
              {/if}
              <label class="label">
                <span>User ID</span>
                <input
                  type="text"
                  bind:value={$data.authors[i].user_id}
                  required
                  class="input p-2"
                  disabled={author.role === 'creator'} />
              </label>
              {#if author.role !== 'creator'}
                <button class="variant-ghost-primary btn" type="button" on:click={() => removeAuthor(i)}>
                  <span>{$t('remove')}</span>
                </button>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}

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
