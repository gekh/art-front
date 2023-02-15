<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ActionBtn from '../../../../components/ActionBtn.svelte';

  const dispatch = createEventDispatcher();

  const formSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const json = Object.fromEntries(formData.entries());
    dispatch('next', json);
  };
</script>

<form on:submit|preventDefault={formSubmit}>
  <h3 class="mb-4 font-bold text-[20px]">Имя</h3>
  <input
    required
    type="text"
    name="name"
    class="w-[250px] h-[52px] mb-8 px-2 py-5 outline-none border border-cloudy focus:border-sky t-clr"
  />
  <h3 class="mb-4 font-bold text-[20px]">Город</h3>
  <input
    required
    type="text"
    name="city"
    class="w-[250px] h-[52px] mb-8 px-2 py-5 outline-none border border-cloudy focus:border-sky t-clr"
  />

  <ActionBtn>Отправить</ActionBtn>
</form>
