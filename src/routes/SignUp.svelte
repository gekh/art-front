<script lang="ts">
	import { currentUser, pb } from '../pocketbase';

	let name: string;
	let email: string;
	let password: string;

	async function login() {
		const user = await pb.collection('users').authWithPassword(email, password);
		console.log(user);
	}

	async function signUp() {
		try {
			const data = {
				name,
        email,
				password,
				passwordConfirm: password
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (err) {
			console.error(err);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if !$currentUser}
  <h2>Sign Up</h2>

	<form on:submit|preventDefault>
		<div>
			<input placeholder="name" type="text" bind:value={name} />
		</div>

		<div>
			<input placeholder="Email" type="text" bind:value={email} />
		</div>

		<div>
			<input placeholder="Password" type="password" bind:value={password} />
		</div>

		<div><button on:click={signUp}>Sign Up</button></div>
	</form>
{/if}
