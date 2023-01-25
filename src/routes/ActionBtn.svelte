<script lang="ts">
	export let isLoading: boolean = false;
</script>

{#if isLoading}
	загрузка...
{:else}
	<button type="submit" on:click|self>
		<slot />
	</button>
{/if}

<style lang="postcss">
	button {
		@apply m-3 py-2 px-3 border border-black bg-white transition ease-in-out duration-300;
	}

	button:hover {
		@apply border-white text-white bg-black transition ease-in-out duration-300;
	}
</style>
