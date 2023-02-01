<template lang="pug">
  footer
    .col
      h2.bright Artcompas
      .separator
      p 354002, г. Сочи, <br> ул. Черноморская, д. 15
      p +7 (862) 200-00-00
      p +7 (862) 555-10-00

    .col
      h2 Сотрудничество
      .separator
      a(href="#/") О проекте
      a(href="#/") Как с нами работать ?
      a(href="#/") Отзывы
      a(href="#/") Доверие и безопасность
      a(href="#/") Часто задаваемые вопросы

    .col
      h2 О компании
      .separator
      a(href="#/") О нас
      a(href="#/") Пресса
      a(href="#/") Партнерство
      a(href="#/") Вакансии
      a(href="#/") Связаться с нами

    .col
      h2 Устав
      .separator
      a(href="#") Условия контракта
      a(href="#") Конфиденциальность
      a(href="#") Правила сайта

</template>

<style lang="postcss">
	footer {
		@apply bg-black mx-auto grid;
		grid-template-columns: auto auto auto auto;
    justify-content: center;
		padding: 84px 2vw 220px 2vw;
		margin-top: 52px;
	}

  @media (max-width:1100px) {
    footer {
      @apply grid-cols-2 grid-rows-2;
    }
  }

  @media (max-width:600px) {
    footer {
      @apply grid-cols-1 grid-rows-4;
    }
  }

	h2 {
		color: #999999;
		font-size: 26px;
		font-weight: 300;
	}

	h2.bright {
		color: #fff;
		font-weight: bold;
	}

	.separator {
		@apply w-8 h-1 mt-5 bg-white;
		margin-bottom: 52px;
	}

	.col {
		@apply px-8;
	}

  p {
    @apply mb-5 text-white whitespace-nowrap;
  }

  a {
    @apply block mb-5 text-white whitespace-nowrap;
    transition: color 500ms ease;
  }

  a:hover {
    color: #08ade9;
  }
</style>