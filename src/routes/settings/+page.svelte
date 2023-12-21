<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { UpdateUserDocument } from '$lib/generated';
  import { goto } from '$app/navigation';
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import { trimNonSchema } from '$lib/utils/forms';
  import { user } from '$lib/stores/user';
  import * as zod from 'zod';
  import type { Form } from '@felte/core';
  import { base } from '$app/paths';
  import MetaDescriptors from '$lib/components/utils/MetaDescriptors.svelte';
  import type { Writable } from 'svelte/store';
  import { getToastStore } from '@skeletonlabs/skeleton';

  const toastStore = getToastStore();

  const client = getContextClient();

  export const userSchema = zod.object({
    avatar: zod.optional(zod.any().refine((logo) => 'name' in logo && 'size' in logo && 'type' in logo)),
    username: zod.string().min(3).max(32)
  });

  let form: Form<{ [key: string]: string }>['form'];
  let data: Writable<{ username: string }>;

  $: {
    if ($user && !data) {
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
                toastStore.trigger({
                  message: 'Error editing user: ' + value.error.message,
                  background: 'variant-filled-error',
                  autohide: false
                });
              } else {
                toastStore.trigger({
                  message: `User updated`,
                  background: 'variant-filled-success',
                  timeout: 5000
                });
                goto(base + '/user/' + value.data.updateUser.id);
              }
            });
        }
      });

      form = createdForm.form;
      data = createdForm.data;
    }
  }
</script>

<svelte:head>
  <MetaDescriptors description="Change your user settings" title="Settings" />
</svelte:head>

<h1 class="text-4xl my-4 font-bold">Settings</h1>

<div class="card p-4">
  <section>
    {#if $user === null}
      <p>Please log in</p>
    {:else}
      <form use:form>
        <div class="grid grid-flow-row gap-6">
          <div class="grid grid-flow-row gap-2">
            <label for="avatar">Avatar:</label>
            <input
              id="avatar"
              class="base-input"
              name="avatar"
              type="file"
              accept="image/png,image/jpeg,image/gif"
              placeholder="Avatar" />
            <ValidationMessage for="avatar" let:messages={message}>
              <span class="validation-message">{message || ''}</span>
            </ValidationMessage>
          </div>

          <div class="grid grid-flow-row gap-2">
            <label class="label">
              <span>Username</span>
              <input type="text" bind:value={$data.username} required class="input p-2" />
            </label>
            <ValidationMessage for="username" let:messages={message}>
              <span class="validation-message">{message || ''}</span>
            </ValidationMessage>
          </div>

          <div>
            <button class="btn variant-ghost-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    {/if}
  </section>
</div>
