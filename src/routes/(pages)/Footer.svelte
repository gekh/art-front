<footer>
	<div class="col w-[300px] md:w-auto mx-auto">
		<h2 class="bright">Artcompas</h2>
		<div class="separator" />
		<p>354002, г. Сочи,<br /> ул. Черноморская, д. 15</p>
		<p>+7 (862) 200-00-00</p>
		<p>+7 (862) 555-10-00</p>
	</div>
	<div class="col w-[300px] md:w-auto mx-auto">
		<h2>Сотрудничество</h2>
		<div class="separator" />
		<a href="#/">О проекте</a>
		<a href="#/">Как с нами работать ?</a>
		<a href="#/">Отзывы</a>
		<a href="#/">Доверие и безопасность</a>
		<a href="#/">Часто задаваемые вопросы</a>
	</div>
	<div class="col w-[300px] md:w-auto mx-auto">
		<h2>О компании</h2>
		<div class="separator" />
		<a href="#/">О нас</a>
		<a href="#/">Пресса</a>
		<a href="#/">Партнерство</a>
		<a href="#/">Вакансии</a>
		<a href="#/">Связаться с нами</a>
	</div>
	<div class="col w-[300px] md:w-auto mx-auto">
		<h2>Устав</h2>
		<div class="separator" />
		<a href="#/">Условия контракта</a>
		<a href="#/">Конфиденциальность</a>
		<a href="#/">Правила сайта</a>
	</div>
</footer>

<div class="copyright">
	Copyright 2018–2023 «Арткомпас». Все права защищены. При полном или частичном использовании
	материалов ссылка на «Арткомпас» обязательна.
</div>

<style lang="postcss">
	footer {
		@apply bg-black mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4;
		justify-content: center;
		padding: 84px 2vw 220px 2vw;
		margin-top: 52px;
	}

	h2 {
		@apply text-silvery font-light text-[26px];
	}

	h2.bright {
		@apply text-white font-bold;
	}

	.separator {
		@apply w-8 h-1 mt-5 mb-5 bg-white;
	}

	.col {
		@apply px-8 mt-8;
	}

	p {
		@apply mb-5 text-white whitespace-nowrap;
	}

	a {
		@apply block mb-5 text-white whitespace-nowrap trans-color hover:text-biruza;
	}

	.copyright {
		@apply py-[14px] px-5 bg-silvery text-white;
		background-image: url('/images/bg/guitar-tp.jpg');
		background-position: 50% 100%;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
