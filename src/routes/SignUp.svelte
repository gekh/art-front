<script lang="ts">
	import { currentUser, pb } from '../pocketbase';
	import ActionBtn from './ActionBtn.svelte';

	let name: string;
	let email: string;
	let password: string;
	let errors: Array<string> = [];
	let isLoading = false;

	async function login() {
		const user = await pb.collection('users').authWithPassword(email, password);
		console.log(user);
	}

	async function signUp() {
		isLoading = true;
		try {
			const data = {
				name,
				email,
				password,
				passwordConfirm: password
			};
			try {
				const createdUser = await pb.collection('users').create(data);
				await login();
			} catch (err: any) {
				errors = [];
				for (let key in err.data.data) {
					errors = [...errors, key + ': ' + err.data.data[key].message];
					console.log(key + ': ' + err.data.data[key].message);
				}
			}
		} catch (err) {
			console.error(err);
		}
		isLoading = false;
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if !$currentUser}
	<form class="sign-up-form" on:submit|preventDefault={signUp}>
		<h2>Регистрация</h2>
		<div>
			<input required placeholder="Имя" type="text" bind:value={name} />
		</div>

		<div>
			<input required placeholder="Почта" type="text" bind:value={email} />
		</div>

		<div>
			<input required placeholder="Пароль" type="password" bind:value={password} />
		</div>

		<div>
			<ActionBtn {isLoading}>Отправить</ActionBtn>
		</div>

		{#if errors.length > 0}
			{#each errors as err}
				<div>{err}</div>
			{/each}
		{/if}
	</form>
{/if}
