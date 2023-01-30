<script lang="ts">
	import { onMount } from 'svelte';
	export let onClose: any;
	import { currentUser, pb } from '../pocketbase';

	let name: string;
	let email: string;
	let password: string;
	let passwordRepeat: string;
	let errors: Array<string> = [];
	let isLoading = false;

	onMount(async () => {
		if (currentUser) {
			name = $currentUser?.name;
		}
	});

	async function login() {
		const user = await pb.collection('users').authWithPassword(email, password);
		// name = user.record.name;
		console.log(user);
	}

	async function signUp() {
		if (password !== passwordRepeat) {
			errors = ['Пароль и Повтор пароля не совпадают'];
			return;
		}
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

<div
	on:click={onClose}
	id="modalBackdrop"
	class="backdrop-default"
	style="z-index: 1000; position: fixed; top: 0; bottom:0; left: 0; right:0; margin: 0px; background: rgb(255, 255, 255); opacity: 0.55;"
/>

<div id="modalContent" class="modal-default">
	<div class="ctools-modal-dialog modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button
					on:click={onClose}
					type="button"
					class="close ctools-close-modal ctools-close-modal-processed"
					aria-hidden="true">×</button
				>
				<h4 id="modal-title" class="modal-title">Регистрация</h4>
			</div>
			{#if !$currentUser}
				{#if isLoading }
					<div style="padding: 40px; font-size: 18px;">
						Обождите...
					</div>
				{:else}
					<div id="modal-content" class="modal-body" style="max-height: calc(100vh - 70px);">
						<form
							class="user-info-from-cookie ctools-use-modal-processed"
							enctype="multipart/form-data"
							action="/?q=modal_forms/ajax/register"
							method="post"
							id="user-register-form"
							on:submit|preventDefault={signUp}
						>
							<div>
								<div id="edit-account" class="form-wrapper form-group">
									<div class="form-item form-item-name form-type-textfield form-group">
										<label class="control-label" for="edit-name"
											>Имя пользователя <span
												class="form-required"
												title="Это поле обязательно для заполнения.">*</span
											></label
										>
										<input
											class="username form-control form-text required"
											title=""
											data-toggle="tooltip"
											type="text"
											id="edit-name"
											name="name"
											size="30"
											maxlength="60"
											data-original-title="Пробелы разрешены; знаки пунктуации запрещены, за исключением точек, тире, апострофов и знаков подчеркивания."
											bind:value={name}
										/>
									</div>
									<div class="form-item form-item-mail form-type-textfield form-group">
										<label class="control-label" for="edit-mail"
											>E-mail адрес <span
												class="form-required"
												title="Это поле обязательно для заполнения.">*</span
											></label
										>
										<input
											class="form-control form-text required"
											type="text"
											id="edit-mail"
											name="mail"
											size="30"
											maxlength="254"
											bind:value={email}
										/>
										<div class="help-block">
											Существующий адрес электронной почты. Все почтовые сообщения с сайта будут
											отсылаться на этот адрес. Адрес электронной почты не будет публиковаться и будет
											использован только по вашему желанию: для восстановления пароля или для
											получения новостей и уведомлений по электронной почте.
										</div>
									</div>
									<div class="form-item form-item-pass form-type-password-confirm form-group">
										<div class="row">
											<div
												class="form-item form-item-pass-pass1 form-type-password form-group col-sm-6 col-md-4 has-feedback"
											>
												<label class="control-label" for="edit-pass-pass1"
													>Пароль <span
														class="form-required"
														title="Это поле обязательно для заполнения.">*</span
													>
													<div class="label" aria-live="assertive" /></label
												>
												<input
													class="password-field form-control form-text required password-processed"
													type="password"
													id="edit-pass-pass1"
													name="pass[pass1]"
													size="25"
													maxlength="128"
													bind:value={password}
												/><span class="glyphicon form-control-feedback" />
											</div>
											<div
												class="form-item form-item-pass-pass2 form-type-password form-group col-sm-6 col-md-4 has-feedback"
											>
												<label class="control-label" for="edit-pass-pass2"
													>Повторите пароль <span
														class="form-required"
														title="Это поле обязательно для заполнения.">*</span
													></label
												>
												<input
													class="password-confirm form-control form-text required"
													type="password"
													id="edit-pass-pass2"
													name="pass[pass2]"
													size="25"
													maxlength="128"
													bind:value={passwordRepeat}
												/><span class="glyphicon form-control-feedback" />
											</div>
											<div class="help-block password-help" />
										</div>
									</div>
									<input type="hidden" name="timezone" value="Europe/Moscow" />
								</div>
								<input
									type="hidden"
									name="form_build_id"
									value="form-KDvQNq4y8yMgmJdBcwZqlEt3ImVhWgPI-LguuOKdu44"
								/>
								<input type="hidden" name="form_id" value="user_register_form" />
								<div
									class="form-item form-item-fz152-agreement form-type-checkbox checkbox"
									style="font-size: 12px; margin-top: -20px;"
								>
									<label class="control-label" for="edit-fz152-agreement">
										<input
											required
											type="checkbox"
											id="edit-fz152-agreement"
											name="fz152_agreement"
											value="1"
											class="form-checkbox required"
										/>
										Я даю согласие на
										<a href="/privacy-policy" target="_blank">обработку моих персональных данных</a
										>
										и соглашаюсь с
										<a href="/oferta" target="_blank">публичной офертой ООО АРТкомпас» и правилами сайта</a>.
										<span class="form-required" title="Это поле обязательно для заполнения.">*</span
										></label>
								</div>
								<br />
								<div class="form-actions form-wrapper form-group" id="edit-actions">
									<button
										type="submit"
										id="edit-submit"
										name="op"
										value="Регистрация"
										class="btn btn-default form-submit">Регистрация</button
									>
								</div>
								{#if errors.length > 0}
									{#each errors as err}
										<div>{err}</div>
									{/each}
								{/if}
							</div>
						</form>
					</div>
				{/if}
			{:else}
				<div style="padding: 40px; font-size: 18px;">
					Залогинен как <b>{name}</b>
					<br />
					<br />
					<button
						class="btn btn-default form-submit"
						on:click={signOut}
						style="color: #fff;
					display: flex;
					height: 52px;
					padding: 0px 32px;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border: 1px solid #08ade9;
					border-radius: 150px;
					background-color: #08ade9;
					transition: border-color 500ms ease, background-color 500ms ease;
					font-family: 'Open Sans', sans-serif;
					font-size: 15px;
					line-height: 1em;
					font-weight: 700;"
					>
						Выйти
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	a:hover {
		text-decoration: none;
	}
	#modalBackdrop {
		background: rgba(20, 20, 20, 0.7) !important;
		opacity: 1 !important;
	}
	#modalContent,
	.modal-dialog {
		height: 100% !important;
	}

	#modalContent {
		z-index: 1001;
		position: fixed;
		top: 0px;
		left: 50%;
		margin-left: -200px;
		display: block;
		padding-top: 0px;
	}
	#modalContent .ctools-modal-dialog.modal-dialog {
		width: 400px !important;
		margin: 0;
		height: 100% !important;
	}

	@media (max-width: 450px) {
		#modalContent {
			left:0;
			margin-left:0;
		}
		#modalContent .ctools-modal-dialog.modal-dialog {
			width: 100% !important;
			margin: 0;
			height: 100% !important;
		}
	}

	#modalContent .ctools-modal-dialog.modal-dialog .modal-content {
		border-radius: 0;
		height: 100% !important;
	}
	#modalContent .ctools-modal-dialog.modal-dialog .modal-content .modal-header,
	.modal-dialog .modal-content .modal-header {
		padding: 0;
		border: 0;
	}
	#modalContent .ctools-modal-dialog.modal-dialog .modal-content .modal-header .close,
	.modal-dialog .modal-content .modal-header .close {
		font-family: 'Open Sans', sans-serif;
		width: 52px;
		height: 52px;
		background: #08ade9;
		margin: 0;
		color: #fff;
		opacity: 1;
		text-shadow: none;
		font-size: 3em;
		font-weight: lighter;
	}
	#modalContent .ctools-modal-dialog.modal-dialog .modal-content .modal-header #modal-title,
	.modal-dialog .modal-content .modal-header .modal-title {
		color: #999998;
		font-weight: 300;
		text-align: left;
		font-family: 'Open Sans', sans-serif;
		font-size: 26px;
		line-height: 1em;
		padding: 15px 0 0 15px;
	}
	form#user-login .form-item .form-text,
	form#user-register-form .form-item .form-text {
		border-radius: 0;
		box-shadow: none;
		padding: 20px 8px;
		color: #494947;
		font-size: 15px;
		line-height: 1em;
		width: 100%;
	}
	form#user-login .form-item .control-label,
	form#user-register-form .form-item .control-label,
	form .form-item .control-label {
		margin-top: 32px;
		font-family: 'Open Sans', sans-serif;
		color: #494947;
		font-size: 1.2em;
		line-height: 1;
		font-weight: 700;
	}
	form.ctools-use-modal-processed .form-actions .form-submit,
	form .form-submit,
	.modal-dialog .modal-content .modal-footer .btn {
		color: #fff;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		height: 52px;
		padding: 0px 32px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		border: 1px solid #08ade9;
		border-radius: 150px;
		background-color: #08ade9;
		-webkit-transition: border-color 500ms ease, background-color 500ms ease;
		transition: border-color 500ms ease, background-color 500ms ease;
		font-family: 'Open Sans', sans-serif;
		font-size: 15px;
		line-height: 1em;
		font-weight: 700;
	}
	.modal-dialog {
		margin: 0 auto;
		width: 400px;
	}
	.modal-dialog .modal-content {
		border-radius: 0;
	}
	#formEditCitizenship .modal-dialog .modal-content {
		height: 100%;
	}
	form#user-register-form .help-block {
		display: none;
	}
	.close {
		float: right;
		font-size: 21px;
		font-weight: bold;
		line-height: 1;
		color: #000;
		text-shadow: 0 1px 0 #fff; /* filter: alpha(opacity=20); */
		opacity: 0.2;
	}
	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer; /* filter: alpha(opacity=50); */
		opacity: 0.5;
	}
	button.close {
		padding: 0;
		cursor: pointer;
		background: transparent;
		border: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	.modal-dialog {
		position: relative;
		width: auto;
		margin: 10px;
	}
	.modal-content {
		position: relative;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #999;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		-webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
		box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
		outline: 0;
	}
	.modal-header {
		padding: 15px;
		border-bottom: 1px solid #e5e5e5;
	}
	.modal-header .close {
		margin-top: -2px;
	}
	.modal-title {
		margin: 0;
		line-height: 1.42857143;
	}
	.modal-body {
		position: relative;
		padding: 15px;
	}
	@media (min-width: 768px) {
		.modal-dialog {
			width: 600px;
			margin: 30px auto;
		}
		.modal-content {
			-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
		}
	}
	label {
		display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: 700;
	}
	input[type='checkbox'] {
		margin: 4px 0 0;
		margin-top: 1px \9;
		line-height: normal;
	}
	input[type='checkbox']:focus {
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px;
	}
	.form-control {
		display: block;
		width: 100%;
		height: 34px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		-o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		-webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
		transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
		transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
			-webkit-box-shadow ease-in-out 0.15s;
	}
	.form-control:focus {
		border-color: #66afe9;
		outline: 0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
	}
	.form-control::-moz-placeholder {
		color: #999;
		opacity: 1;
	}
	.form-control:-ms-input-placeholder {
		color: #999;
	}
	.form-control::-webkit-input-placeholder {
		color: #999;
	}
	.form-control::-ms-expand {
		background-color: transparent;
		border: 0;
	}
	.checkbox {
		position: relative;
		display: block;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	fieldset[disabled] .checkbox label {
		cursor: not-allowed;
	}
	.checkbox label {
		min-height: 20px;
		padding-left: 20px;
		margin-bottom: 0;
		font-weight: 400;
		cursor: pointer;
	}
	.checkbox input[type='checkbox'] {
		margin-top: -5px;
	}
	.has-feedback {
		position: relative;
	}
	.has-feedback .form-control {
		padding-right: 42.5px;
	}
	.form-control-feedback {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		display: block;
		width: 34px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		pointer-events: none;
	}
	.has-feedback label ~ .form-control-feedback {
		top: 25px;
	}
	.help-block {
		display: block;
		margin-top: 5px;
		margin-bottom: 10px;
		color: #737373;
	}
	@media (min-width: 768px) {
		.form-inline .has-feedback .form-control-feedback {
			top: 0;
		}
	}
	.form-horizontal .has-feedback .form-control-feedback {
		right: 15px;
	}
	.btn {
		display: inline-block;
		margin-bottom: 0;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		border-radius: 4px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.btn:focus,
	.btn:active:focus {
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px;
	}
	.btn:hover,
	.btn:focus {
		color: #333;
		text-decoration: none;
	}
	.btn:active {
		background-image: none;
		outline: 0;
		-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
	}
	.btn-default {
		color: #333;
		background-color: #fff;
		border-color: #ccc;
	}
	.btn-default:focus,
	.btn-default:hover {
		color: #333;
		background-color: #e6e6e6;
		border-color: #adadad;
	}
	.btn-default:active {
		color: #333;
		background-color: #d4d4d4;
		border-color: #8c8c8c;
	}
	.modal-dialog {
		z-index: 1630;
	}
	.ctools-modal-dialog .modal-body {
		width: 100% !important;
		overflow: auto;
	}
</style>
