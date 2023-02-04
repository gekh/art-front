<script lang="ts">
	function toTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<div class="fixed z-10 top-0 left-0 right-0 flex">
	<a href="#top" on:click={toTop} class="inline-block">
		<img src="logo/logo.svg" alt="ArtCompas Logo" class="Logo w-8" />
	</a>

	<div class="flex ml-auto">
		<div class="Menu flex items-center opacity-90">
			<a href="#top"> Главная</a>
			<a href="#how-to-start"> Как начать</a>
			<a href="#for-whom"> Кому подойдет</a>
			<a href="#for-cutomer"> Для заказчика</a>
			<a href="#for-artist"> Для исполнителя</a>
			<a href="#benefits"> В чем польза</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.Logo {
		margin: 26px;
	}

	.Menu a {
		@apply px-5 font-light flex items-center text-white;
		height: 84px;
		font-size: 15px;
		background: linear-gradient(to top, rgba(100, 0, 0, 0) 50%, #fd012e 50%) bottom;
		background-size: 100% 200%;
		transition: all 0.5s ease;
	}

	.Menu a:hover {
		background-position: top;
	}
</style>
