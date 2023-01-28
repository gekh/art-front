<script lang="ts">
	export let onClose: any;
</script>

<div
	on:click={onClose}
	id="modalBackdrop"
	class="backdrop-default"
	style="z-index: 1000; position: fixed; top: 0; bottom:0; left: 0; right:0; margin: 0px; background: rgb(255, 255, 255); opacity: 0.55;"
/>

<div
	id="modalContent"
	class="modal-default"
	style="z-index: 1001; position: fixed; top: 0px; left: 50%; margin-left:-200px; display: block; padding-top: 0px;"
>
	<div class="ctools-modal-dialog modal-dialog" style="width: 1024px; height: 344px;">
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
			<div
				id="modal-content"
				class="modal-body"
				style="width: 1000px; max-height: calc(100vh - 70px);"
			>
				<form
					class="user-info-from-cookie ctools-use-modal-processed"
					enctype="multipart/form-data"
					action="/?q=modal_forms/ajax/register"
					method="post"
					id="user-register-form"
					accept-charset="UTF-8"
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
									value=""
									size="30"
									maxlength="60"
									data-original-title="Пробелы разрешены; знаки пунктуации запрещены, за исключением точек, тире, апострофов и знаков подчеркивания."
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
									value=""
									size="30"
									maxlength="254"
								/>
								<div class="help-block">
									Существующий адрес электронной почты. Все почтовые сообщения с сайта будут
									отсылаться на этот адрес. Адрес электронной почты не будет публиковаться и будет
									использован только по вашему желанию: для восстановления пароля или для получения
									новостей и уведомлений по электронной почте.
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
										/><span class="glyphicon form-control-feedback" />
										<div class="progress">
											<div
												class="progress-bar"
												role="progressbar"
												aria-valuenow="0"
												aria-valuemin="0"
												aria-valuemax="100"
											/>
										</div>
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
						<div class="form-item form-item-fz152-agreement form-type-checkbox checkbox" style="font-size: 12px; margin-top: -20px;">
							<label class="control-label" for="edit-fz152-agreement">
								<input
									required="required"
									type="checkbox"
									id="edit-fz152-agreement"
									name="fz152_agreement"
									value="1"
									class="form-checkbox required"
								/>
								Я даю согласие на
								<a href="/privacy-policy" target="_blank" rel="nofollow"
									>обработку моих персональных данных</a
								>
								и соглашаюсь с
								<a href="#" target="_blank" rel="nofollow"
									>публичной офертой ООО АРТкомпас» и правилами сайта</a
								>.
								<span class="form-required" title="Это поле обязательно для заполнения.">*</span
								></label
							>
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
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	a:hover {
		text-decoration: none;
	}
	.navmenu {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.navmenu_block .navbar-nav ul {
		padding: 0;
		margin: 0;
	}
	.navmenu_block .navbar-nav li {
		float: none;
		padding: 0;
		margin-bottom: 32px;
		list-style: none;
	}
	.navmenu_block .navbar-nav li:hover,
	.navmenu_block .navbar-nav li a:hover {
		background: none;
	}
	.navmenu_block .navbar-nav li a:hover {
		text-decoration: underline;
		color: #08ade9;
	}
	.navmenu_block .navbar-nav li a {
		margin-bottom: 32px;
		padding: 0;
		-webkit-transition: color 500ms ease;
		transition: color 500ms ease;
		font-family: 'Open Sans', sans-serif;
		color: #fff;
		font-size: 26px;
		line-height: 1em;
		font-weight: 700;
		text-decoration: none;
	}
	.brand.w-nav-brand {
		margin: -1px 0 0 1px;
	}
	.not-logged-in.page-admin section #block-system-main {
		margin: 100px 0 100px 0;
		text-align: center;
	}
	.page-user .region.region-content,
	.page-node-edit .region.region-content {
		margin: 20px;
	}
	.logged-in.page-acadmin section #block-system-main,
	.logged-in.page-admin section .region.region-content,
	.logged-in.page-user section .region.region-content,
	.logged-in.page-node-add section .region.region-content {
		/* margin: 50px 0; */
	}
	.not-front.not-logged-in.page-user .main {
		margin: 150px auto;
		width: 50%;
	}
	.page-acadmin #modalContent,
	.page-acadmin #modalContent .ctools-modal-dialog {
		/* width: 600px !important; */
	}
	.icon.glyphicon {
		color: #fff;
	}
	.page-node-add #adv-top-b1-node-form,
	.page-node-edit #adv-top-b1-node-form {
		width: 600px;
		margin: 0 auto;
	}
	.logged-in .main {
		margin: 80px 0;
		/* padding: 0 50px; */
	}
	.logged-in .navbar.w-nav,
	.logged-in .navbar.w-nav .menu-button.w-nav-button {
		/* margin-top: 64px; */
	}
	.logged-in .region-page-top #toolbar .toolbar-drawer {
		/* height: 35px; */
	}
	body.page-node-1 .main,
	body.page-node-17 .main {
		margin: 0;
		padding: 0;
	}
	.div-block-275 {
		z-index: 1001 !important;
	}

	/* Modal Forms */
	#modalBackdrop,
	.modal.fade {
		background: rgba(20, 20, 20, 0.7) !important;
		opacity: 1 !important;
	}
	#modalContent,
	.modal-dialog {
		height: 100% !important;
	}
	#modalContent .ctools-modal-dialog.modal-dialog {
		width: 400px !important;
		margin: 0;
		height: 100% !important;
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
	.modal-dialog .modal-content .modal-footer {
		border: 0;
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
	.captcha.panel {
		margin-top: 32px;
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
	/* Modal Forms */

	/* Modal Form. Add Profile */
	.div-block-195 #accordion .panel.panel-default,
	.div-block-193-custom #accordion-ext .panel.panel-default,
	.div-block-193-custom #accordion-ext1 .panel.panel-default,
	.div-block-193-custom #accordion-ext2 .panel.panel-default,
	.div-block-193-custom #accordion-ext3 .panel.panel-default {
		border: 1px solid #08ade9;
		font-family: 'Open Sans', sans-serif;
		border-radius: 0;
		background: #fff;
		box-shadow: none;
		padding: 10px 0;
		margin: 0;
	}
	.div-block-195 #accordion,
	.div-block-193-custom #accordion-ext,
	.div-block-193-custom #accordion-ext1,
	.div-block-193-custom #accordion-ext2,
	.div-block-193-custom #accordion-ext3 {
		width: 300px;
	}
	.div-block-195 #accordion .panel.panel-default .panel-heading,
	.div-block-193-custom #accordion-ext .panel.panel-default .panel-heading,
	.div-block-193-custom #accordion-ext1 .panel.panel-default .panel-heading,
	.div-block-193-custom #accordion-ext2 .panel.panel-default .panel-heading,
	.div-block-193-custom #accordion-ext3 .panel.panel-default .panel-heading {
		background: #fff;
		border: 0;
	}
	.div-block-195 #accordion .panel.panel-default .panel-heading span,
	.div-block-193-custom #accordion-ext .panel.panel-default .panel-heading span,
	.div-block-193-custom #accordion-ext1 .panel.panel-default .panel-heading span,
	.div-block-193-custom #accordion-ext2 .panel.panel-default .panel-heading span,
	.div-block-193-custom #accordion-ext3 .panel.panel-default .panel-heading span {
		position: relative;
		display: block;
	}
	.div-block-195 #accordion .panel.panel-default .panel-heading span .icon-2.w-icon-dropdown-toggle,
	.div-block-193-custom
		#accordion-ext
		.panel.panel-default
		.panel-heading
		span
		.icon-2.w-icon-dropdown-toggle,
	.div-block-193-custom
		#accordion-ext1
		.panel.panel-default
		.panel-heading
		span
		.icon-2.w-icon-dropdown-toggle,
	.div-block-193-custom
		#accordion-ext2
		.panel.panel-default
		.panel-heading
		span
		.icon-2.w-icon-dropdown-toggle,
	.div-block-193-custom
		#accordion-ext3
		.panel.panel-default
		.panel-heading
		span
		.icon-2.w-icon-dropdown-toggle {
		margin: 0 5px 0 0;
	}
	.div-block-195 #accordion .panel.panel-default .panel-heading span .panel-title,
	.div-block-193-custom #accordion-ext .panel.panel-default .panel-heading span .panel-title,
	.div-block-193-custom #accordion-ext1 .panel.panel-default .panel-heading span .panel-title,
	.div-block-193-custom #accordion-ext2 .panel.panel-default .panel-heading span .panel-title,
	.div-block-193-custom #accordion-ext3 .panel.panel-default .panel-heading span .panel-title {
		color: #494947;
		font-size: 15px;
		line-height: 1em;
		font-weight: normal;
	}
	.checkbox-label-2 {
		margin-left: 3px;
	}
	.panel-group .panel-heading + .panel-collapse > .panel-body,
	.panel-group .panel-heading + .panel-collapse > .list-group {
		border-top: 1px solid #08ade9;
	}
	.button-7:hover,
	.button-4:hover {
		color: #fff;
	}
	.rb-profle {
		width: 100%;
	}
	.rb-profle input {
		float: left;
	}
	.rb-profle label {
		margin: 0 0 0 20px;
		font-weight: normal;
	}
	.div-block-193-custom {
		position: relative;
		z-index: 2;
		overflow: auto;
		height: auto;
	}
	/* Modal Form. Add Profile */

	.div-block-39-menu {
		width: 100%;
	}
	.div-block-39-menu .profile-menu {
		width: 100%;
		display: table;
		margin: 0 0 7px 0;
		height: 31px;
	}
	.div-block-39-menu .profile-menu .main-item {
		float: left;
	}
	.div-block-39-menu .profile-menu .main-item {
		color: #222222;
		cursor: default;
	}
	.div-block-39-menu .profile-menu .menu-list {
		float: left;
		font-size: 15px;
		margin: 0 0 0 10px;
	}
	.div-block-39-menu .profile-menu .menu-list .menu-item {
		float: left;
		padding: 5px;
		margin: 0 5px 0 0;
		text-decoration: underline;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
		color: #494947;
	}
	.dogovor .div-block-16 .tx_nad_abz {
		float: right;
		width: 85%;
		line-height: 1.2;
	}
	.modal-form-link {
		position: absolute;
		left: auto;
		top: 0%;
		right: 0%;
		bottom: auto;
		z-index: 5;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 52px;
		height: 52px;
		margin-left: 0px;
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
		background-color: #08ade9;
		-webkit-transition: background-color 500ms ease;
		transition: background-color 500ms ease;
		max-width: 100%;
		cursor: pointer;
	}
	.modal-form-link:hover {
		background-color: #0992b2;
	}
	.link-remove {
		color: #d43f3a;
	}
	.link-remove:hover {
		color: #d9534f;
	}
	#block_hover {
		transition: all 1s ease;
		opacity: 0;
		display: none;
	}
	#block_hover img,
	#block_hover span {
		margin: 36% auto 0 auto;
		display: block;
	}
	#cboxWrapper,
	#cboxWrapper #cboxContent {
		border-radius: 0;
		background: none;
	}
	#cboxWrapper #cboxClose {
		position: absolute;
		left: auto;
		top: 0%;
		right: 0%;
		bottom: auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 52px;
		height: 52px;
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
		background: #08ade9;
		-webkit-transition: background-color 500ms ease;
		transition: background-color 500ms ease;
		text-indent: 0;
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		color: #fff;
		opacity: 1;
		text-shadow: none;
		font-size: 3em;
		font-weight: lighter;
	}
	.button._2._3.w-button.ctools-use-modal.custom {
		margin-top: 32px;
		display: inline-block;
	}
	.div-block-130.gallery,
	.div-block-131.videos {
		display: table;
	}
	.div-block-130.gallery .div-block-71._3.gallery_item,
	.div-block-131.videos .div-block-71._3.video_item {
		float: left;
		display: block;
		margin: 0 15px 15px 0;
	}
	.dogovor .div-block-16 {
		height: 150px;
	}
	.div-block-71.contract a {
		font-family: 'Open Sans', sans-serif;
		font-size: 15px;
		font-weight: 700;
		top: 50%;
		position: absolute;
		width: 100%;
		text-align: center;
		overflow: hidden;
	}
	.div-block-71.contract a span {
		margin: 0 8px 0 0;
	}
	.not-logged-in .main #block-system-main .section-4 .div-block-41 {
		margin-top: 72px;
	}
	.profile_promo_gallery_item {
		height: 100%;
		background-position: 50% 0px;
		background-size: cover;
		text-transform: uppercase;
	}

	.captcha.panel .panel-heading,
	.captcha.panel .panel-body .help-block,
	form#user-register-form .help-block,
	.form-submit .icon,
	.not-front.not-logged-in.page-user.page-user-register .breadcrumb,
	.not-front.not-logged-in.page-user.page-user-password .breadcrumb,
	.page-node-edit #edit-locale,
	.page-node-edit #edit-timezone,
	.page-node-edit #edit-preview-changes,
	.field-name-field-atb1-profile.field-widget-text-textfield,
	.page-node-edit.node-type-adv-top-b1 .form-item-field-atb1-client,
	.page-node-edit .breadcrumb,
	.page-node-edit ul.nav-tabs,
	.form-item-fc-profile-id,
	.form-item-photoadd-profile-id,
	.form-item-galleryadd-profile-id,
	.form-item-videoadd-profile-id,
	.form-item-documentadd-profile-id,
	.logged-in .region-page-top #toolbar .toolbar-menu a.toggle.toolbar-toggle-processed {
		display: none;
	}
	.page-acadmin-user-profiles .region #toolbar {
		z-index: 1001;
	}
	.logged-in .block_data {
		margin-top: 0;
	}
	.logged-in #toolbar {
		margin: 0 auto;
		position: fixed;
		width: 75%;
	}
	.logged-in #toolbar .toolbar-menu .home {
		display: none;
	}
	.div-block-372 {
		top: -64px !important;
	}

	.div-block-372 {
		top: -64px !important;
	}

	.close {
		float: right;
		font-size: 21px;
		font-weight: bold;
		line-height: 1;
		color: #000;
		text-shadow: 0 1px 0 #fff;
		/* filter: alpha(opacity=20); */
		opacity: 0.2;
	}
	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
		/* filter: alpha(opacity=50); */
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

	.modal-open {
		overflow: hidden;
	}
	.modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1050;
		display: none;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
		outline: 0;
	}

	.modal.fade .modal-dialog {
		-webkit-transform: translate(0, -25%);
		-ms-transform: translate(0, -25%);
		-o-transform: translate(0, -25%);
		transform: translate(0, -25%);
		-webkit-transition: -webkit-transform 0.3s ease-out;
		-o-transition: -o-transform 0.3s ease-out;
		transition: -webkit-transform 0.3s ease-out;
		transition: transform 0.3s ease-out;
		transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -o-transform 0.3s ease-out;
	}

	.modal.in .modal-dialog {
		-webkit-transform: translate(0, 0);
		-ms-transform: translate(0, 0);
		-o-transform: translate(0, 0);
		transform: translate(0, 0);
	}

	.modal-open .modal {
		overflow-x: hidden;
		overflow-y: auto;
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

	.modal-backdrop {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1040;
		background-color: #000;
	}

	.modal-backdrop.fade {
		/* filter: alpha(opacity=0); */
		opacity: 0;
	}

	.modal-backdrop.in {
		/* filter: alpha(opacity=50); */
		opacity: 0.5;
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

	.modal-footer {
		padding: 15px;
		text-align: right;
		border-top: 1px solid #e5e5e5;
	}

	.modal-footer .btn + .btn {
		margin-bottom: 0;
		margin-left: 5px;
	}

	.modal-footer .btn-group .btn + .btn {
		margin-left: -1px;
	}

	.modal-footer .btn-block + .btn-block {
		margin-left: 0;
	}

	.modal-scrollbar-measure {
		position: absolute;
		top: -9999px;
		width: 50px;
		height: 50px;
		overflow: scroll;
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
		.modal-sm {
			width: 300px;
		}
	}

	@media (min-width: 992px) {
		.modal-lg {
			width: 900px;
		}
	}

	label {
		display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: 700;
	}
	input[type='search'] {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	input[type='radio'],
	input[type='checkbox'] {
		margin: 4px 0 0;
		margin-top: 1px \9;
		line-height: normal;
	}
	input[type='radio'][disabled],
	input[type='checkbox'][disabled],
	input[type='radio'].disabled,
	input[type='checkbox'].disabled,
	fieldset[disabled] input[type='radio'],
	fieldset[disabled] input[type='checkbox'] {
		cursor: not-allowed;
	}
	input[type='file'] {
		display: block;
	}
	input[type='range'] {
		display: block;
		width: 100%;
	}
	select[multiple],
	select[size] {
		height: auto;
	}
	input[type='file']:focus,
	input[type='radio']:focus,
	input[type='checkbox']:focus {
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px;
	}
	output {
		display: block;
		padding-top: 7px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555555;
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
	.form-control[disabled],
	.form-control[readonly],
	fieldset[disabled] .form-control {
		background-color: #eeeeee;
		opacity: 1;
	}
	.form-control[disabled],
	fieldset[disabled] .form-control {
		cursor: not-allowed;
	}
	textarea.form-control {
		height: auto;
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		input[type='date'].form-control,
		input[type='time'].form-control,
		input[type='datetime-local'].form-control,
		input[type='month'].form-control {
			line-height: 34px;
		}
		input[type='date'].input-sm,
		input[type='time'].input-sm,
		input[type='datetime-local'].input-sm,
		input[type='month'].input-sm,
		.input-group-sm input[type='date'],
		.input-group-sm input[type='time'],
		.input-group-sm input[type='datetime-local'],
		.input-group-sm input[type='month'] {
			line-height: 30px;
		}
		input[type='date'].input-lg,
		input[type='time'].input-lg,
		input[type='datetime-local'].input-lg,
		input[type='month'].input-lg,
		.input-group-lg input[type='date'],
		.input-group-lg input[type='time'],
		.input-group-lg input[type='datetime-local'],
		.input-group-lg input[type='month'] {
			line-height: 46px;
		}
	}
	.radio,
	.checkbox {
		position: relative;
		display: block;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.radio.disabled label,
	.checkbox.disabled label,
	fieldset[disabled] .radio label,
	fieldset[disabled] .checkbox label {
		cursor: not-allowed;
	}
	.radio label,
	.checkbox label {
		min-height: 20px;
		padding-left: 20px;
		margin-bottom: 0;
		font-weight: 400;
		cursor: pointer;
	}
	.radio input[type='radio'],
	.radio-inline input[type='radio'],
	.checkbox input[type='checkbox'],
	.checkbox-inline input[type='checkbox'] {
		position: absolute;
		margin-top: 4px \9;
		margin-left: -20px;
	}
	.radio + .radio,
	.checkbox + .checkbox {
		margin-top: -5px;
	}
	.radio-inline,
	.checkbox-inline {
		position: relative;
		display: inline-block;
		padding-left: 20px;
		margin-bottom: 0;
		font-weight: 400;
		vertical-align: middle;
		cursor: pointer;
	}
	.radio-inline.disabled,
	.checkbox-inline.disabled,
	fieldset[disabled] .radio-inline,
	fieldset[disabled] .checkbox-inline {
		cursor: not-allowed;
	}
	.radio-inline + .radio-inline,
	.checkbox-inline + .checkbox-inline {
		margin-top: 0;
		margin-left: 10px;
	}
	.form-control-static {
		min-height: 34px;
		padding-top: 7px;
		padding-bottom: 7px;
		margin-bottom: 0;
	}
	.form-control-static.input-lg,
	.form-control-static.input-sm {
		padding-right: 0;
		padding-left: 0;
	}
	.input-sm {
		height: 30px;
		padding: 5px 10px;
		font-size: 12px;
		line-height: 1.5;
		border-radius: 3px;
	}
	select.input-sm {
		height: 30px;
		line-height: 30px;
	}
	textarea.input-sm,
	select[multiple].input-sm {
		height: auto;
	}
	.form-group-sm .form-control {
		height: 30px;
		padding: 5px 10px;
		font-size: 12px;
		line-height: 1.5;
		border-radius: 3px;
	}
	.form-group-sm select.form-control {
		height: 30px;
		line-height: 30px;
	}
	.form-group-sm textarea.form-control,
	.form-group-sm select[multiple].form-control {
		height: auto;
	}
	.form-group-sm .form-control-static {
		height: 30px;
		min-height: 32px;
		padding: 6px 10px;
		font-size: 12px;
		line-height: 1.5;
	}
	.input-lg {
		height: 46px;
		padding: 10px 16px;
		font-size: 18px;
		line-height: 1.3333333;
		border-radius: 6px;
	}
	select.input-lg {
		height: 46px;
		line-height: 46px;
	}
	textarea.input-lg,
	select[multiple].input-lg {
		height: auto;
	}
	.form-group-lg .form-control {
		height: 46px;
		padding: 10px 16px;
		font-size: 18px;
		line-height: 1.3333333;
		border-radius: 6px;
	}
	.form-group-lg select.form-control {
		height: 46px;
		line-height: 46px;
	}
	.form-group-lg textarea.form-control,
	.form-group-lg select[multiple].form-control {
		height: auto;
	}
	.form-group-lg .form-control-static {
		height: 46px;
		min-height: 38px;
		padding: 11px 16px;
		font-size: 18px;
		line-height: 1.3333333;
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
	.input-lg + .form-control-feedback,
	.input-group-lg + .form-control-feedback,
	.form-group-lg .form-control + .form-control-feedback {
		width: 46px;
		height: 46px;
		line-height: 46px;
	}
	.input-sm + .form-control-feedback,
	.input-group-sm + .form-control-feedback,
	.form-group-sm .form-control + .form-control-feedback {
		width: 30px;
		height: 30px;
		line-height: 30px;
	}
	.has-success .help-block,
	.has-success .control-label,
	.has-success .radio,
	.has-success .checkbox,
	.has-success .radio-inline,
	.has-success .checkbox-inline,
	.has-success.radio label,
	.has-success.checkbox label,
	.has-success.radio-inline label,
	.has-success.checkbox-inline label {
		color: #3c763d;
	}
	.has-success .form-control {
		border-color: #3c763d;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	}
	.has-success .form-control:focus {
		border-color: #2b542c;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
	}
	.has-success .input-group-addon {
		color: #3c763d;
		background-color: #dff0d8;
		border-color: #3c763d;
	}
	.has-success .form-control-feedback {
		color: #3c763d;
	}
	.has-warning .help-block,
	.has-warning .control-label,
	.has-warning .radio,
	.has-warning .checkbox,
	.has-warning .radio-inline,
	.has-warning .checkbox-inline,
	.has-warning.radio label,
	.has-warning.checkbox label,
	.has-warning.radio-inline label,
	.has-warning.checkbox-inline label {
		color: #8a6d3b;
	}
	.has-warning .form-control {
		border-color: #8a6d3b;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	}
	.has-warning .form-control:focus {
		border-color: #66512c;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
	}
	.has-warning .input-group-addon {
		color: #8a6d3b;
		background-color: #fcf8e3;
		border-color: #8a6d3b;
	}
	.has-warning .form-control-feedback {
		color: #8a6d3b;
	}
	.has-error .help-block,
	.has-error .control-label,
	.has-error .radio,
	.has-error .checkbox,
	.has-error .radio-inline,
	.has-error .checkbox-inline,
	.has-error.radio label,
	.has-error.checkbox label,
	.has-error.radio-inline label,
	.has-error.checkbox-inline label {
		color: #a94442;
	}
	.has-error .form-control {
		border-color: #a94442;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	}
	.has-error .form-control:focus {
		border-color: #843534;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
	}
	.has-error .input-group-addon {
		color: #a94442;
		background-color: #f2dede;
		border-color: #a94442;
	}
	.has-error .form-control-feedback {
		color: #a94442;
	}
	.has-feedback label ~ .form-control-feedback {
		top: 25px;
	}
	.has-feedback label.sr-only ~ .form-control-feedback {
		top: 0;
	}
	.help-block {
		display: block;
		margin-top: 5px;
		margin-bottom: 10px;
		color: #737373;
	}
	@media (min-width: 768px) {
		.form-inline .form-group {
			display: inline-block;
			margin-bottom: 0;
			vertical-align: middle;
		}
		.form-inline .form-control {
			display: inline-block;
			width: auto;
			vertical-align: middle;
		}
		.form-inline .form-control-static {
			display: inline-block;
		}
		.form-inline .input-group {
			display: inline-table;
			vertical-align: middle;
		}
		.form-inline .input-group .input-group-addon,
		.form-inline .input-group .input-group-btn,
		.form-inline .input-group .form-control {
			width: auto;
		}
		.form-inline .input-group > .form-control {
			width: 100%;
		}
		.form-inline .control-label {
			margin-bottom: 0;
			vertical-align: middle;
		}
		.form-inline .radio,
		.form-inline .checkbox {
			display: inline-block;
			margin-top: 0;
			margin-bottom: 0;
			vertical-align: middle;
		}
		.form-inline .radio label,
		.form-inline .checkbox label {
			padding-left: 0;
		}
		.form-inline .radio input[type='radio'],
		.form-inline .checkbox input[type='checkbox'] {
			position: relative;
			margin-left: 0;
		}
		.form-inline .has-feedback .form-control-feedback {
			top: 0;
		}
	}
	.form-horizontal .radio,
	.form-horizontal .checkbox,
	.form-horizontal .radio-inline,
	.form-horizontal .checkbox-inline {
		padding-top: 7px;
		margin-top: 0;
		margin-bottom: 0;
	}
	.form-horizontal .radio,
	.form-horizontal .checkbox {
		min-height: 27px;
	}
	.form-horizontal .form-group {
		margin-right: -15px;
		margin-left: -15px;
	}
	@media (min-width: 768px) {
		.form-horizontal .control-label {
			padding-top: 7px;
			margin-bottom: 0;
			text-align: right;
		}
	}
	.form-horizontal .has-feedback .form-control-feedback {
		right: 15px;
	}
	@media (min-width: 768px) {
		.form-horizontal .form-group-lg .control-label {
			padding-top: 11px;
			font-size: 18px;
		}
	}
	@media (min-width: 768px) {
		.form-horizontal .form-group-sm .control-label {
			padding-top: 6px;
			font-size: 12px;
		}
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
	.btn:active:focus,
	.btn.active:focus,
	.btn.focus,
	.btn:active.focus,
	.btn.active.focus {
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px;
	}
	.btn:hover,
	.btn:focus,
	.btn.focus {
		color: #333;
		text-decoration: none;
	}
	.btn:active,
	.btn.active {
		background-image: none;
		outline: 0;
		-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
	}
	.btn.disabled,
	.btn[disabled],
	fieldset[disabled] .btn {
		cursor: not-allowed;
		/* filter: alpha(opacity=65); */
		opacity: 0.65;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	a.btn.disabled,
	fieldset[disabled] a.btn {
		pointer-events: none;
	}
	.btn-default {
		color: #333;
		background-color: #fff;
		border-color: #ccc;
	}
	.btn-default:focus,
	.btn-default.focus {
		color: #333;
		background-color: #e6e6e6;
		border-color: #8c8c8c;
	}
	.btn-default:hover {
		color: #333;
		background-color: #e6e6e6;
		border-color: #adadad;
	}
	.btn-default:active,
	.btn-default.active,
	.open > .dropdown-toggle.btn-default {
		color: #333;
		background-color: #e6e6e6;
		background-image: none;
		border-color: #adadad;
	}
	.btn-default:active:hover,
	.btn-default.active:hover,
	.open > .dropdown-toggle.btn-default:hover,
	.btn-default:active:focus,
	.btn-default.active:focus,
	.open > .dropdown-toggle.btn-default:focus,
	.btn-default:active.focus,
	.btn-default.active.focus,
	.open > .dropdown-toggle.btn-default.focus {
		color: #333;
		background-color: #d4d4d4;
		border-color: #8c8c8c;
	}
	.btn-default.disabled:hover,
	.btn-default[disabled]:hover,
	fieldset[disabled] .btn-default:hover,
	.btn-default.disabled:focus,
	.btn-default[disabled]:focus,
	fieldset[disabled] .btn-default:focus,
	.btn-default.disabled.focus,
	.btn-default[disabled].focus,
	fieldset[disabled] .btn-default.focus {
		background-color: #fff;
		border-color: #ccc;
	}
	.btn-default .badge {
		color: #fff;
		background-color: #333;
	}
	.btn-primary {
		color: #fff;
		background-color: #337ab7;
		border-color: #2e6da4;
	}
	.btn-primary:focus,
	.btn-primary.focus {
		color: #fff;
		background-color: #286090;
		border-color: #122b40;
	}
	.btn-primary:hover {
		color: #fff;
		background-color: #286090;
		border-color: #204d74;
	}
	.btn-primary:active,
	.btn-primary.active,
	.open > .dropdown-toggle.btn-primary {
		color: #fff;
		background-color: #286090;
		background-image: none;
		border-color: #204d74;
	}
	.btn-primary:active:hover,
	.btn-primary.active:hover,
	.open > .dropdown-toggle.btn-primary:hover,
	.btn-primary:active:focus,
	.btn-primary.active:focus,
	.open > .dropdown-toggle.btn-primary:focus,
	.btn-primary:active.focus,
	.btn-primary.active.focus,
	.open > .dropdown-toggle.btn-primary.focus {
		color: #fff;
		background-color: #204d74;
		border-color: #122b40;
	}
	.btn-primary.disabled:hover,
	.btn-primary[disabled]:hover,
	fieldset[disabled] .btn-primary:hover,
	.btn-primary.disabled:focus,
	.btn-primary[disabled]:focus,
	fieldset[disabled] .btn-primary:focus,
	.btn-primary.disabled.focus,
	.btn-primary[disabled].focus,
	fieldset[disabled] .btn-primary.focus {
		background-color: #337ab7;
		border-color: #2e6da4;
	}
	.btn-primary .badge {
		color: #337ab7;
		background-color: #fff;
	}
	.btn-success {
		color: #fff;
		background-color: #5cb85c;
		border-color: #4cae4c;
	}
	.btn-success:focus,
	.btn-success.focus {
		color: #fff;
		background-color: #449d44;
		border-color: #255625;
	}
	.btn-success:hover {
		color: #fff;
		background-color: #449d44;
		border-color: #398439;
	}
	.btn-success:active,
	.btn-success.active,
	.open > .dropdown-toggle.btn-success {
		color: #fff;
		background-color: #449d44;
		background-image: none;
		border-color: #398439;
	}
	.btn-success:active:hover,
	.btn-success.active:hover,
	.open > .dropdown-toggle.btn-success:hover,
	.btn-success:active:focus,
	.btn-success.active:focus,
	.open > .dropdown-toggle.btn-success:focus,
	.btn-success:active.focus,
	.btn-success.active.focus,
	.open > .dropdown-toggle.btn-success.focus {
		color: #fff;
		background-color: #398439;
		border-color: #255625;
	}
	.btn-success.disabled:hover,
	.btn-success[disabled]:hover,
	fieldset[disabled] .btn-success:hover,
	.btn-success.disabled:focus,
	.btn-success[disabled]:focus,
	fieldset[disabled] .btn-success:focus,
	.btn-success.disabled.focus,
	.btn-success[disabled].focus,
	fieldset[disabled] .btn-success.focus {
		background-color: #5cb85c;
		border-color: #4cae4c;
	}
	.btn-success .badge {
		color: #5cb85c;
		background-color: #fff;
	}
	.btn-info {
		color: #fff;
		background-color: #5bc0de;
		border-color: #46b8da;
	}
	.btn-info:focus,
	.btn-info.focus {
		color: #fff;
		background-color: #31b0d5;
		border-color: #1b6d85;
	}
	.btn-info:hover {
		color: #fff;
		background-color: #31b0d5;
		border-color: #269abc;
	}
	.btn-info:active,
	.btn-info.active,
	.open > .dropdown-toggle.btn-info {
		color: #fff;
		background-color: #31b0d5;
		background-image: none;
		border-color: #269abc;
	}
	.btn-info:active:hover,
	.btn-info.active:hover,
	.open > .dropdown-toggle.btn-info:hover,
	.btn-info:active:focus,
	.btn-info.active:focus,
	.open > .dropdown-toggle.btn-info:focus,
	.btn-info:active.focus,
	.btn-info.active.focus,
	.open > .dropdown-toggle.btn-info.focus {
		color: #fff;
		background-color: #269abc;
		border-color: #1b6d85;
	}
	.btn-info.disabled:hover,
	.btn-info[disabled]:hover,
	fieldset[disabled] .btn-info:hover,
	.btn-info.disabled:focus,
	.btn-info[disabled]:focus,
	fieldset[disabled] .btn-info:focus,
	.btn-info.disabled.focus,
	.btn-info[disabled].focus,
	fieldset[disabled] .btn-info.focus {
		background-color: #5bc0de;
		border-color: #46b8da;
	}
	.btn-info .badge {
		color: #5bc0de;
		background-color: #fff;
	}
	.btn-warning {
		color: #fff;
		background-color: #f0ad4e;
		border-color: #eea236;
	}
	.btn-warning:focus,
	.btn-warning.focus {
		color: #fff;
		background-color: #ec971f;
		border-color: #985f0d;
	}
	.btn-warning:hover {
		color: #fff;
		background-color: #ec971f;
		border-color: #d58512;
	}
	.btn-warning:active,
	.btn-warning.active,
	.open > .dropdown-toggle.btn-warning {
		color: #fff;
		background-color: #ec971f;
		background-image: none;
		border-color: #d58512;
	}
	.btn-warning:active:hover,
	.btn-warning.active:hover,
	.open > .dropdown-toggle.btn-warning:hover,
	.btn-warning:active:focus,
	.btn-warning.active:focus,
	.open > .dropdown-toggle.btn-warning:focus,
	.btn-warning:active.focus,
	.btn-warning.active.focus,
	.open > .dropdown-toggle.btn-warning.focus {
		color: #fff;
		background-color: #d58512;
		border-color: #985f0d;
	}
	.btn-warning.disabled:hover,
	.btn-warning[disabled]:hover,
	fieldset[disabled] .btn-warning:hover,
	.btn-warning.disabled:focus,
	.btn-warning[disabled]:focus,
	fieldset[disabled] .btn-warning:focus,
	.btn-warning.disabled.focus,
	.btn-warning[disabled].focus,
	fieldset[disabled] .btn-warning.focus {
		background-color: #f0ad4e;
		border-color: #eea236;
	}
	.btn-warning .badge {
		color: #f0ad4e;
		background-color: #fff;
	}
	.btn-danger {
		color: #fff;
		background-color: #d9534f;
		border-color: #d43f3a;
	}
	.btn-danger:focus,
	.btn-danger.focus {
		color: #fff;
		background-color: #c9302c;
		border-color: #761c19;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #c9302c;
		border-color: #ac2925;
	}
	.btn-danger:active,
	.btn-danger.active,
	.open > .dropdown-toggle.btn-danger {
		color: #fff;
		background-color: #c9302c;
		background-image: none;
		border-color: #ac2925;
	}
	.btn-danger:active:hover,
	.btn-danger.active:hover,
	.open > .dropdown-toggle.btn-danger:hover,
	.btn-danger:active:focus,
	.btn-danger.active:focus,
	.open > .dropdown-toggle.btn-danger:focus,
	.btn-danger:active.focus,
	.btn-danger.active.focus,
	.open > .dropdown-toggle.btn-danger.focus {
		color: #fff;
		background-color: #ac2925;
		border-color: #761c19;
	}
	.btn-danger.disabled:hover,
	.btn-danger[disabled]:hover,
	fieldset[disabled] .btn-danger:hover,
	.btn-danger.disabled:focus,
	.btn-danger[disabled]:focus,
	fieldset[disabled] .btn-danger:focus,
	.btn-danger.disabled.focus,
	.btn-danger[disabled].focus,
	fieldset[disabled] .btn-danger.focus {
		background-color: #d9534f;
		border-color: #d43f3a;
	}
	.btn-danger .badge {
		color: #d9534f;
		background-color: #fff;
	}
	.btn-link {
		font-weight: 400;
		color: #337ab7;
		border-radius: 0;
	}
	.btn-link,
	.btn-link:active,
	.btn-link.active,
	.btn-link[disabled],
	fieldset[disabled] .btn-link {
		background-color: transparent;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	.btn-link,
	.btn-link:hover,
	.btn-link:focus,
	.btn-link:active {
		border-color: transparent;
	}
	.btn-link:hover,
	.btn-link:focus {
		color: #23527c;
		text-decoration: underline;
		background-color: transparent;
	}
	.btn-link[disabled]:hover,
	fieldset[disabled] .btn-link:hover,
	.btn-link[disabled]:focus,
	fieldset[disabled] .btn-link:focus {
		color: #777777;
		text-decoration: none;
	}
	.btn-lg,
	.btn-group-lg > .btn {
		padding: 10px 16px;
		font-size: 18px;
		line-height: 1.3333333;
		border-radius: 6px;
	}
	.btn-sm,
	.btn-group-sm > .btn {
		padding: 5px 10px;
		font-size: 12px;
		line-height: 1.5;
		border-radius: 3px;
	}
	.btn-xs,
	.btn-group-xs > .btn {
		padding: 1px 5px;
		font-size: 12px;
		line-height: 1.5;
		border-radius: 3px;
	}
	.btn-block {
		display: block;
		width: 100%;
	}
	.btn-block + .btn-block {
		margin-top: 5px;
	}
	input[type='submit'].btn-block,
	input[type='reset'].btn-block,
	input[type='button'].btn-block {
		width: 100%;
	}

	.modal {
		z-index: 1620;
	}
	.modal-dialog {
		z-index: 1630;
	}
	.ctools-modal-dialog .modal-body {
		width: 100% !important;
		overflow: auto;
	}
	.modal-backdrop {
		z-index: 1610;
	}
</style>
