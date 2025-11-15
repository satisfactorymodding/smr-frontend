<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { UpdateUserDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { user } from '$lib/stores/user';
  import * as zod from 'zod';
  import type { Form } from '@felte/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { Writable } from 'svelte/store';
  import { toaster } from '$lib/utils/toaster-svelte';
  import FormFileField from '$lib/components/forms/FormFileField.svelte';
  import FormField from '$lib/components/forms/FormField.svelte';

  const client = getContextClient();

  const userSchema = zod.object({
    avatar: zod.optional(zod.any().refine((logo) => 'name' in logo && 'size' in logo && 'type' in logo)),
    username: zod.string().min(3).max(32)
  });

  let form: Form<{ [key: string]: string }>['form'] = $state();
  let data: Writable<{ username: string }> = $state();

  $effect(() => {
    if ($user && !$data) {
      const createdForm = createForm<{ username: string }>({
        initialValues: {
          username: $user.username
        },
        extend: [validator({ schema: userSchema }), reporter],
        onSubmit: (submitted: { username: string; avatar: unknown }) => {
          console.log('submitted', submitted);
          client
            .mutation(UpdateUserDocument, {
              user: trimNonSchema(submitted, userSchema),
              userId: $user.id
            })
            .toPromise()
            .then((value) => {
              if (value.error) {
                console.error(value.error.message);
                toaster.error({
                  description: 'Error editing user: ' + value.error.message
                });
              } else {
                toaster.success({
                  description: `User updated`,
                  duration: 5000
                });
                goto(base + '/user/' + value.data.updateUser.id);
              }
            });
        }
      });

      form = createdForm.form;
      data = createdForm.data;
    }
  });
</script>

<svelte:head>
  <MetaDescriptors description="Change your user settings" title="Settings" />
</svelte:head>

<h1 class="my-4 text-4xl font-bold">Settings</h1>

<div class="card preset-filled-surface-100-900 p-4">
  <section>
    {#if $user === null}
      <p>Please log in</p>
    {:else if $data !== undefined}
      <form use:form>
        <div class="grid grid-flow-row gap-6">
          <FormFileField
            label="Avatar:"
            name="avatar"
            id="avatar"
            accept="image/png,image/jpeg,image/gif"
            placeholder="Avatar" />

          <FormField label="Username" name="username" bind:value={$data.username} required />

          <div>
            <button class="btn border border-primary-500 preset-tonal-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    {/if}
  </section>
</div>
