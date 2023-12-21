import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  redirect(302, '/mod/' + params.modId + '/version/' + params.versionId);
};
