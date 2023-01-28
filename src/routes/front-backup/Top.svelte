<script lang="ts">
	let motivations = [
		'Более 400 артистов нашли работу!',
		'Только положительные отзывы!',
		'Свыше 20 новых мероприятий в день!'
	];
</script>

<template lang="pug">
  .Top
    .BackLight
    .Left
      div
        .BigLogo
          img(src="images/front/top-big-logo.svg" alt="Big ArtCompas Logo")
        h1 Art
          span.font-light compas
        .flex
          .flex.flex-col.items-center
            .flex.relative
              img.OwnerPhoto.rounded-full(src="images/front/top-owner.jpg" alt="owner")
              .OwnerBadge
            .text-left.mt-2
              p(style="font-weight: bold; font-style: normal;") Основатель
              p.font-light.italic Тимур Абитов
          .OwnerSaying
            p Наша платформа помогает соединить исполнителей и заказчиков, для создания мероприятий в любом городе России

        .flex.items-center
          .Dash
          a.RegBtn(href="#reg" on:click|preventDefault!="{() => alert('reg')}") Регистрация


    .Right.flex.flex-col.justify-end
      +each('motivations as motivation, i')
        .flex.items-center.mb-5(style="margin-top: 52px")
          .Dash
          h3 0{i+1}
        p(style="max-width: 200px") {motivation}

</template>

<style lang="postcss">
	.Dash {
		@apply h-px w-5 mr-5 bg-white;
	}
	.Top {
		@apply relative flex h-screen;
		padding-bottom: 10%;
		min-height: 800px;
	}

	.BackLight {
		@apply absolute left-0 right-0 top-0 bottom-0;
		background: url('images/front/top-back-light.png') 50% 50%;
		background-size: cover;
	}

	.Left {
		@apply relative flex flex-col items-end justify-end;
		width: 62.5%;
	}

	.Right {
		@apply relative;
		padding-left: 5%;
		width: 37.5%;
	}

	.BigLogo {
		height: 150px;
		overflow: hidden;
	}

	.BigLogo img {
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

	.OwnerPhoto {
		width: 52px;
		height: 52px;
	}

	.OwnerBadge {
		@apply absolute left-auto top-auto right-0 bottom-0 h-3 w-3 border-solid rounded-full border-2;
		background-color: #6ab547;
	}

	.OwnerSaying {
		max-width: 400px;
		padding: 20px;
		margin-bottom: 32px;
		border-style: solid;
		border-width: 1px;
		border-color: hsla(0, 0%, 100%, 0.5);
		border-radius: 0px 5000px 5000px;
	}

	.RegBtn {
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
