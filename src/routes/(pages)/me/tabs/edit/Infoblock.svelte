<script lang="ts">
  export let ib: { title: string; fields: Array<{ field: string; title: string }> } = {
    title: 'загрузка...',
    fields: [],
  };
</script>

<div class="relative p-5 w-[320px] bg-white">
  <button
    class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
  >
    <img src="images/icons/pencil.svg" alt="edit" class="w-3 h-3" />
  </button>
  <h2 class="mb-8 text-silvery text-[26px] font-light">{ib.title}</h2>
  {#each ib.fields as field}
    <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
    <p class="mb-8">test</p>
  {/each}
</div>