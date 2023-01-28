<script lang="ts">
	import Login from '../../components/forms/Login.svelte';
	import SignUp from '../../components/forms/SignUp.svelte';
</script>

<h1>ArtCompass</h1>

<div class="flex justify-center">
	<Login />
	<SignUp />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
