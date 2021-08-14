<script lang="ts">
  import {mutation} from '@urql/svelte';
  import {UpdateUserDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import {createForm} from "felte";
  import {validator} from "@felte/validator-zod";
  import {svelteReporter, ValidationMessage} from "@felte/reporter-svelte";
  import {trimNonSchema} from "$lib/utils/forms";
  import {user} from "$lib/stores/user";
  import * as zod from "zod";
  import type {Form} from "@felte/core";

  let errorMessage = '';
  let errorToast = false;

  const updateUser = mutation({
    query: UpdateUserDocument
  });

  export const userSchema = zod.object({
    avatar: zod.optional(zod.any().refine(logo => 'name' in logo && 'size' in logo && 'type' in logo)),
    username: zod.string().min(3).max(32),
  });

  let userForm: Form<{ [key: string]: string }>['form'];

  $: {
    if ($user) {
      const {form} = createForm({
        initialValues: {
          username: $user.username
        },
        extend: [validator, svelteReporter],
        validateSchema: userSchema,
        onSubmit: (data) => {
          updateUser({
            user: trimNonSchema(data, userSchema),
            userId: $user.id
          }).then(value => {
            if (value.error) {
              console.error(value.error.message);
              errorMessage = 'Error editing guide: ' + value.error.message;
              errorToast = true;
            } else {
              // TODO Toast or something
              goto('/user/' + value.data.updateUser.id);
            }
          });
        },
      });

      userForm = form;
    }
  }

  $: if (!errorToast) errorMessage = '';
</script>

<h1 class="text-4xl my-4 font-bold">Settings</h1>

{#if !userForm}
  <p>Please log in</p>
{:else}
  <form use:userForm>
    <div class="grid grid-flow-row gap-6">
      <div class="grid grid-flow-row gap-2">
        <label for="avatar">Avatar:</label>
        <input id="avatar" class="base-input" name="avatar" type="file" accept="image/png,image/jpeg,image/gif"
               placeholder="Avatar">
        <ValidationMessage for="avatar" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>

      <div class="grid grid-flow-row gap-2">
        <label for="username">Username:</label>
        <input id="username" class="base-input" name="username" type="text" placeholder="Username">
        <ValidationMessage for="username" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>

      <div>
        <input type="submit" value="Save" class="px-4 py-2 rounded text-base bg-blue-500 cursor-pointer">
      </div>
    </div>
  </form>
{/if}

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
