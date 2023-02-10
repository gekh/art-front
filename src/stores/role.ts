import { writable } from 'svelte/store';
import { RoleType } from '../enums/RoleType';

export const cur_role_type = writable(RoleType.customer);
export const cur_role = writable(0);

export const role_types = {
  [RoleType.customer]: 'Заказчик',
  [RoleType.performer]: 'Исполнитель',
  [RoleType.band]: 'Группа',
};

type TRoles = { [key in RoleType]: { [key: number]: string } };

export const roles = writable({
  [RoleType.customer]: {
    12: 'ООО Увлекательные помидоры',
    745: 'ИП Агатова Ж. И.',
  },
  [RoleType.performer]: {
    21: 'Саксофонист Валера Игнатов',
    213: 'Барабанщик Людовиг Бахмучев',
    1423: 'Вокалист Анна Кйолкоген',
  },
  [RoleType.band]: {
    125: 'Бороды и ветви',
  },
} as TRoles);