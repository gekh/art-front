import type { RoleType } from '$lib/enums/RoleType';
import type { TInfo } from '$lib/types/TInfo';
import type { TRole, TRoles, TTypeGroupedRoles } from '$lib/types/TRoles';
import { redirect } from '@sveltejs/kit';
import type { Record } from 'pocketbase';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, params }) => {

  if (locals.pb.authStore.model === null) {
    throw redirect(307, '/');
  }

  const slug = params.slug ?? "";

  let role: Partial<TRole> = {};
  let roles: TRoles = {};
  let type_grouped_roles: Partial<TTypeGroupedRoles> = {};
  let last_role_id = "";

  try {
    const pb_role: Record = await locals.pb.collection('roles').getOne(slug);
    role = pb_role.export();
  } catch (e) { }


  try {
    const MAX_RESULT = 200;
    const pb_roles_raw = await locals.pb.collection('roles').getFullList(MAX_RESULT, {
      filter: 'user_id="' + locals.pb.authStore.model?.id + '"',
    });

    if (pb_roles_raw.length !== 0) {
      for (let cur of pb_roles_raw) {
        const role_type = cur['role_type'] as RoleType;
        last_role_id = cur['id'];

        let info;
        try {
          info = await locals.pb.collection('info').getFirstListItem('role_id="' + cur['id'] + '"');
        } catch (e) {
          info = await locals.pb.collection('info').create({
            user_id: locals.pb.authStore.model?.id,
            role_id: cur['id'],
          });
        }

        if (type_grouped_roles[role_type] === undefined) {
          type_grouped_roles[role_type] = [cur['id']];
        } else {
          type_grouped_roles[role_type]!.push(cur['id']);
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

  let default_role = locals.pb.authStore.model?.default_role;
  if (default_role === null || default_role === undefined || default_role === "") {
    default_role = last_role_id;
  }

  return {
    default_role,
    role,
    roles,
    type_grouped_roles
  };
}) satisfies LayoutServerLoad;