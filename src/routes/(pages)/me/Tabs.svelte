<script lang="ts">
    import Docs from './tabs/Docs.svelte';
    import Donation from './tabs/Donation.svelte';
    import General from './tabs/General.svelte';
  import Info from './tabs/Info.svelte';
    import Invites from './tabs/Invites.svelte';
    import Portfolio from './tabs/Portfolio.svelte';
    import Reviews from './tabs/Reviews.svelte';

  let cur_tab = 'info';
  const changeTab = (e: Event) => {
    cur_tab = (e.target as HTMLInputElement).value;
  };

  const tabs = [
    { key: 'info', title: 'Информация' },
    { key: 'reviews', title: 'Отзывы' },
    { key: 'portfolio', title: 'Портфолио' },
    { key: 'invites', title: 'Приглашения' },
    { key: 'docs', title: 'Документы' },
    { key: 'general', title: 'Общие данные' },
    { key: 'donation', title: 'Донат' },
  ];
</script>

<div class="flex flex-wrap px-[52px] text-graphite font-bold">
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

<div class="py-[84px] px-[52px] bg-cloudy">
  {#if cur_tab === 'info'}
    <Info />
  {:else if cur_tab === 'reviews'}
    <Reviews />
  {:else if cur_tab === 'portfolio'}
    <Portfolio />
  {:else if cur_tab === 'invites'}
    <Invites />
  {:else if cur_tab === 'docs'}
    <Docs />
  {:else if cur_tab === 'general'}
    <General />
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
