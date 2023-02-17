<script lang="ts">
  import { goto } from '$app/navigation';
  import Loading from '$lib/components/Loading.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import ModalNewAccount from './[slug]/ModalNewAccount.svelte';

  export let data: PageData;

  onMount(() => {
    const role_id = Object.keys(data.roles)[0];
    if (role_id !== undefined) {
      goto('/role/' + role_id);
    }
  });
</script>

{#if data.roles !== undefined && Object.keys(data.roles).length === 0}
  <ModalNewAccount />
{:else}
  <Loading />
{/if}
