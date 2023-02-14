<script lang="ts">
  import Infoblock from './edit/Infoblock.svelte';

  let infoblocks = [
    {
      title: 'Гражданство',
      fields: [
        { field: 'citizenship', title: 'Гражданин страны' },
        { field: 'work_permit', title: 'Разрешение на работу' },
      ],
    },
    {
      title: 'Специальность',
      fields: [
        { field: 'instrument', title: 'Инструмент' },
        { field: 'genre', title: 'Жанр' },
        { field: 'occupation', title: 'Занятость' },
        { field: 'travel', title: 'Выезд в другой город' },
      ],
    },
  ];
</script>

<div class="flex gap-4 flex-wrap justify-center md:justify-start">
  {#each infoblocks as ib}
    <Infoblock {ib} />
  {/each}
</div>
