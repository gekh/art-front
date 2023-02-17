import { RoleType } from "$lib/enums/RoleType";

export const LRoleType = {
  [RoleType.customer]: 'Заказчик',
  [RoleType.performer]: 'Исполнитель',
  [RoleType.band]: 'Группа',
  [RoleType.none]: 'Загрузка...',
}