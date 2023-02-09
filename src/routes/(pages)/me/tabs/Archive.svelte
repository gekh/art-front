<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';

  let events_len = 10;
</script>

<div class="flex flex-wrap gap-8 justify-center lg:justify-start">
  {#each [...Array(events_len).keys()] as _}
    <div
      class="relative grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-[52px] max-w-[550px] bg-white"
      style="box-shadow: inset 0px 0px 21px 3px gray;"
    >
      <div class="max-w-[250px] order-2 md:order-1">
        <h2 class="mb-8 text-silvery text-[26px] font-light">Описание</h2>
        <h3 class="mb-4 text-graphite text-[20px] font-bold">Фестиваль Ералаш</h3>
        <div>
          С 9 по 11 октября в Самаре проходил отборочный тур Всероссийского конкурса юных талантов
          «Ералаш». В фестивале приняли участие более 200 детей из разных городов России. Самарскую
          область на конкурсе представили воспитанники студии «Фантазия» Дворца детского и
          юношеского творчества: - Анастасия Матюшина, - Валерия Кудинова, - Алина Хамидулина.
          Фестиваль был разделен на несколько частей. В первую очередь ребята представили свои
          визитки, в которых рассказали о себе и своей семье.
        </div>

        <div class="mt-[52px]">
          <ActionBtn>Восстановить</ActionBtn>
        </div>
      </div>

      <div class="min-w-[150px] order-1 md:order-2">
        <h2 class="mb-8 text-silvery text-[26px] font-light">Требования</h2>

        {#each [{ title: 'Дата', value: '25.06.2019' }, { title: 'Жанр', value: 'Поп' }, { title: 'Тип', value: 'Разовый' }, { title: 'Цена', value: '10 000 руб.' }] as field}
          <h3 class="mb-4 font-bold text-[20px]">{field.title}</h3>
          <p class="mb-8">{field.value}</p>
        {/each}
      </div>
      <button
        class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
        on:click={() => {
          events_len -= 1;
        }}
      >
        <img src="images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
      </button>
    </div>
  {/each}
</div>
