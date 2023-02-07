<script lang="ts">
  import { Role } from '../../../enums/Role';
  import { cur_role } from '../../../stores/role';
  import Archive from './tabs/Archive.svelte';
  import Docs from './tabs/Docs.svelte';
  import Donation from './tabs/Donation.svelte';
  import Events from './tabs/Events.svelte';
  import General from './tabs/General.svelte';
  import Info from './tabs/Info.svelte';
  import Invites from './tabs/Invites.svelte';
  import Participants from './tabs/Participants.svelte';
  import Portfolio from './tabs/Portfolio.svelte';
  import Reports from './tabs/Reports.svelte';
  import Reviews from './tabs/Reviews.svelte';

  let cur_tab = 'info';
  const changeTab = (e: Event) => {
    cur_tab = (e.target as HTMLInputElement).value;
  };

  let tabs = [{ key: 'info', title: 'Информация' }];
  $: if ($cur_role == Role.performer) {
    tabs = [
      { key: 'info', title: 'Информация' },
      { key: 'reviews', title: 'Отзывы' },
      { key: 'portfolio', title: 'Портфолио' },
      { key: 'invites', title: 'Приглашения' },
      { key: 'docs', title: 'Документы' },
      { key: 'general', title: 'Общие данные' },
      { key: 'donation', title: 'Донат' },
    ];
  } else if ($cur_role == Role.band) {
    tabs = [
      { key: 'info', title: 'Информация' },
      { key: 'reviews', title: 'Отзывы' },
      { key: 'portfolio', title: 'Портфолио' },
      { key: 'invites', title: 'Приглашения' },
      { key: 'docs', title: 'Документы' },
      { key: 'general', title: 'Общие данные' },
      { key: 'participants', title: 'Участники' },
      { key: 'donation', title: 'Донат' },
    ];
  } else {
    tabs = [
      { key: 'info', title: 'Информация' },
      { key: 'reviews', title: 'Отзывы' },

      { key: 'reports', title: 'Отчеты' },
      { key: 'exchange', title: 'Биржа' },
      { key: 'events', title: 'Мероприятия' },
      { key: 'archive', title: 'Архив' },

      { key: 'docs', title: 'Документы' },
      { key: 'general', title: 'Общие данные' },
      { key: 'donation', title: 'Донат' },
    ];
  }
</script>

<div class="flex flex-wrap px-[5%] text-graphite font-bold">
  {#each tabs as tab}
    <button
      value={tab.key}
      class="flex items-center h-[52px] mr-5
      border-b-4 border-b-white data-[active=true]:border-b-biruza"
      on:click={changeTab}
      data-active={cur_tab === tab.key ? true : false}
    >
      {tab.title}
    </button>
  {/each}
</div>

<div class="py-[84px] px-[5%] bg-cloudy">
  {#if cur_tab === 'info'}
    <Info />
  {:else if cur_tab === 'reviews'}
    <Reviews />
  {:else if cur_tab == 'reports'}
    <Reports />
  {:else if cur_tab == 'exchange'}
    <Invites />
  {:else if cur_tab == 'events'}
    <Events />
  {:else if cur_tab == 'archive'}
    <Archive />
  {:else if cur_tab === 'portfolio'}
    <Portfolio />
  {:else if cur_tab === 'invites'}
    <Invites />
  {:else if cur_tab === 'docs'}
    <Docs />
  {:else if cur_tab === 'general'}
    <General />
  {:else if cur_tab === 'participants'}
    <Participants />
  {:else if cur_tab === 'donation'}
    <Donation />
  {/if}
</div>

<style lang="postcss">
  /* BOTTOM LINE ANIMATION */
  button {
    position: relative;
  }
  button:after {
    @apply absolute left-0 -bottom-1 w-0 h-1 content-[''] bg-biruza trans-all;
  }
  button:hover:after {
    @apply w-full;
  }
  /* /BOTTOM LINE ANIMATION */
</style>
