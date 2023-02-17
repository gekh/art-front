<script lang="ts">
  import { cur_role, cur_role_type, roles } from '$lib/stores/role';

  let socials: { [key: string]: string };
  $: socials = {
    vk: $roles[$cur_role].info.vk,
    fb: $roles[$cur_role].info.fb,
    youtube: $roles[$cur_role].info.youtube,
    ok: $roles[$cur_role].info.ok,
  };

  const socials_images: { [key: string]: string } = {
    vk: '/images/icons/socials/vk.svg',
    fb: '/images/icons/socials/fb.svg',
    youtube: '/images/icons/socials/youtube.svg',
    ok: '/images/icons/socials/ok.svg',
  };
</script>

<div class="flex mb-8 px-[5%]">
  <div class="flex-[0_0_136px] flex w-[136px] h-[136px]">
    <img src="/images/samples/drummer.jpg" alt="avatar" class="object-cover rounded-full" />
  </div>
  <div class="ml-5">
    <div class="mb-5 text-silvery">{$roles[$cur_role].city}</div>
    <h2 class="mb-5 text-[26px] font-bold leading-none hidden md:block">
      {$roles[$cur_role].name}
    </h2>
    <div class="flex h-5 mb-10">
      <span class="h-5" />
      {#each Object.entries(socials) as [key, link]}
        {#if link !== ''}
          <a href={link} class="w-5 h-5 mr-5"><img src={socials_images[key]} alt={key} /></a>
        {/if}
      {/each}
    </div>
    <div class="flex font-bold">
      <div class="w-[60px] flex items-center">
        <img src="/images/icons/star.svg" alt="stars" class="w-3 h-3 mr-2" />
        5
      </div>
      <div class="w-[60px] flex items-center">
        <img src="/images/icons/text-bubble.svg" alt="comments" class="w-3 h-3 mr-2" />
        45
      </div>
      <div class="w-[60px] flex items-center">
        <img src="/images/icons/eye.svg" alt="views" class="w-3 h-3 mr-2" />
        632
      </div>
    </div>
  </div>
</div>
<h2 class="mb-[52px] px-[5%] text-[26px] font-bold leading-[32px] md:hidden">
  {$roles[$cur_role].name}
</h2>
