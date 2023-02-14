import { RoleType } from '$lib/enums/RoleType';
import type { TInfo } from '$lib/types/TInfo';
import { writable } from 'svelte/store';

export const cur_role_type = writable(RoleType.customer);
export const cur_role = writable('');

export const role_types = {
  [RoleType.customer]: 'Заказчик',
  [RoleType.performer]: 'Исполнитель',
  [RoleType.band]: 'Группа',
};

type TRoles = { [key in RoleType]: { [key: string]: { name: string, city?: string; info: TInfo }; } };

export const roles = writable({} as TRoles);