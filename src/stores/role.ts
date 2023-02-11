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

export const roles = writable({
  // [RoleType.customer]: {
  //   '12': { name: 'ООО Увлекательные помидоры', city: 'Иркутск' },
  //   '745': { name: 'ИП Агатова Ж. И.', city: 'Житомир' },
  // },
  // [RoleType.performer]: {
  //   // '21': { name: 'Загрузка...', city: 'Загрузка...' },
  //   '21': { name: 'Саксофонист Валера Игнатов', city: 'Карфаген' },
  //   '213': { name: 'Барабанщик Людовиг Бахмучев', city: 'Псебай' },
  //   '1423': { name: 'Вокалист Анна Кйолкоген', city: 'Лиссабон' },
  // },
  // [RoleType.band]: {
  //   '125': { name: 'Бороды и ветви', city: 'Тогучин' },
  // },
} as TRoles);