<script lang="ts">
  import { getContext } from 'svelte';
  import { roles} from '../../../stores/role';

  const { close }: any = getContext('simple-modal');

  import EnterPersonalInfo from './new-account-steps/EnterPersonalInfo.svelte';
  import SelectRole from './new-account-steps/SelectRole.svelte';

  let cur_step = 0;
  let data = {};

  const save = () => {
    console.log(data);

    $roles[data['role']][123] = data['name'];

  };
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col gap-5">
    {#if cur_step === 0}
      <SelectRole
        on:next={(e) => {
          data = {...data, ...e.detail};
          cur_step += 1;
        }}
      />
    {:else if cur_step === 1}
      <EnterPersonalInfo
        on:next={(e) => {
          data = {...data, ...e.detail};
          close();
          save();
        }}
      />
    {/if}
  </div>
</div>
