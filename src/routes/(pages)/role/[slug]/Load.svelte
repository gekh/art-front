<script lang="ts">
  import { RoleType } from '$lib/enums/RoleType';
  import { pb } from '$lib/pocketbase';
  import { cur_role, cur_role_type, roles, type_grouped_roles } from '$lib/stores/role';
  import type { TInfo } from '$lib/types/TInfo';
  import { onMount } from 'svelte';
  import ModalNewAccount from './ModalNewAccount.svelte';

  // TODO: close for unauthneticated


  let no_roles = false;
  const loadRoles = async () => {
    const MAX_RESULT = 200;
    const pb_roles_raw = await pb.collection('roles').getFullList(MAX_RESULT, {
      filter: 'user_id="' + pb.authStore.model?.id + '"',
    });

    console.log('let us load')

    if (pb_roles_raw.length === 0) {
      no_roles = true;
    } else {
      let pb_roles: any = {};
      for (let cur of pb_roles_raw) {
        const role_type = cur['role_type'] as RoleType;

        let info;
        try {
          info = await pb.collection('info').getFirstListItem('role_id="' + cur['id'] + '"');
        } catch (e) {
          info = await pb.collection('info').create({
            user_id: pb.authStore.model?.id,
            role_id: cur['id'],
          });
        }

        if ($type_grouped_roles[role_type] === undefined) {
          $type_grouped_roles[role_type] = [];
        }

        $type_grouped_roles[role_type].push(cur['id']);

        pb_roles[cur['id']] = {
          id: cur['id'],
          role_type,
          name: cur['name'],
          city: cur['city'],
          info: info.export() as TInfo,
        };
      }

      $roles = pb_roles;
      console.log({roles: $roles, rolte_types: $type_grouped_roles});

      if ($cur_role_type === RoleType.none) {
        let last_role = Object.values($roles)[Object.keys($roles).length - 1];

        $cur_role_type = last_role.role_type;
        $cur_role = last_role.id;
        console.log({
          last_role,
          cur_role_type: $cur_role_type,
          cur_role: $cur_role,
        });
      }
    }
  };

  onMount(loadRoles);
</script>

{#if no_roles && Object.keys($roles).length === 0}
  <ModalNewAccount />
{/if}
