import {writable} from 'svelte/store';
import cookie from 'js-cookie';
import type {GetMeQuery} from "$lib/generated";

export type MeUser = GetMeQuery['getMe'];

export const userToken = writable<string | null>(cookie.get('token') || null);

export const user = writable<MeUser | null>(null);
