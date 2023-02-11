import { writable } from 'svelte/store';
import { RoleType } from '../enums/RoleType';

export const cur_role_type = writable(RoleType.customer);
export const cur_role = writable('12');

export const role_types = {
  [RoleType.customer]: 'Заказчик',
  [RoleType.performer]: 'Исполнитель',
  [RoleType.band]: 'Группа',
};

type TRoles = { [key in RoleType]: { [key: string]: { name?: string, city?: string; }; } };

export const roles = writable({} as TRoles);