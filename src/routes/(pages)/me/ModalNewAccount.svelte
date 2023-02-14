<script lang="ts">
  import { createEventDispatcher, getContext } from 'svelte';
  import type { RoleType } from '$lib/enums/RoleType';
  import { currentUser, pb } from '../../../lib/pocketbase';
  import { cur_role, cur_role_type, roles } from '../../../stores/role';
  import EnterPersonalInfo from './new-account-steps/EnterPersonalInfo.svelte';
  import ChooseRole from './new-account-steps/ChooseRole.svelte';

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

  const save = async () => {
    query['user_id'] = $currentUser?.id;

    const response: any = await pb.collection('roles').create(query);
    if (response) {
      let type = response['role_type'] as RoleType;
      if ($roles[type] === undefined) {
        $roles[type] = {};
      }

      $roles[type][response['id']] = {
        name: response['name'],
        city: response['city'],
      };

      $cur_role_type = type;
      $cur_role = response['id'];
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
