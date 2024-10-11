import { redirect } from '@sveltejs/kit';

// SML as a mod migration for 1.0 release
export function load() {
  redirect(302, '/mod/SML');
}
