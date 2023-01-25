<script lang="ts">
	import { currentUser, pb } from '../pocketbase';
	import ActionBtn from './ActionBtn.svelte';

	let email: string;
	let password: string;
	let error: string;
	let isLoading = false;

	async function login() {
		isLoading = true;
		try {
			const user = await pb.collection('users').authWithPassword(email, password);
			console.log(user);
		} catch (err: any) {
			error = err.data.message;
			console.log(err.data.message);
		}
		isLoading = false;
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<p>
		Авторизован под именем <b>{$currentUser.name}</b>
		<ActionBtn on:click={signOut} {isLoading}>Выйти</ActionBtn>
	</p>
{:else}
	<form class="login-form" on:submit|preventDefault={login}>
		<h2>Вход</h2>
		<div>
			<div><input required placeholder="Почта" type="text" bind:value={email} /></div>
			<div><input required placeholder="Пароль" type="password" bind:value={password} /></div>
			<ActionBtn {isLoading}>Войти</ActionBtn>
			{#if error}
				{error}
			{/if}
		</div>
	</form>
{/if}
