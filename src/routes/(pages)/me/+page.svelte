<script lang="ts">
  // TODO: abstract it to any user
  import { currentUser } from '../../../pocketbase';
  import { roles } from '../../../stores/role';
  const user = currentUser;

  import Time from 'svelte-time';
  import Load from './Load.svelte';
  import ProfileCard from './ProfileCard.svelte';
  import Selector from './Selector.svelte';
  import Tabs from './Tabs.svelte';
</script>

<Load />

{#if Object.keys($roles).length > 0}
  <div class="pb-[52px]">
    <div class="mb-8 px-[5%] flex text-silvery">
      <a href="#/" class="flex-1 flex items-center text-silvery hover:text-biruza trans-color">
        <img class="mr-2 h-5" src="images/icons/left-angle.svg" alt="back arrow icon" />
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
