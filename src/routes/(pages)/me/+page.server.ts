import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import type { RequestEvent } from './$types';

export const load = (async ({ locals, request, cookies }: RequestEvent) => {
  // console.log('user:');
  // console.log(locals.pb.authStore.model);

  // const MAX_RESULT = 200;
  // const pb_roles_raw = await locals.pb.collection('roles').getFullList(MAX_RESULT, {
  //   filter: 'user_id="' + locals.pb.authStore.model?.id + '"',
  // });

  // console.log('pb_roles_raw:');
  // console.log(pb_roles_raw);


  return {

  };
}) satisfies {};