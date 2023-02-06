<script lang="ts">
  const socials = {
    vk: 'https://vk.com',
    fb: 'https://fb.com',
    youtube: 'https://youtube.com',
    ok: 'https://ok.ru',
  };

  const socials_images = {
    vk: 'images/icons/socials/vk.svg',
    fb: 'images/icons/socials/fb.svg',
    youtube: 'images/icons/socials/youtube.svg',
    ok: 'images/icons/socials/ok.svg',
  };
</script>

<div class="flex mb-8 px-[52px]">
  <div class="flex-[0_0_136px] flex w-[136px] h-[136px]">
    <img src="images/samples/drummer.jpg" alt="avatar" class="object-cover rounded-full" />
  </div>
  <div class="ml-5">
    <div class="mb-5 text-silvery">Псебай</div>
    <h2 class="mb-5 text-[26px] text-graphite font-bold leading-none">Барабанщик Людовиг Бахмучев</h2>
    <div class="flex mb-10">
      {#each Object.entries(socials) as [key, link]}
        <a href="{link}" class="w-5 h-5 mr-5"><img src="{socials_images[key]}" alt="{key}"></a>
      {/each}
    </div>
    <div class="flex font-bold text-graphite">
      <div class="w-[60px] flex items-center">
        <img src="images/icons/star.svg" alt="stars" class="w-3 h-3 mr-2" />
        5
      </div>
      <div class="w-[60px] flex items-center">
        <img src="images/icons/text-bubble.svg" alt="comments" class="w-3 h-3 mr-2" />
        45
      </div>
      <div class="w-[60px] flex items-center">
        <img src="images/icons/eye.svg" alt="views" class="w-3 h-3 mr-2" />
        632
      </div>
    </div>
  </div>
</div>
