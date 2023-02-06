<script lang="ts">
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

<div class="flex px-[52px] text-graphite font-bold">
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

<div class="px-[52px] bg-cloudy">
  <div class="text-[100px] py-5">CONTENT</div>
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
