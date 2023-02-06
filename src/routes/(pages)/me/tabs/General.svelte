<script lang="ts">
  let forms = [
    {
      fields: [
        { title: 'Инн', value: '234234' },
        { title: 'Номер паспорта', value: '234234' },
        { title: 'Снилс', value: '234234' },
        { title: 'Расчетный счет', value: '234234' },
        { title: 'Огрнип', value: '234234' },
        { title: 'Банк', value: '234234' },
        { title: 'Бик Банка', value: '234234' },
        { title: 'Кс Банка', value: '234234' },
      ],
    },

    {
      fields: [
        { title: 'Дата рождения', value: '234234' },
        { title: 'Имя', value: '234234' },
        { title: 'Фамилия', value: '234234' },
        { title: 'Отчество', value: '234234' },
        { title: 'Email', value: '234234' },
        { title: 'Пароль', value: '234234' },
      ],
    },
    {
      fields: [
        { title: 'Страна', value: '234234' },
        { title: 'Город', value: '234234' },
        { title: 'Улица', value: '234234' },
        { title: 'Дом', value: '234234' },
        { title: 'Индекс', value: '234234' },
      ],
    },
  ];
</script>

<div class="flex gap-4 flex-wrap">
  {#each forms as form}
    <div class="relative p-5 w-[320px] bg-white">
      <button
        class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
      >
        <img src="images/icons/pencil.svg" alt="edit" class="w-3 h-3" />
      </button>
      {#each form.fields as field}
        <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
        <p class="mb-8">{field.value}</p>
      {/each}
    </div>
  {/each}
</div>
