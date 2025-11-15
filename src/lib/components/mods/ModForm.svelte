<script lang="ts">
  import { run } from 'svelte/legacy';

  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter } from '@felte/reporter-svelte';
  import type { ModData } from '$lib/models/mods';
  import { modSchema } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import ModAuthor from '$lib/components/mods/ModAuthor.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { CompatibilityState } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { Switch } from '@skeletonlabs/skeleton-svelte';
  import FormField from '$lib/components/forms/FormField.svelte';
  import FormMarkdownField from '$lib/components/forms/FormMarkdownField.svelte';
  import FormFileField from '$lib/components/forms/FormFileField.svelte';

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
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <FormField label={$t('entry.name')} name="name" bind:value={$data.name} required />

    <FormField
      label={$t('mod.reference')}
      name="mod_reference"
      bind:value={$data.mod_reference}
      required
      disabled={editing}
      helperText={!editing ? $t('mod.reference-warning') : undefined} />

    <FormField
      label={$t('entry.short-description')}
      name="short_description"
      bind:value={$data.short_description}
      required />

    <FormMarkdownField
      label={$t('entry.full-description')}
      name="full_description"
      bind:value={$data.full_description}
      required />

    <div class="grid grid-flow-row gap-2">
      <TagList editable={true} bind:tags />
    </div>

    <FormFileField
      label="{$t('logo')}:"
      name="logo"
      id="logo"
      accept="image/png,image/jpeg,image/gif"
      placeholder="Logo" />

    <FormField label={$t('entry.source-url')} name="source_url" bind:value={$data.source_url} required />

    <div class="grid grid-flow-row gap-2">
      <Switch checked={$data.hidden} onCheckedChange={(e) => ($data.hidden = e.checked)}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>{$t('entry.hidden')}</Switch.Label>
        <Switch.HiddenInput />
      </Switch>
    </div>
    {#if editing}
      <div>
        <Switch checked={editCompatibility} onCheckedChange={(e) => (editCompatibility = e.checked)}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>{$t('compatibility-info.edit')}</Switch.Label>
          <Switch.HiddenInput />
        </Switch>
      </div>

      {#if editCompatibility}
        <ModCompatibility bind:compatibilityInfo={$data.compatibility} />
      {/if}

      <div class="grid grid-flow-row gap-2">
        <div class="flex items-center">
          <h4 class="mr-4">{$t('authors')}</h4>
          <button class="btn border border-primary-500 preset-tonal-primary" type="button" onclick={addAuthor}>
            <span>{$t('add')}</span>
          </button>
        </div>
        {#each $data.authors as author, i (author.key || i)}
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
                class="btn border border-primary-500 preset-tonal-primary"
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
      <button class="btn border border-primary-500 preset-tonal-primary" type="submit">{submitText}</button>
    </div>
  </div>
</form>
