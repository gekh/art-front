<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';

  let reports_len = 3;
</script>

<div class="mb-8">
  <ActionBtn>Добавить</ActionBtn>
</div>

{#each [...Array(reports_len).keys()] as _}
<div class="relative grid grid-cols-1 lg:grid-cols-3 gap-8 py-[52px] px-5 mb-8 bg-white">
  <div>
    <h2 class="mb-8 text-silvery text-[26px] font-light">23.09.2019</h2>
    <h3 class="mb-8 text-[26px] font-bold">Певец в кафе</h3>
    <div class="text">
      Певец в кафе-баре "Айсберг", и в тот момент, когда он выходил на сцену, у него вдруг пропало
      дыхание. И так три раза подряд. В итоге он не смог спеть ни одной песни. По словам очевидцев,
      это был самый настоящий приступ астмы, который застал его врасплох. На следующий день певца
      госпитализировали в одну из московских клиник, где врачи поставили ему диагноз обрыв аорты. С
      тех пор он стал избегать публичных выступлений. О том, что Сергей Лазарев перенес операцию,
      стало известно в феврале 2010 года.
    </div>
  </div>

  <div>
    <h2 class="mb-8 text-silvery text-[26px] font-light">Фото</h2>
    <div class="flex flex-wrap gap-5 mb-[52px]">
      <div class="relative flex w-[300px] h-[300px]">
        <img src="images/samples/band.jpg" alt="protfolio" class="object-cover" />
      </div>
    </div>
  </div>

  <div>
    <h2 class="mb-8 text-silvery text-[26px] font-light">Видео</h2>

    <div class="flex flex-wrap gap-5">
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
      </div>
    </div>
  </div>
  <button
    class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky t-clr"
    on:click={() => {reports_len -= 1}}
  >
    <img src="images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
  </button>
</div>
{/each}