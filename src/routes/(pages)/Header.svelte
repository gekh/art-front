<script lang="ts">
  import { cur_role, cur_role_type, roles } from '$lib/stores/role';
  import Menu from './Menu.svelte';

  let is_menu_button_clicked = false;

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
</script>

<button
  class="fixed top-0 left-0 w-[52px] h-[52px] bg-black px-4 py-[22px] z-30"
  on:click={() => (is_menu_button_clicked = is_menu_button_clicked ? false : true)}
>
  <div class="m-line-top {is_menu_button_clicked ? 'active' : ''}" />
  <div class="m-line-bottom {is_menu_button_clicked ? 'active' : ''}" />
</button>

<Menu {is_menu_button_clicked} />

<a
  href="/"
  class="fixed top-0 left-[52px] w-[52px] h-[52px] p-[10px] bg-biruza hover:bg-pinky t-clr z-20"
  on:click={toTop}
>
  <img src="logo/logo.svg" alt="Logo" />
</a>

<a
  href="#/"
  class="fixed right-[52px] h-[52px] px-5 ml-auto flex items-center hover:text-biruza t-clr"
  style="background: rgba(255, 255, 255, 0.7);"
>
  {#if $roles !== undefined && Object.keys($roles).length > 0}
    {$roles[$cur_role_type][$cur_role].city}
  {/if}
</a>

<a href="#/" class="fixed right-0 w-[52px] h-[52px] p-4 bg-biruza hover:bg-pinky t-clr z-20">
  <img src="images/icons/profile.svg" alt="Profile" />
</a>

<div class="h-[84px]" />

<style lang="postcss">
  .m-line-top,
  .m-line-bottom {
    @apply block w-5 h-0.5 mt-0 mb-1 bg-white t-all;
  }

  .m-line-top.active {
    transform: translate(0px, 3px) rotateZ(45deg);
  }

  .m-line-bottom.active {
    transform: translate(0px, -3px) rotateZ(-45deg);
  }
</style>
