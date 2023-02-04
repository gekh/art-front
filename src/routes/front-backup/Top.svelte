<script lang="ts">
	let motivations = [
		'Более 400 артистов нашли работу!',
		'Только положительные отзывы!',
		'Свыше 20 новых мероприятий в день!'
	];
</script>

<div class="top">
	<div class="back-light" />
	<div class="left">
		<div>
			<div class="big-logo">
				<img src="images/front/top-big-logo.svg" alt="Big ArtCompas Logo" />
			</div>
			<h1>
				Art
				<span class="font-light">compas</span>
			</h1>
			<div class="flex">
				<div class="flex flex-col items-center">
					<div class="flex relative">
						<img src="images/front/top-owner.jpg" alt="owner" class="owner-photo rounded-full" />
						<div class="owner-badge" />
					</div>
				</div>
				<div class="text-left mt-2">
					<p class="text-bold non-italic">Основатель</p>
					<p class="font-light italic">Тимур Абитов</p>
				</div>
				<div class="owner-saying">
					<p>
						Наша платформа помогает соединить исполнителей и заказчиков, для создания мероприятий в
						любом городе России
					</p>
				</div>
			</div>

			<div class="flex items-center">
				<div class="dash" />
				<a href="#reg" class="reg-btn" on:click|preventDefault={() => alert('reg')}>Регистрация</a>
			</div>
		</div>
	</div>

	<div class="right flex flex-col justify-end">
		{#each motivations as motivation, i}
			<div class="flex items-center mb-5 mt-[52px]">
				<div class="dash" />
				<h3>0{i + 1}</h3>
			</div>
			<p class="max-w-[200px]">{motivation}</p>
		{/each}
	</div>
</div>

<style lang="postcss">
	.dash {
		@apply h-px w-5 mr-5 bg-white;
	}
	.top {
		@apply relative flex h-screen;
		padding-bottom: 10%;
		min-height: 800px;
	}

	.back-light {
		@apply absolute left-0 right-0 top-0 bottom-0;
		background: url('images/front/top-back-light.png') 50% 50%;
		background-size: cover;
	}

	.left {
		@apply relative flex flex-col items-end justify-end;
		width: 62.5%;
	}

	.right {
		@apply relative;
		padding-left: 5%;
		width: 37.5%;
	}

	.big-logo {
		height: 150px;
		overflow: hidden;
	}

	.big-logo img {
		height: 220px;
	}

	h1 {
		margin-bottom: 52px;
		font-size: 110px;
		line-height: 1.1;
		font-weight: 800;
		letter-spacing: 2px;
		color: #333;
		background-image: -webkit-gradient(
			linear,
			left top,
			right top,
			color-stop(50%, #fff),
			to(rgba(255, 255, 255, 0.5))
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}

	.owner-photo {
		width: 52px;
		height: 52px;
	}

	.owner-badge {
		@apply absolute left-auto top-auto right-0 bottom-0 h-3 w-3 border-solid rounded-full border-2;
		background-color: #6ab547;
	}

	.owner-saying {
		max-width: 400px;
		padding: 20px;
		margin-bottom: 32px;
		border-style: solid;
		border-width: 1px;
		border-color: hsla(0, 0%, 100%, 0.5);
		border-radius: 0px 5000px 5000px;
	}

	.reg-btn {
		@apply flex items-center rounded-full font-normal;
		height: 52px;
		padding: 0px 32px;
		background-color: #fd012e;
		background-image: linear-gradient(90deg, #ff1f47, #fd012e);
		box-shadow: 0 10px 20px -10px rgba(253, 1, 46, 0.5);
	}

	h3 {
		font-family: 'Open Sans', sans-serif;
		color: #fff;
		font-size: 26px;
		line-height: 1em;
		font-weight: 300;
		letter-spacing: 1px;
	}
</style>
