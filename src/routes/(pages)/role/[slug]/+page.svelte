<script lang="ts">
  import Loading from '$lib/components/Loading.svelte';
  import { currentUser } from '$lib/pocketbase';
  import { cur_role, cur_role_type, roles, type_grouped_roles } from '$lib/stores/role';
  import Time from 'svelte-time';
  import type { PageData } from './$types';
  import Load from './Load.svelte';
  import ProfileCard from './ProfileCard.svelte';
  import Selector from './Selector.svelte';
  import Tabs from './Tabs.svelte';

  export let data: PageData;

  $roles = data.roles;
  $type_grouped_roles = data.type_grouped_roles;
  $cur_role_type = data.role.role_type;
  $cur_role = data.role.id;

  // TODO: abstract it to any user
  const user = currentUser;
</script>

<Load />

{#if Object.keys($roles).length > 0}
  {#if $roles[$cur_role] === undefined}
    <div class="p-20 text-[30px]">Error 404: Role Not Found</div>
  {:else}
    <div class="pb-[52px]">
      <div class="mb-8 px-[5%] flex text-silvery">
        <a href="#/" class="flex-1 flex items-center text-silvery hover:text-biruza t-color">
          <img class="mr-2 h-5" src="/images/icons/left-angle.svg" alt="back arrow icon" />
          <span>Назад</span>
        </a>
        {#if $user}
          <div class="flex-1 ml-auto text-right">
            Дата регистрации:
            <Time timestamp={new Date($user ? $user.created : '')} format="DD.MM.YYYY" />
          </div>
        {/if}
      </div>

      <Selector />
      <ProfileCard />
      <Tabs />
    </div>
  {/if}
{:else}
  <Loading />
{/if}
