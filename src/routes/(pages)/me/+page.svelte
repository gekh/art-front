<script lang="ts">
	// TODO: abstract it to any user
	import { currentUser } from '../../../pocketbase';
	const user = currentUser;

	import Time from 'svelte-time';
	import Selector from './Selector.svelte';
	import ProfileCard from './ProfileCard.svelte';
</script>

<div class="px-[52px] pb-[52px]">
	<div class="mb-8 text-[15px] flex text-silvery">
		<a href="#/" class="flex-1 flex items-center text-silvery hover:text-biruza trans-color">
			<img class="mr-2 h-5" src="images/icons/left-angle.svg" alt="back arrow icon" />
			<span>Назад</span>
		</a>
		{#if $user}
			<div class="flex-1 ml-auto text-right">
				Дата регистрации:
				<Time timestamp={new Date($user ? $user.created : '')} format="DD.MM.YYYY" />
			</div>
		{/if}
	</div>
  <Selector />
  <ProfileCard />
  <div class="text-[100px] p-5">CONTENT</div>
  <div class="text-[100px] p-5">CONTENT</div>
  <div class="text-[100px] p-5">CONTENT</div>
  <div class="text-[100px] p-5">CONTENT</div>
</div>

