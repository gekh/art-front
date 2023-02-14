<script lang="ts">
  import { RoleType } from '$lib/enums/RoleType';
  import { address, citizenship, diff, partnership, socials, speciality } from '$lib/infoblocks';
  import type { TInfoblock } from '$lib/types/TInfoblock';
  import { cur_role_type } from '../../../../stores/role';
  import Infoblock from './edit/Infoblock.svelte';

  let infoblocks: Array<TInfoblock> = [];
  $: if ($cur_role_type == RoleType.customer) {
    infoblocks = [citizenship, address, partnership, socials];
  } else {
    infoblocks = [citizenship, speciality, diff, socials];
  }
</script>

<div class="flex gap-4 flex-wrap justify-center md:justify-start">
  {#each infoblocks as ib}
    <Infoblock {ib} />
  {/each}
</div>
