import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
  const u = locals.pb.authStore.model;
  if (u !== null) {
    if (u.default_role !== "") {
      throw redirect(307, '/role/' + u.default_role);
    } else {
      throw redirect(307, '/role');
    }
  }
}) satisfies PageServerLoad;