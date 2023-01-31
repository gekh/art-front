<script lang="ts">
	import Menu from './Menu.svelte';

	let is_menu_button_clicked = false;

	function toTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<template lang="pug">
  header#top
    button.menu-button(on:click!="{() => is_menu_button_clicked = is_menu_button_clicked ? false : true}")
      .m-line-top(class!="{is_menu_button_clicked ? 'active' : ''}")
      .m-line-bottom(class!="{is_menu_button_clicked ? 'active' : ''}")

    Menu("{is_menu_button_clicked}")

    a.logo(href='#top' on:click|preventDefault!='{toTop}')
      img(src="logo/logo.svg" alt="Logo")

    a.city(href="#/") Псебай

    a.profile
      img(src="images/profile.svg" alt="Profile")

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

	.logo,
	.profile {
		width: 52px;
		height: 52px;
		padding: 10px;
		background: #08ade9;
		-webkit-transition: background-color 500ms ease, border-color 500ms ease;
		transition: background-color 500ms ease, border-color 500ms ease;
		z-index: 10;
	}
	.profile {
		padding: 16px;
	}
	.logo:hover,
	.profile:hover {
		background-color: #0992b2;
	}

	.city {
		@apply px-5 ml-auto flex items-center;
		font-size: 15px;
		height: 52px;
		color: #494949;
		background: rgba(255, 255, 255, 0.7);
		-webkit-transition: color 500ms ease;
		transition: color 500ms ease;
	}

	.city:hover {
		color: #08ade9;
	}
</style>
