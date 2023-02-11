<script lang="ts">
  import { fade } from 'svelte/transition';
  import { RoleType } from '../../../enums/RoleType';
  import { cur_role_type } from '../../../stores/role';
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
  $: if ($cur_role_type) {
    cur_tab = 'info';
  }
  const changeTab = (e: Event) => {
    cur_tab = (e.target as HTMLInputElement).value;
  };

  let tabs = [{ key: 'info', title: 'Информация' }];
  $: if ($cur_role_type == RoleType.performer) {
    tabs = [
      { key: 'info', title: 'Информация' },
      { key: 'reviews', title: 'Отзывы' },
      { key: 'portfolio', title: 'Портфолио' },
      { key: 'invites', title: 'Приглашения' },
      { key: 'docs', title: 'Документы' },
      { key: 'general', title: 'Общие данные' },
      { key: 'donation', title: 'Донат' },
    ];
  } else if ($cur_role_type == RoleType.band) {
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

<div class="flex flex-wrap px-[5%] font-bold">
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
    <div transition:fade={{ duration: 200 }}>
      <Info />
    </div>
  {:else if cur_tab === 'reviews'}
    <div transition:fade={{ duration: 200 }}>
      <Reviews />
    </div>
  {:else if cur_tab == 'reports'}
    <div transition:fade={{ duration: 200 }}>
      <Reports />
    </div>
  {:else if cur_tab == 'exchange'}
    <div transition:fade={{ duration: 200 }}>
      <Invites />
    </div>
  {:else if cur_tab == 'events'}
    <div transition:fade={{ duration: 200 }}>
      <Events />
    </div>
  {:else if cur_tab == 'archive'}
    <div transition:fade={{ duration: 200 }}>
      <Archive />
    </div>
  {:else if cur_tab === 'portfolio'}
    <div transition:fade={{ duration: 200 }}>
      <Portfolio />
    </div>
  {:else if cur_tab === 'invites'}
    <div transition:fade={{ duration: 200 }}>
      <Invites />
    </div>
  {:else if cur_tab === 'docs'}
    <div transition:fade={{ duration: 200 }}>
      <Docs />
    </div>
  {:else if cur_tab === 'general'}
    <div transition:fade={{ duration: 200 }}>
      <General />
    </div>
  {:else if cur_tab === 'participants'}
    <div transition:fade={{ duration: 200 }}>
      <Participants />
    </div>
  {:else if cur_tab === 'donation'}
    <div transition:fade={{ duration: 200 }}>
      <Donation />
    </div>
  {/if}
</div>

<style lang="postcss">
  /* BOTTOM LINE ANIMATION */
  button {
    position: relative;
  }
  button:after {
    @apply absolute left-0 -bottom-1 w-0 h-1 content-[''] bg-biruza transition-all duration-200;
  }
  button:hover:after {
    @apply w-full;
  }
  /* /BOTTOM LINE ANIMATION */
</style>
