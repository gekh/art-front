<script lang="ts">
	export let is_menu_button_clicked: boolean;
</script>

<div class="fixed top-0 left-0 menu z-20 {is_menu_button_clicked ? 'active' : ''}">
	<a href="#/">Главная</a>
	<a href="#/">Топ</a>
	<a href="#/">Исполнители и группы</a>
	<a href="#/">Заказчики</a>
	<a href="#/">Тендеры</a>
	<a href="#/">Помощь</a>
	<a href="#/">Форум</a>
	<div class="separator" />
	<a href="#/" class="small active">Русский</a>
	<a href="#/" class="small">English</a>
</div>

<style lang="postcss">
	.menu {
		@apply bg-black text-white;
		@apply h-screen w-1/3 flex flex-col justify-center items-center overflow-x-auto;
		transform: translate3d(-100%, 0px, 0px);
		transition: all 0.3s ease-in;
	}

	.menu.active {
		transform: translate3d(0%, 0px, 0px);
		transition: all 0.6s ease-out;
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
		@apply text-biruza;
	}

	.menu > a.active {
		cursor: initial;
	}

	.menu > a.small {
		@apply mb-5 font-normal;
		font-size: 15px;
	}

	.separator {
		@apply h-px mb-8 bg-silvery;
		width: 100px;
		margin-right: 100px;
	}
</style>
