<script lang="ts">
	import NavBar from './NavBar.svelte';
	import Top from './Top.svelte';
</script>

<svelte:head>
	<title>Art Compas</title>
	<meta content="Art Compass" property="og:title" />
	<meta content="Art Compass" property="twitter:title" />
</svelte:head>

<template lang="pug">
	.Front
		NavBar
		.BackFill
		.BackBubbles
		Top
		.h-96 hi there
		.h-96 hi there
		.h-96 hi there
		.h-96 hi there
</template>

<style lang="postcss">
	.BackFill {
		@apply fixed left-0 right-0 top-0 bottom-0;
		background: linear-gradient(-45deg, #001739, #032241);
	}

	.BackBubbles {
		@apply fixed left-0 right-0 top-0 bottom-0 opacity-50;
		background: url('images/front/bg-bubbles.png') 50% 50%;
		background-size: cover;
	}
</style>
