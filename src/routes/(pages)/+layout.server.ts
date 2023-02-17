
import type { RoleType } from '$lib/enums/RoleType';
import type { TInfo } from '$lib/types/TInfo';
import type { TRoles, TTypeGroupedRoles } from '$lib/types/TRoles';
import type { Record } from 'pocketbase';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
  const slug = params.slug;
  // console.log({auth: locals.pb.authStore.model});
  let role = {};
  try {
    const pb_role: Record = await locals.pb.collection('roles').getOne(slug);
    role = pb_role.export();
  } catch (e) { }


  let roles: TRoles = {};
  let type_grouped_roles: Partial<TTypeGroupedRoles> = {};

  try {
    const MAX_RESULT = 200;
    const pb_roles_raw = await locals.pb.collection('roles').getFullList(MAX_RESULT, {
      filter: 'user_id="' + locals.pb.authStore.model?.id + '"',
    });

    if (pb_roles_raw.length !== 0) {
      let pb_roles: any = {};
      for (let cur of pb_roles_raw) {
        const role_type = cur['role_type'] as RoleType;

        let info;
        try {
          info = await locals.pb.collection('info').getFirstListItem('role_id="' + cur['id'] + '"');
        } catch (e) {
          info = await locals.pb.collection('info').create({
            user_id: locals.pb.authStore.model?.id,
            role_id: cur['id'],
          });
        }

        if (type_grouped_roles[role_type] !== undefined) {
          type_grouped_roles[role_type].push(cur['id']);
        } else {
          type_grouped_roles[role_type] = [cur['id']];
        }


        roles[cur['id']] = {
          id: cur['id'],
          role_type,
          name: cur['name'],
          city: cur['city'],
          info: info.export() as TInfo,
        };
      }
    }
  } catch (e) { }



  return {
    role,
    roles,
    type_grouped_roles
  };
}) satisfies PageServerLoad;