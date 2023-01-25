<script lang="ts">
	import { currentUser, pb } from '../pocketbase';

	let email: string;
	let password: string;
	let error: string;

	async function login() {
		try {
			const user = await pb.collection('users').authWithPassword(email, password);
			console.log(user);
		} catch (err: any) {
			error = err.data.message;
			console.log(err.data.message);
		}
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

<form class="login-form" on:submit|preventDefault>
		<h2>Вход</h2>
		<div>
			<div><input placeholder="Почта" type="text" bind:value={email} /></div>
			<div><input placeholder="Пароль" type="password" bind:value={password} /></div>
			<button on:click={login}>Войти</button>
			{#if error}
				{ error }
			{/if}
		</div>
	</form>
{/if}
