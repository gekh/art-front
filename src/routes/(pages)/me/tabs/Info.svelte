<script lang="ts">
  let forms = [
    {
      title: 'Гражданство',
      fields: [
        { title: 'Гражданин страны', value: 'Россия' },
        { title: 'Разрешение на работу', value: 'Россия' },
      ],
    },
    {
      title: 'Специальность',
      fields: [
        { title: 'Инструмент', value: 'Неклассическая акустическая гитара' },
        { title: 'Жанр', value: 'Поп' },
        { title: 'Занятость', value: 'Частичная' },
        { title: 'Выезд в другой город', value: 'Да' },
      ],
    },
    {
      title: 'Прочее',
      fields: [
        { title: 'Оплата за счет', value: 'Заказчика' },
        { title: 'Готов работать в команде', value: 'Да' },
        { title: 'Участие в мероприятиях', value: 'Утренники' },
        { title: 'Оплата', value: '200 руб. в час' },
      ],
    },
    {
      title: 'Социальные сети',
      fields: [
        { title: 'ВКонтакте', value: '234234' },
        { title: 'Facebook', value: '234234' },
        { title: 'Youtube', value: '234234' },
        { title: 'ОК', value: '234234' },
      ],
    },
  ];
</script>

<div class="flex gap-4 flex-wrap">
  {#each forms as form}
  <div class="relative p-5 w-[320px] bg-white">
      <button class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color">
        <img src="images/icons/pencil.svg" alt="edit" class="w-3 h-3" />
      </button>
      <h2 class="mb-8 text-silvery text-[26px] font-light">{form.title}</h2>
      {#each form.fields as field}
        <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
        <p class="mb-8">{field.value}</p>
      {/each}
    </div>
  {/each}
</div>
