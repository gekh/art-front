
import type { Record } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, request, cookies, params }) => {
  const slug = params.slug;
  // console.log({auth: locals.pb.authStore.model});
  try {
    const pb_role: Record = await locals.pb.collection('roles').getOne(slug, {
      expand: 'info',
    });
    return { role: pb_role.export() };
  } catch (e) {
    return { role: {} };
  }
}) satisfies PageServerLoad;