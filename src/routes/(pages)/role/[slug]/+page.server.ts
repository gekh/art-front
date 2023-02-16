
import type { Record } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, request, cookies, params }) => {
  const slug = params.slug;
  // console.log('user:');

  console.log({auth: locals.pb.authStore.model});
  console.log({slug})
  try {
    const pb_role: Record = await locals.pb.collection('roles').getOne(slug, {
      expand: 'info',
    });
    console.log({pb_role})
    return { role: pb_role.export() };
  } catch (e) {
    console.log({ ERROR: e });
    return { role: {} };
  }

  // console.log('pb_roles_raw:');
  // console.log(pb_roles_raw);




  return {
    role: pb_role
  };
}) satisfies PageServerLoad;