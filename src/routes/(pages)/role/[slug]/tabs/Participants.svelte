<script lang="ts">
  import ActionBtn from '$lib/components/ActionBtn.svelte';

  let invites = [
    {
      id: '1',
      pic: '/images/samples/woman.jpg',
      city: 'New York',
      name: 'ИП Агатова Ж. И.',
      stat: {
        stars: 32,
        comments: 513,
        views: 51235,
      },
    },
    {
      id: '2',
      pic: '/images/samples/vocalist.jpg',
      city: 'Осло',
      name: 'Вокалист Анна Кйолкоген',
      stat: {
        stars: 623,
        comments: 624,
        views: 643,
      },
    },
    {
      id: '3',
      pic: '/images/samples/tomato.jpg',
      city: 'Санкт-Петербург',
      name: 'ООО Увлекательные помидоры одиннадцатиклассницы',
      stat: {
        stars: 20,
        comments: 357,
        views: 6729,
      },
    },
    {
      id: '4',
      pic: '/images/samples/sax.jpg',
      city: 'Париж',
      name: 'Саксофонист Валера Игнатов',
      stat: {
        stars: 61,
        comments: 236,
        views: 462,
      },
    },
    {
      id: '5',
      pic: '/images/samples/band.jpg',
      city: 'Токио',
      name: 'Бороды и ветви',
      stat: {
        stars: 26,
        comments: 2362,
        views: 230958,
      },
    },
  ];

  const removePerson = (item) => {
    invites = invites.filter((el) => el.id != item.id);
  };
</script>

<div class="mb-[52px]">
  <ActionBtn>
    Добавить
  </ActionBtn>
</div>

<div class="flex flex-col gap-8 mb-8">
  {#each invites as i (i.id)}
    <div class="relative flex p-5 bg-white">
      <div class="flex-[0_0_84px] flex w-[84px] h-[84px]">
        <img src={i.pic} alt="avatar" class="w-full h-full object-cover rounded-full" />
      </div>
      <div class="ml-5">
        <div class="mb-5 text-silvery">{i.city}</div>
        <h2
          class="block mb-5 text-[20px] leading-6 font-bold break-all overflow-hidden"
        >
          {i.name}
        </h2>
        <div class="flex font-bold">
          <div class="w-[50px] flex items-center">
            <img src="/images/icons/star.svg" alt="stars" class="w-3 h-3 mr-2" />
            {i.stat.stars}
          </div>
          <div class="w-[50px] flex items-center">
            <img src="/images/icons/text-bubble.svg" alt="comments" class="w-3 h-3 mr-2" />
            {i.stat.comments}
          </div>
          <div class="w-[50px] flex items-center">
            <img src="/images/icons/eye.svg" alt="views" class="w-3 h-3 mr-2" />
            {i.stat.views}
          </div>
        </div>
      </div>

      <button
        class="absolute right-0 top-0 flex items-center justify-center w-[52px] h-[52px]
             bg-biruza hover:bg-pinky t-color"
        on:click={() => removePerson(i)}
      >
        <img src="/images/icons/plus-white.svg" alt="delete" class="w-6 h-6 rotate-45" />
      </button>
    </div>
  {/each}
</div>
