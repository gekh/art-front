import { RoleType } from '$lib/enums/RoleType';
import type { TRoles, TTypeGroupedRoles } from '$lib/types/TRoles';
import { writable } from 'svelte/store';

export const cur_role = writable('');
export const cur_role_type = writable(RoleType.none);

export const roles = writable({} as TRoles);
export const type_grouped_roles = writable({} as Partial<TTypeGroupedRoles>);
