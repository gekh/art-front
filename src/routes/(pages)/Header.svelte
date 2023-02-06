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

<header id="top" class="fixed top-0 inset-x-0 flex h-[52px] z-20">
	<button
		class="menu-button"
		on:click={() => (is_menu_button_clicked = is_menu_button_clicked ? false : true)}
	>
		<div class="m-line-top {is_menu_button_clicked ? 'active' : ''}" />
		<div class="m-line-bottom {is_menu_button_clicked ? 'active' : ''}" />
	</button>

	<Menu {is_menu_button_clicked} />

	<a href="/" class="logo" on:click={toTop}>
		<img src="logo/logo.svg" alt="Logo" />
	</a>

	<a href="#/" class="city">Псебай</a>

	<a href="#/" class="profile">
		<img src="images/icons/profile.svg" alt="Profile" />
	</a>
</header>
<div class="h-[84px]" />

<style lang="postcss">
	.menu-button {
		width: 52px;
		height: 52px;
		background: black;
		padding: 22px 16px;
		z-index: 30;
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
		@apply bg-biruza;
		width: 52px;
		height: 52px;
		padding: 10px;
		-webkit-transition: background-color 500ms ease, border-color 500ms ease;
		transition: background-color 500ms ease, border-color 500ms ease;
		z-index: 20;
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
		height: 52px;
		color: #494949;
		background: rgba(255, 255, 255, 0.7);
		-webkit-transition: color 500ms ease;
		transition: color 500ms ease;
	}

	.city:hover {
		@apply text-biruza;
	}
</style>
