<script lang="ts">
  import { goto } from '$app/navigation';
  import Loading from '$lib/components/Loading.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import ModalNewAccount from './[slug]/ModalNewAccount.svelte';

  export let data: PageData;

  onMount(() => {
    if (data.default_role.length > 0) {
      goto('/role/' + data.default_role);
    }
  });
</script>

{#if data.roles !== undefined && Object.keys(data.roles).length === 0}
  <ModalNewAccount />
{:else}
  <Loading />
{/if}
