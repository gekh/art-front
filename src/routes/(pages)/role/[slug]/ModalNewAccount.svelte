<script lang="ts">
    import { goto } from '$app/navigation';
  import { RoleType } from '$lib/enums/RoleType';
  import { currentUser, pb } from '$lib/pocketbase';
  import { cur_role, cur_role_type, roles, type_grouped_roles } from '$lib/stores/role';
  import type { TInfo, TInfoCreate } from '$lib/types/TInfo';
  import { createEventDispatcher, getContext } from 'svelte';
  import ChooseRole from './new-account-steps/ChooseRole.svelte';
  import EnterPersonalInfo from './new-account-steps/EnterPersonalInfo.svelte';

  const dispatch = createEventDispatcher();
  const { close }: any = getContext('simple-modal');
  let cur_step = 0;

  type TQueryCreateRole = {
    user_id?: string;
    role_type?: string;
    name?: string;
    city?: string;
  };

  let query: TQueryCreateRole;

  const createInfo = async (pb_role: any): Promise<TInfo> => {
    let type = pb_role['role_type'] as RoleType;

    let info_query: TInfoCreate = {
      user_id: pb.authStore.model?.id ?? '',
      role_id: pb_role['id'],
    };

    if (type === RoleType.band) {
      info_query.band_name = pb_role.name;
    } else {
      info_query.first_name = pb_role.name;
    }

    info_query.city = pb_role.city;

    return await pb.collection('info').create(info_query);
  };

  const save = async () => {
    query['user_id'] = $currentUser?.id;

    const pb_role: any = await pb.collection('roles').create(query);

    if (pb_role) {
      let type = pb_role['role_type'] as RoleType;

      if ($type_grouped_roles[type] === undefined) {
        $type_grouped_roles[type] = [];
      }
      $type_grouped_roles[type].push(pb_role['id']);

      $roles[pb_role['id']] = {
        id: pb_role['id'],
        role_type: type,
        name: pb_role['name'],
        city: pb_role['city'],
        info: await createInfo(pb_role),
      };

      $cur_role_type = type;
      $cur_role = pb_role['id'];
      goto('/role/' + pb_role['id']);
    } else {
      console.error('pb create role error');
    }
  };
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col gap-5">
    {#if cur_step === 0}
      <ChooseRole
        on:next={(e) => {
          query = { ...query, ...e.detail };
          cur_step += 1;
        }}
      />
    {:else if cur_step === 1}
      <EnterPersonalInfo
        on:next={(e) => {
          query = { ...query, ...e.detail };
          close();
          dispatch('close');
          save();
        }}
      />
    {/if}
  </div>
</div>
