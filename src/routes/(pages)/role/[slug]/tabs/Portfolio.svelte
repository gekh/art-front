<script lang="ts">
  import ActionBtn from '$lib/components/ActionBtn.svelte';

  let photos_len = 5;
  let videos_len = 4;
</script>

<div class="mb-8">
  <ActionBtn>Добавить</ActionBtn>
</div>

<div class="py-[52px] px-5 bg-white">
  {#if photos_len > 0}
    <h2 class="mb-8 text-silvery text-[26px] font-light">Фото</h2>
    <div class="flex flex-wrap gap-5 mb-[52px]">
      {#each [...Array(photos_len).keys()] as _}
        <div class="relative flex w-[300px] h-[300px]">
          <img src="/images/samples/band.jpg" alt="protfolio" class="object-cover" />
          <button
            class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky t-color"
            on:click={() => {
              photos_len -= 1;
            }}
          >
            <img src="/images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
          </button>
        </div>
      {/each}
    </div>
  {/if}


  {#if videos_len > 0}
  <h2 class="mb-8 text-silvery text-[26px] font-light">Видео</h2>

  <div class="flex flex-wrap gap-5">
    {#each [...Array(videos_len).keys()] as _}
      <div class="relative flex w-[300px] h-[300px]">
        <div style="padding-top:56.17021276595749%" class="w-embed-youtubevideo youtube">
          <iframe
            src="https://www.youtube.com/embed/18-Ye2L3ej8?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
            style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
            allow="autoplay; encrypted-media"
            title=""
            frameborder="0"
          />
        </div>
        <button
          class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky t-color"
          on:click={() => {videos_len -= 1}}
        >
          <img src="/images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
        </button>
      </div>
    {/each}
  </div>
  {/if}
</div>
