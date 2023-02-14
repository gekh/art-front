<script lang="ts">
  import type { RoleType } from '$lib/enums/RoleType';
  import { pb } from '$lib/pocketbase';
  import { cur_role, cur_role_type, roles } from '$lib/stores/role';
  import { onMount } from 'svelte';
  import ModalNewAccount from './ModalNewAccount.svelte';

  // TODO: close for unauthneticated

  let no_roles = false;
  const loadRoles = async () => {
    const MAX_RESULT = 200;
    const pb_roles_raw = await pb.collection('roles').getFullList(MAX_RESULT, {
      filter: 'user_id="' + pb.authStore.model?.id + '"',
    });

    if (pb_roles_raw.length === 0) {
      no_roles = true;
    } else {
      let pb_roles: any = {};
      for (let cur of pb_roles_raw) {
        const role_type = cur['role_type'] as RoleType;
        if (pb_roles[role_type] == undefined) {
          pb_roles[role_type] = {};
        }

        let info;
        try {
          info = await pb.collection('info').getFirstListItem('role_id="' + cur['id'] + '"');
        } catch (e) {
          info = await pb.collection('info').create({
            user_id: pb.authStore.model?.id,
            role_id: cur['id'],
          });
        }
        pb_roles[role_type][cur['id']] = {
          name: cur['name'],
          city: cur['city'],
          info,
        };
      }

      $cur_role_type = Object.keys(pb_roles)[0] as RoleType;
      $cur_role = Object.keys(pb_roles[$cur_role_type])[0];
      $roles = pb_roles;
    }
  };

  onMount(loadRoles);
</script>

{#if no_roles && Object.keys($roles).length === 0}
  <ModalNewAccount />
{/if}
