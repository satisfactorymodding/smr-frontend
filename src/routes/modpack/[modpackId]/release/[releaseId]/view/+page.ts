import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  redirect(302, '/modpack/' + params.modpackId + '/release/' + params.releaseId);
};
