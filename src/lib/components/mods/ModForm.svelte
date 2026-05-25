<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { ModData, ModFormData } from '$lib/models/mods';
  import {
    AiDisclosureChoice,
    AiDisclosureChoiceToDbType,
    modFormSchema,
    NetworkDisclosureState
  } from '$lib/models/mods';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import ModAuthor from '$lib/components/mods/ModAuthor.svelte';
  import TagList from '$lib/components/utils/TagList.svelte';
  import { CompatibilityState, ControllerCompatibilityState } from '$lib/generated';
  import ModCompatibility from '$lib/components/mods/compatibility/ModCompatibilityEdit.svelte';
  import { getTranslate } from '@tolgee/svelte';
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import ModNetworkDisclosureEdit from './disclosure/ModNetworkDisclosureEdit.svelte';
  import ModAiDisclosureEdit from './disclosure/ModAiDisclosureEdit.svelte';

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

  let networkUseDisclosureDropdownChoice: NetworkDisclosureState = NetworkDisclosureState.Unspecified;

  // Both the schema validator and validate() apply and merge their reported errors
  const { form, data, errors } = createForm<ModFormData>({
    initialValues: initialValues,
    extend: [validator({ schema: modFormSchema }), reporter],
    onSubmit: (submitted: ModFormData) => {
      // Transform pending AI Disclosure data into the format the query wants
      const choice = submitted.pending_ai_use_disclosure?.choice ?? AiDisclosureChoice.Unspecified;
      let db_disclosure: ModData['ai_use_disclosure'];
      if (choice !== AiDisclosureChoice.Unspecified) {
        db_disclosure = {
          disclosure_type: AiDisclosureChoiceToDbType[choice],
          message: submitted.pending_ai_use_disclosure!.message
        };
      }
      delete submitted.pending_ai_use_disclosure;

      // NewMod does not have a compatibility field
      if (!editing) {
        delete submitted.compatibility;
      }

      // trimNonSchema errors if ai_use_disclosure data is present, so it must be added after
      const nonSchema: ModData = trimNonSchema(submitted, modFormSchema);
      nonSchema.ai_use_disclosure = db_disclosure;
      return onSubmit(nonSchema);
    },
    validate: (values) => {
      if (
        networkUseDisclosureDropdownChoice === NetworkDisclosureState.YesNetworkUsage &&
        (values?.network_use_disclosure?.trim()?.length ?? 0) <= 0
      ) {
        return {
          network_use_disclosure: $t('mod.network_disclosure.developer.error.disclosure-required')
        };
      }
      return {};
    }
  });

  const _hasErrorContent = (key: string, value: unknown): boolean => {
    if (value === null) {
      return false;
    } else if (key === 'authors') {
      // Skip authors field since final submit gives it values unrelated to validation?
      return false;
    } else if (key === 'pending_ai_use_disclosure' && Array.isArray(value) && value.length === 0) {
      // Stupid case where the custom error is eaten and turned into empty array
      return true;
    } else if (Array.isArray(value)) {
      return value.some((item) => _hasErrorContent('', item));
    } else if (typeof value === 'object') {
      return Object.entries(value).some(([k, v]) => _hasErrorContent(k, v));
    }
    return true;
  };

  // Debug logging of form errors. Intentionally kept in case we run into some weird edge cases.
  errors.subscribe((e) => {
    if (Object.entries(e).some(([key, value]) => _hasErrorContent(key, value))) {
      console.log('DEBUG: ModForm Errors', e);
    }
  });

  let tags = $data.tags;
  const computeTagIds = () => {
    $data.tagIDs = tags!.map((tag) => tag.id);
  };

  $: if (tags) {
    computeTagIds();
  }

  $: preview = ($data.full_description as string) || '';

  const addAuthor = () => {
    $data.authors!.push({ role: 'editor', user_id: '', key: '' });
    $data.authors = $data.authors;
  };

  const removeAuthor = (i: number) => {
    $data.authors!.splice(i, 1);
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
        <ModAiDisclosureEdit bind:ai_disclosure={$data.pending_ai_use_disclosure} />
        <ValidationMessage for="pending_ai_use_disclosure" let:messages={message}>
          <span class="validation-message"
            >{(() => {
              // Very bizarre data handling to work around zod/felte/something reporting error format improperly, in inconsistent formats (see mods.ts)
              if (!message) {
                // Case where there is no error
                return '';
              } else if ('message' in message) {
                // Case where the custom error actually gets reported, but as an object
                if (message.message === null) {
                  // When the user fixes the error, it changes to this state
                  return '';
                }
                return message?.message;
              } else if (Array.isArray(message) && message.length === 0) {
                // Case where nothing but `[]` is returned despite the custom error code executing
                // (Intentionally not localized since the one in mods.ts isn't either)
                return 'You must provide a description.';
              } else {
                // Backup in case something else comes out (who knows!?)
                return 'Error displaying error message, raw value is: ' + JSON.stringify(message);
              }
            })()}</span>
        </ValidationMessage>
      </div>

      <div class="card p-4">
        <ModNetworkDisclosureEdit
          bind:dropdownChoiceForValidation={networkUseDisclosureDropdownChoice}
          bind:disclosure={$data.network_use_disclosure} />
        <ValidationMessage for="network_use_disclosure" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>

      <div class="card p-4">
        <div class="grid grid-flow-row gap-2">
          <div class="flex items-center">
            <h4 class="mr-4">{$t('authors')}</h4>
            <button class="variant-ghost-primary btn" type="button" on:click={addAuthor}>
              <span>{$t('add')}</span>
            </button>
          </div>
          {#if $data.authors !== undefined}
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
          {/if}
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
