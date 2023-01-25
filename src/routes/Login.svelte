<script lang="ts">
	import { currentUser, pb } from '../pocketbase';
	import ActionBtn from './ActionBtn.svelte';

	let email: string;
	let password: string;
	let error: string;
	let isLoading = false;

	async function login() {
		isLoading = true;
		error = "";
		try {
			const user = await pb.collection('users').authWithPassword(email, password);
			console.log(user);
		} catch (err: any) {
			error = "Неверный логин или пароль.";
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
			<div><input type="email" required placeholder="Почта" bind:value={email} /></div>
			<div>
				<input
					type="password"
					required
					placeholder="Пароль"
					bind:value={password}
					minlength="5"
					maxlength="70"
				/>
			</div>
			<ActionBtn {isLoading}>Войти</ActionBtn>
			{#if error}
				<div>{error}</div>
			{/if}
		</div>
	</form>
{/if}
