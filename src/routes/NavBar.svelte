<script lang="ts">
	function toTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
</script>

<template lang="pug">
  .fixed.left-0.right-0.flex
    a.inline-block(href="#top" on:click!="{toTop}")
      img.b-logo.w-8(src="logo/logo.svg" alt="ArtCompas Logo")

    .flex.ml-auto
      .b-menu.flex.items-center.opacity-90
        a(href="#top") Главная
        a(href="#how-to-stat") Как начать
        a(href="#for-whom") Кому подойдет
        a(href="#for-cutomer") Для заказчика
        a(href="#for-artist") Для исполнителя
        a(href="#benefits") В чем польза
</template>

<style lang="postcss">
	.b-logo {
		margin: 26px;
	}

	.b-menu a {
		@apply px-5 font-light flex items-center;
    height: 84px;
    font-size: 15px;
    background: linear-gradient(to top, rgba(100,0,0,0) 50%, #fd012e 50%) bottom;
    background-size: 100% 200%;
    transition:all 0.5s ease;
	}

  .b-menu a:hover {
    background-position: top;
  }
</style>
