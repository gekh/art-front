<script lang="ts">
  import { RoleType } from '$lib/enums/RoleType';
  import { cur_role, cur_role_type, roles } from '$lib/stores/role';
  import type { TInfo } from '$lib/types/TInfo';
  import { createEventDispatcher, getContext } from 'svelte';
  import { currentUser, pb } from '$lib/pocketbase';
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

  const createInfo = async (pb_role: any): Promise<TInfo>  => {
    let type = pb_role['role_type'] as RoleType;

    let info_query: TInfo = {
        user_id: pb.authStore.model?.id,
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

      if ($roles[type] === undefined) {
        $roles[type] = {};
      }

      $roles[type][pb_role['id']] = {
        name: pb_role['name'],
        city: pb_role['city'],
        info: await createInfo(pb_role),
      };

      $cur_role_type = type;
      $cur_role = pb_role['id'];
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
