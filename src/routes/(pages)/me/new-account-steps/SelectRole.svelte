<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  const setRole = (role: string) => {
  	dispatch('next', {role});
  };
</script>

<h2 class="mb-3 text-silvery text-[26px] font-light">Выберите себя</h2>
<ActionBtn on:click={() => setRole('performer')}>Исполнитель</ActionBtn>
<ActionBtn on:click={() => setRole('band')}>Группа</ActionBtn>
<ActionBtn on:click={() => setRole('customer')}>Заказчик</ActionBtn>
