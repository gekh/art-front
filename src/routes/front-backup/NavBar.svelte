<script lang="ts">
	function toTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
</script>

<template lang="pug">
  .fixed.z-10.top-0.left-0.right-0.flex
    a.inline-block(href="#top" on:click!="{toTop}")
      img.Logo.w-8(src="logo/logo.svg" alt="ArtCompas Logo")

    .flex.ml-auto
      .Menu.flex.items-center.opacity-90
        a(href="#top") Главная
        a(href="#how-to-start") Как начать
        a(href="#for-whom") Кому подойдет
        a(href="#for-cutomer") Для заказчика
        a(href="#for-artist") Для исполнителя
        a(href="#benefits") В чем польза
</template>

<style lang="postcss">
	.Logo {
		margin: 26px;
	}

	.Menu a {
		@apply px-5 font-light flex items-center text-white;
    height: 84px;
    font-size: 15px;
    background: linear-gradient(to top, rgba(100,0,0,0) 50%, #fd012e 50%) bottom;
    background-size: 100% 200%;
    transition:all 0.5s ease;
	}

  .Menu a:hover {
    background-position: top;
  }
</style>
