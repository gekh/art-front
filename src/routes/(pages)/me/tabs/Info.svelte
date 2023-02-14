<script lang="ts">
  import type { TInfoblock } from '$lib/types/TInfoblock';
  import { RoleType } from '../../../../enums/RoleType';
  import { cur_role_type } from '../../../../stores/role';
  import Infoblock from './edit/Infoblock.svelte';

  const citizenship = {
    title: 'Гражданство',
    fields: [
      { field: 'citizenship', title: 'Гражданин страны' },
      { field: 'work_permit', title: 'Разрешение на работу' },
    ],
  };

  const speciality = {
    title: 'Специальность',
    fields: [
      { field: 'instrument', title: 'Инструмент' },
      { field: 'genre', title: 'Жанр' },
      { field: 'occupation', title: 'Занятость' },
      { field: 'travel', title: 'Выезд в другой город' },
    ],
  };

  const diff = {
    title: 'Прочее',
    fields: [
      { field: 'who_pays', title: 'Оплата за счет' },
      { field: 'teamable', title: 'Готов работать в команде' },
      { field: 'events', title: 'Участие в мероприятиях' },
      { field: 'price', title: 'Оплата' },
    ],
  };

  const socials = {
    title: 'Социальные сети',
    fields: [
      { field: 'vk', title: 'ВКонтакте' },
      { field: 'fb', title: 'Facebook' },
      { field: 'youtube', title: 'Youtube' },
      { field: 'ok', title: 'ОК' },
    ],
  };

  let infoblocks: Array<TInfoblock> = [];
  $: if ($cur_role_type == RoleType.customer) {
    infoblocks = [citizenship, socials];
  } else {
    infoblocks = [citizenship, speciality, diff, socials];
  }
</script>

<div class="flex gap-4 flex-wrap justify-center md:justify-start">
  {#each infoblocks as ib}
    <Infoblock {ib} />
  {/each}
</div>
