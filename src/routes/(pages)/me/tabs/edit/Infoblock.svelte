<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import type { TInfo } from '$lib/types/TInfo';
  import type { TInfoblock } from '$lib/types/TInfoblock';
  import ActionBtn from '../../../../../components/ActionBtn.svelte';
  import { roles, cur_role, cur_role_type } from '../../../../../stores/role';
  import Login from '../../../../Login.svelte';

  export let ib: TInfoblock = {
    title: 'загрузка...',
    fields: [],
  };

  $: ri = $roles[$cur_role_type][$cur_role].info;

  let show_form = false;
  const showForm = () => {
    show_form = true;
  };

  const formSubmit = async (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const json = Object.fromEntries(formData.entries());
    console.log(json);

    let data: Partial<TInfo> = {};

    for (let field of ib.fields) {
      console.log(field.field);
      console.log(json[field.field]);
      data[field.field] = json[field.field];
    }

    const record = await pb.collection('info').update(ri.id, data);
    $roles[$cur_role_type][$cur_role].info = record;
    show_form = false;
  };
</script>

{#if show_form === false}
  <div class="relative px-5 pt-5 pb-14 w-[320px] bg-white">
    <button
      class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
      on:click={showForm}
    >
      <img src="images/icons/pencil.svg" alt="edit" class="w-3 h-3" />
    </button>
    <h2 class="mb-8 text-silvery text-[26px] font-light">{ib.title}</h2>
    {#each ib.fields as field}
      <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
      <p class="mb-8">{ri[field.field] ? ri[field.field] : '—'}</p>
    {/each}
  </div>
{:else}
  <div class="relative px-5 pt-5 pb-1 w-[320px] text-white bg-graphite">
    <h2 class="mb-8 text-[26px] font-light">{ib.title}</h2>
    <form on:submit|preventDefault={formSubmit}>
      {#each ib.fields as field}
        <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
        <input class="mb-8 px-2 text-graphite" name={field.field} value={ri[field.field]} />
      {/each}
      <ActionBtn>Сохранить</ActionBtn>
    </form>
  </div>
{/if}
