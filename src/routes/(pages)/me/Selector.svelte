<script lang="ts">
  import { clickoutside } from '@svelte-put/clickoutside';
  // TODO: check if selected account belonges to user

  // ROLES

  enum Role {
    customer = 'customer',
    performer = 'performer',
    band = 'band',
  }

  type TRole = keyof typeof Role;

  let cur_role = Role.performer;
  const roles = {
    [Role.customer]: 'Заказчик',
    [Role.performer]: 'Исполнитель',
    [Role.band]: 'Группа',
  };

  const getRoleLabel = (role: string): string => {
    return roles[role as Role];
  };

  const changeRole = (e: Event) => {
    cur_role = (e.target as HTMLInputElement).value as Role;
    cur_account = parseInt(Object.keys(accounts[cur_role])[0]);
  };

  // ACCOUNTS

  let cur_account: number = 21;
  type TAccounts = { [key in Role]: { [key: number]: string } };
  const accounts: TAccounts = {
    [Role.customer]: {
    	12: 'ООО Увлекательные помидоры',
    	745: 'ИП Агатова Ж. И.'
    },
    [Role.performer]: {
      21: 'Саксофонист Валера Игнатов',
      213: 'Барабанщик Людовиг Бахмучев',
      1423: 'Вокалист Анна Кйолкоген',
    },
    [Role.band]: {
      125: 'Бороды и ветви',
    },
  };

  const changeAccount = (e: Event) => {
    cur_account = parseInt((e.target as HTMLInputElement).value);
  };

  let show_roles = false;
  let show_accounts = false;
</script>

<div class="selector mb-5 px-[52px] text-[26px] flex flex-col md:flex-row">
  <div class="relative mr-8 font-bold text-graphite flex items-center z-10">
    {roles[cur_role]}
    {#if Object.keys(accounts).length > 1}
      <input
        id="role"
        type="checkbox"
        class="peer hidden w-0 h-0"
        bind:checked={show_roles}
      />
      <label
        for="role"
        class="flex items-center justify-center w-10 h-10 -rotate-90 peer-checked:rotate-90 trans-all cursor-pointer"
      >
        <img class="h-5" src="images/icons/left-angle.svg" alt="select role" />
      </label>
      <nav
        use:clickoutside on:clickoutside={() => show_roles = false}
        class="absolute top-8 max-h-0 peer-checked:max-h-60 overflow-y-hidden flex flex-col
             bg-biruza text-white shadow-2xl trans-all"
      >
        {#each Object.keys(accounts) as role}
          {#if role !== cur_role}
            <button
              value={role}
              on:click={changeRole}
              class="min-h-[52px] max-w-[50vw] px-8
                     flex items-center justify-center
                     font-normal hover:text-graphite trans-color text-center"
            >
              {getRoleLabel(role)}
            </button>
          {/if}
        {/each}
      </nav>
    {/if}
  </div>

  <div class="relative font-light text-silvery flex items-center">
    {accounts[cur_role][cur_account]}
    {#if Object.keys(accounts[cur_role]).length > 1}
      <input
        id="account"
        type="checkbox"
        class="peer hidden w-0 h-0"
        bind:checked={show_accounts}
      />
      <label
        for="account"
        class="flex items-center justify-center w-10 h-10 -rotate-90 peer-checked:rotate-90 trans-all cursor-pointer"
      >
        <img class="h-5" src="images/icons/left-angle.svg" alt="select role" />
      </label>
      <nav
        use:clickoutside on:clickoutside={() => show_accounts = false}
        class="absolute top-8 max-h-0 peer-checked:max-h-96 overflow-y-hidden flex flex-col bg-biruza text-white shadow-2xl trans-all"
      >
        {#each Object.entries(accounts[cur_role]) as [id, label]}
          {#if parseInt(id) !== cur_account}
            <button
              value={id}
              on:click={changeAccount}
              class="min-h-[52px] max-w-[50vw] px-8
                   flex items-center justify-center
                   font-normal hover:text-graphite trans-color text-center"
            >
              {label}
            </button>
          {/if}
        {/each}
      </nav>
    {/if}
  </div>
</div>

<div class="mb-8 px-[52px]">
  <button class="flex items-center text-silvery hover:text-biruza trans-color">
    <img class="h-5 w-5 mr-2" src="images/icons/plus.svg" alt="add role" /> Добавить
  </button>
</div>