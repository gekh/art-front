<script lang="ts">
	import NavBar from "./NavBar.svelte";
</script>

<svelte:head>
	<title>Art Compas</title>
	<meta content="Art Compass" property="og:title" />
	<meta content="Art Compass" property="twitter:title" />
</svelte:head>

<template	lang="pug">
	.background-fill
	.background-bubbles
	NavBar
	.h-96 hi there
	.h-96 hi there
	.h-96 hi there
	.h-96 hi there
</template>



<style lang="postcss">
	.background-fill {
		@apply fixed left-0 right-0 top-0 bottom-0 z-0;
		background: linear-gradient(-45deg, #001739, #032241);
	}

	.background-bubbles {
		@apply fixed left-0 right-0 top-0 bottom-0 z-0 opacity-50;
		background: url("images/bg-bubbles.png") 50% 50%;
		/* background-image: url("images/bg-bubbles.png"); */
		background-size: cover;
		/* background-position: 50% 50%; */
	}
</style>