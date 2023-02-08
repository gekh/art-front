<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';

  let docs = [
    {
      id: '1',
      file: 'Договор.docx',
    },
    {
      id: '2',
      file: 'Договор.pdf',
    },
    {
      id: '3',
      file: 'СНИЛС.jpg',
    },
    {
      id: '4',
      file: 'Скан паспорта.png',
    },
    {
      id: '5',
      file: 'Фото-материалы.zip',
    },
  ];

  const removeDoc = (item) => {
    console.log(item);
    docs = docs.filter((el) => el.id != item.id);
  };
</script>

<div class="mb-[52px]">
  <ActionBtn>Добавить</ActionBtn>
</div>

<div class="flex flex-wrap gap-8">
  {#each docs as d}
    <div class="relative flex items-center justify-center w-[300px] h-[300px] bg-white">
      <span class="font-bold underline">{d.file}</span>
      <button
        class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px]
             bg-biruza hover:bg-pinky trans-color"
        on:click={() => removeDoc(d)}
      >
        <img src="images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
      </button>
    </div>
  {/each}
</div>
