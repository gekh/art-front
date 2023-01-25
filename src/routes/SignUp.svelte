<script lang="ts">
	import { currentUser, pb } from '../pocketbase';

	let name: string;
	let email: string;
	let password: string;
	let errors: Array<string> = [];

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
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if !$currentUser}
	<form class="sign-up-form" on:submit|preventDefault>
		<h2>Регистрация</h2>
		<div>
			<input placeholder="Имя" type="text" bind:value={name} />
		</div>

		<div>
			<input placeholder="Почта" type="text" bind:value={email} />
		</div>

		<div>
			<input placeholder="Пароль" type="password" bind:value={password} />
		</div>

		<div><button class=btn on:click|self={signUp}>Отправить</button></div>

		{#if errors.length > 0}
			{#each errors as err}
				<div>{err}</div>
			{/each}
		{/if}
	</form>
{/if}
