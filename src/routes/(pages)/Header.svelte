<script lang="ts">
	let is_menu_button_clicked = false;
	$: console.log({ is_menu_button_clicked });
</script>

<template lang="pug">
  header
    button.menu-button(on:click!="{() => is_menu_button_clicked = is_menu_button_clicked ? false : true}")
      .m-line-top(class!="{is_menu_button_clicked ? 'active' : ''}")
      .m-line-bottom(class!="{is_menu_button_clicked ? 'active' : ''}")
    .menu(class!="{is_menu_button_clicked ? 'active' : ''}")
      a(href='#/') Главная
      a(href='#/') Топ
      a(href='#/') Исполнители и группы
      a(href='#/') Заказчики
      a(href='#/') Тендеры
      a(href='#/') Помощь
      a(href='#/') Форум
      .separator
      a.small.active Русский
      a.small(href='#/') English
  .filler
</template>

<style lang="postcss">
	header {
		@apply fixed top-0 left-0 right-0 flex;
		height: 52px;
	}

	.filler {
		height: 84px;
	}

	.menu-button {
		width: 52px;
		height: 52px;
		background: black;
		padding: 22px 16px;
		z-index: 10;
	}

	.m-line-top,
	.m-line-bottom {
		@apply block w-5 h-0.5 mt-0 mb-1 bg-white;
		transition: all 0.5s linear;
	}

	.m-line-top.active {
		transform: translate(0px, 3px) rotateZ(45deg);
	}

	.m-line-bottom.active {
		transform: translate(0px, -3px) rotateZ(-45deg);
	}

	.menu {
		@apply absolute left-0 top-0 bg-black text-white;
		@apply h-screen w-1/3 flex flex-col justify-center items-center overflow-x-auto;
		transform: translate3d(-100%, 0px, 0px);
		transition: all 0.3s ease-in;
	}

  @media (max-width: 800px) {
    .menu {
      @apply w-1/2;
    }
  }

  @media (max-width: 500px) {
    .menu {
      @apply w-full;
    }
  }

	.menu.active {
		transform: translate3d(0%, 0px, 0px);
		transition: all 0.6s ease-out;
	}

	.menu > a {
		@apply text-white mb-8 font-bold;
		width: 200px;
		font-size: 26px;
		line-height: 1em;
		-webkit-transition: color 500ms ease;
		transition: color 500ms ease;
	}

	.menu > a:hover,
	.menu > a.active {
		color: #08ade9;
	}

	.menu > a.active {
		cursor: initial;
	}

	.menu > a.small {
		@apply mb-5 font-normal;
		font-size: 15px;
	}

	.separator {
		@apply h-px mb-8;
		background-color: #999;
		width: 100px;
		margin-right: 100px;
	}
</style>
