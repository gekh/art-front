<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';
  let filtered = [];
  let invites = [
    {
      pic: 'images/samples/woman.jpg',
      city: 'New York',
      name: 'ИП Агатова Ж. И.',
      stat: {
        stars: 32,
        comments: 513,
        views: 51235,
      },
    },
    {
      pic: 'images/samples/vocalist.jpg',
      city: 'Осло',
      name: 'Вокалист Анна Кйолкоген',
      stat: {
        stars: 623,
        comments: 624,
        views: 643,
      },
    },
    {
      pic: 'images/samples/tomato.jpg',
      city: 'Санкт-Петербург',
      name: 'ООО Увлекательные помидоры одиннадцатиклассницы',
      stat: {
        stars: 20,
        comments: 357,
        views: 6729,
      },
    },
    {
      pic: 'images/samples/sax.jpg',
      city: 'Париж',
      name: 'Саксофонист Валера Игнатов',
      stat: {
        stars: 61,
        comments: 236,
        views: 462,
      },
    },
    {
      pic: 'images/samples/band.jpg',
      city: 'Токио',
      name: 'Бороды и ветви',
      stat: {
        stars: 26,
        comments: 2362,
        views: 230958,
      },
    },
  ];
</script>

<div class="mb-[52px]">
  <ActionBtn>Собрать новое</ActionBtn>
</div>

<h2 class="ml-5 mb-8 text-silvery text-[26px] font-light">Фестиваль Ералаш</h2>

<div class="flex flex-col gap-8">
  {#each invites as i}
    <div class="relative flex p-5 bg-white">
      <div class="flex-[0_0_84px] flex w-[84px] h-[84px]">
        <img src={i.pic} alt="avatar" class="w-full h-full object-cover rounded-full" />
      </div>
      <div class="ml-5">
        <div class="mb-5 text-silvery">{i.city}</div>
        <h2
          class="block mb-5 text-[20px] leading-6 text-graphite font-bold break-all overflow-hidden"
        >
          {i.name}
        </h2>
        <div class="flex font-bold text-graphite">
          <div class="w-[50px] flex items-center">
            <img src="images/icons/star.svg" alt="stars" class="w-3 h-3 mr-2" />
            {i.stat.stars}
          </div>
          <div class="w-[50px] flex items-center">
            <img src="images/icons/text-bubble.svg" alt="comments" class="w-3 h-3 mr-2" />
            {i.stat.comments}
          </div>
          <div class="w-[50px] flex items-center">
            <img src="images/icons/eye.svg" alt="views" class="w-3 h-3 mr-2" />
            {i.stat.views}
          </div>
        </div>
      </div>

      <button
        class="absolute right-[52px] top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
      >
        <img src="images/icons/pencil.svg" alt="edit" class="w-3 h-3" />
      </button>

      <button
        class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px] bg-biruza hover:bg-pinky trans-color"
        on:click={() => {filtered.push(i)}}
      >
        <img src="images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
      </button>
    </div>
  {/each}
</div>

<div class="flex mb-[52px]">
  <div class="mr-5">
    <ActionBtn>Добавить</ActionBtn>
  </div>
  <div>
    <ActionBtn>Подать заявку</ActionBtn>
  </div>
</div>
