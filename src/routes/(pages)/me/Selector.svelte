<script lang="ts">

  // TODO: check if selected account belonges to user

  import { clickoutside } from '@svelte-put/clickoutside';
  import { fly, slide } from 'svelte/transition';
  import { RoleType } from '../../../enums/RoleType';
  import { cur_role_type, roles} from '../../../stores/role';

  import { getContext } from 'svelte';
  import ModalNewAccount from './ModalNewAccount.svelte';
  const { open }: any = getContext('simple-modal');
  const showModalNewAccount = () =>
    open(
      ModalNewAccount,
      {},
      {
        transitionWindow: fly,
        transitionWindowProps: {
          y: -100,
          duration: 1000,
        },
      },
    );


  // ROLE TYPES

  const role_types = {
    [RoleType.customer]: 'Заказчик',
    [RoleType.performer]: 'Исполнитель',
    [RoleType.band]: 'Группа',
  };

  const getRoleTypeLabel = (role: string): string => {
    return role_types[role as RoleType];
  };

  const changeRoleType = (e: Event) => {
    $cur_role_type = (e.target as HTMLInputElement).value as RoleType;
    cur_role = parseInt(Object.keys($roles[$cur_role_type])[0]);
  };

  // ROLES

  let cur_role: number = parseInt(Object.keys($roles[$cur_role_type])[0]);

  const changeRole = (e: Event) => {
    cur_role = parseInt((e.target as HTMLInputElement).value);
  };

  let show_role_types = false;
  let show_roles = false;
</script>

<div class="relative z-10 selector mb-5 px-[5%] text-[26px] flex flex-col md:flex-row">
  <div class="relative mr-8 font-bold flex items-center z-10">
    {#if Object.keys($roles).length <= 1}
      {role_types[$cur_role_type]}
    {:else}
      <input id="role" type="checkbox" class="peer hidden w-0 h-0" bind:checked={show_role_types} />
      <label
        for="role"
        class="group flex items-center cursor-pointer"
        on:click|preventDefault={() => {
          show_roles = false;
          show_role_types = show_role_types ? false : true;
        }}
        on:keypress={() => {}}
      >
        {role_types[$cur_role_type]}

        <div
          class="flex items-center justify-center w-10 h-10
                 -rotate-90 group-peer-checked:rotate-90 trans-all"
        >
          <img src="images/icons/left-angle.svg" alt="select role" class="h-5 " />
        </div>
      </label>
      {#if show_role_types}
        <nav
          use:clickoutside
          on:clickoutside={(e) => {
            show_role_types = false;
          }}
          transition:slide
          class="absolute top-8 flex flex-col overflow-y-hidden
             text-[15px] bg-biruza text-white shadow-2xl trans-all"
        >
          {#each Object.keys($roles) as role}
            {#if role !== $cur_role_type}
              <button
                value={role}
                on:click={changeRoleType}
                class="max-w-[50vw] px-8 py-[14.75px]
                     flex items-center justify-center
                     font-normal hover:text-graphite trans-color text-center"
              >
                {getRoleTypeLabel(role)}
              </button>
            {/if}
          {/each}
        </nav>
      {/if}
    {/if}
  </div>

  <div class="relative font-light text-silvery flex items-center">
    {#if Object.keys($roles[$cur_role_type]).length <= 1}
      <div class="max-w-[75vw] whitespace-nowrap overflow-hidden overflow-ellipsis">
        {$roles[$cur_role_type][cur_role]}
      </div>
    {:else}
      <input
        id="account"
        type="checkbox"
        class="peer hidden w-0 h-0"
        bind:checked={show_roles}
      />
      <label
        for="account"
        class="group flex items-center cursor-pointer"
        on:click|preventDefault={() => {
          show_role_types = false;
          show_roles = show_roles ? false : true;
        }}
        on:keypress={() => {}}
      >
        <div class="max-w-[75vw] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {$roles[$cur_role_type][cur_role]}
        </div>
        <div
          class="group flex items-center justify-center w-10 h-10
                 -rotate-90 group-peer-checked:rotate-90 trans-all"
        >
          <img src="images/icons/left-angle.svg" alt="select role" class="h-5 " />
        </div>
      </label>
      {#if show_roles}
        <nav
          transition:slide
          use:clickoutside
          on:clickoutside={() => (show_roles = false)}
          class="absolute top-8 flex flex-col overflow-y-hidden
              text-[15px] bg-biruza text-white shadow-2xl trans-all"
        >
          {#each Object.entries($roles[$cur_role_type]) as [id, label]}
            {#if parseInt(id) !== cur_role}
              <button
                value={id}
                on:click={changeRole}
                class="max-w-[80vw] px-8 py-[14.75px]
                   flex items-center justify-center
                   font-normal hover:text-graphite trans-color text-center"
              >
                {label}
              </button>
            {/if}
          {/each}
        </nav>
      {/if}
    {/if}
  </div>
</div>

<div class="mb-8 px-[5%]">
  <button
    class="flex items-center text-silvery hover:text-biruza trans-color"
    on:click={showModalNewAccount}
  >
    <img class="h-5 w-5 mr-2" src="images/icons/plus.svg" alt="add role" /> Добавить
  </button>
</div>
