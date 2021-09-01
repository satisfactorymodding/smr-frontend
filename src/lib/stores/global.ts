import { writable } from 'svelte/store';
import type { Client } from '@urql/svelte';

export const loginDialogOpen = writable<boolean>(false);

export const gqlClient = writable<undefined | Client>(undefined);
