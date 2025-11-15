<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter } from '@felte/reporter-svelte';
  import type { GuideData } from '$lib/models/guides';
  import { guideSchema } from '$lib/models/guides';
  import { trimNonSchema } from '$lib/utils/forms';
  import { getTranslate } from '@tolgee/svelte';
  import FormField from '$lib/components/forms/FormField.svelte';
  import FormMarkdownField from '$lib/components/forms/FormMarkdownField.svelte';

  export const { t } = getTranslate();

  interface Props {
    onSubmit: (data: GuideData) => void;
    initialValues?: GuideData | undefined;
    submitIcon: string;
    submitText?: string;
  }

  let {
    onSubmit,
    initialValues = {
      name: '',
      guide: '',
      short_description: ''
    },
    submitIcon,
    submitText = $t('entry.create')
  }: Props = $props();

  const { form, data } = createForm<GuideData>({
    initialValues: initialValues,
    extend: [validator({ schema: guideSchema }), reporter],
    onSubmit: (submitted: GuideData) => onSubmit(trimNonSchema(submitted, guideSchema))
  });
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <FormField label={$t('entry.name')} name="name" bind:value={$data.name} required />

    <FormField
      label={$t('entry.short-description')}
      name="short_description"
      bind:value={$data.short_description}
      required />

    <FormMarkdownField label={$t('guide')} name="guide" bind:value={$data.guide} required />

    <div>
      <button class="btn border border-primary-500 preset-tonal-primary" type="submit">
        <span class="material-icons pr-2">{submitIcon}</span>
        {submitText}</button>
    </div>
  </div>
</form>
