<script lang="ts">
	import { currentUser, pb } from '../pocketbase';

	let email: string;
	let password: string;

	async function login() {
		const user = await pb.collection('users').authWithPassword(email, password);
		console.log(user);
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<p>
		Signed in as {$currentUser.name}
		<button on:click={signOut}>Sign Out</button>
	</p>
{:else}
  <h2>Login</h2>

	<form on:submit|preventDefault>
		<div>
			<input placeholder="Email" type="text" bind:value={email} />
			<input placeholder="Password" type="password" bind:value={password} />
			<button on:click={login}>Login</button>
		</div>
	</form>
{/if}
