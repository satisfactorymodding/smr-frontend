<script lang="ts">
  import { run } from 'svelte/legacy';

  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModData } from '$lib/models/mods';
  import { modSchema } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import ModAuthor from '$lib/components/mods/ModAuthor.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { CompatibilityState } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Switch } from '@skeletonlabs/skeleton-svelte';

  export const { t } = getTranslate();

  interface Props {
    onSubmit: (data: ModData) => void;
    initialValues?: ModData;
    submitText?: string;
    editing?: boolean;
  }

  let {
    onSubmit,
    initialValues = {
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
        }
      }
    },
    submitText = $t('entry.create'),
    editing = false
  }: Props = $props();

  const { form, data } = createForm<ModData>({
    initialValues: initialValues,
    extend: [validator({ schema: modSchema }), reporter],
    onSubmit: (submitted: ModData) => onSubmit(trimNonSchema(submitted, modSchema))
  });

  let tags = $state($data.tags);
  const computeTags = () => {
    $data.tagIDs = tags.map((tag) => tag.id);
  };

  run(() => {
    if (tags) {
      computeTags();
    }
  });

  // The GQL type NewMod does not have a compatibility field.
  // We remove the field from the data so that the GQL request is valid
  run(() => {
    if (!editing) {
      delete $data.compatibility;
    }
  });

  let preview = $derived(($data.full_description as string) || '');

  const addAuthor = () => {
    $data.authors.push({ role: 'editor', user_id: '', key: '' });
    $data.authors = $data.authors;
  };

  const removeAuthor = (i: number) => {
    $data.authors.splice(i, 1);
    $data.authors = $data.authors;
  };

  let editCompatibility = $state(false);
  run(() => {
    $data.compatibility = $data.compatibility ? $data.compatibility : undefined;
  });
  const originalCompatibility = $data.compatibility;
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.name')} *</span>
        <input type="text" bind:value={$data.name} required class="input p-2" />
      </label>
      <ValidationMessage for="name">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
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
      <ValidationMessage for="mod_reference">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.short-description')} *</span>
        <input type="text" bind:value={$data.short_description} required class="input p-2" />
      </label>
      <ValidationMessage for="short_description">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="split grid gap-6">
      <div class="grid grid-flow-row auto-rows-max gap-2">
        <label class="label">
          <span>{$t('entry.full-description')} *</span>
          <textarea class="vertical-textarea textarea p-2" bind:value={$data.full_description} required rows={10}
          ></textarea>
        </label>
        <ValidationMessage for="full_description">
          {#snippet children({ messages: message })}
            <span class="validation-message">{message || ''}</span>
          {/snippet}
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
      <ValidationMessage for="logo">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <label class="label">
        <span>{$t('entry.source-url')}</span>
        <input type="text" bind:value={$data.source_url} required class="input p-2" />
      </label>
      <ValidationMessage for="source_url">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>

    <div class="grid grid-flow-row gap-2">
      <Switch name="slider-label" bind:checked={$data.hidden}>
        {$t('entry.hidden')}
      </Switch>
      <ValidationMessage for="hidden">
        {#snippet children({ messages: message })}
          <span class="validation-message">{message || ''}</span>
        {/snippet}
      </ValidationMessage>
    </div>
    {#if editing}
      <div>
        <Switch
          name="slider-label"
          bind:checked={editCompatibility}
          on:change={() => {
            $data.compatibility = editCompatibility ? originalCompatibility : undefined;
          }}>
          {$t('compatibility-info.edit')}
        </Switch>
      </div>

      {#if editCompatibility}
        <ModCompatibility bind:compatibilityInfo={$data.compatibility} />
      {/if}

      <div class="grid grid-flow-row gap-2">
        <div class="flex items-center">
          <h4 class="mr-4">{$t('authors')}</h4>
          <button class="preset-tonal-primary border-primary-500 btn border" type="button" onclick={addAuthor}>
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
              <button
                class="preset-tonal-primary border-primary-500 btn border"
                type="button"
                onclick={() => removeAuthor(i)}>
                <span>{$t('remove')}</span>
              </button>
            {/if}
          </div>
        {/each}
      </div>
    {/if}

    <div>
      <button class="preset-tonal-primary border-primary-500 btn border" type="submit">{submitText}</button>
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
