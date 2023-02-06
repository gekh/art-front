<script lang="ts">
  import ActionBtn from '../../../../components/ActionBtn.svelte';

  let reviews = [
    {
      pic: 'images/samples/woman.jpg',
      city: 'New York',
      name: 'ИП Агатова Ж. И.',
      stat: {
        stars: 32,
        comments: 513,
        views: 51235,
      },
      text: 'Супер. Играл талантилво. Все вовремя.',
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
      text: 'Участвовал на рептициях с нами. Помога подготовить новую программу. Класс.',
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
      text: '– Если так, то нам придется уступить ему дорогу. Они еще не успели отойти от костра, как из темноты донесся голос: – Эй, ребята! – Это был Эшкрофт. – Слыхали? – Что? – спросил Уэйтс. – Я слышал, что сюда идет парень из полиции. – А где он? – Да вон он. Я вижу его. Уэйтс посмотрел в ту сторону, куда указывал Эшкрофт, и увидел на фоне освещенного костра силуэт человека. Он шел к ним среди деревьев. – Черт, – пробормотал Уэйтс и, схватив барабанную палочку, заспешил к костру.',
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
      text: 'норм рекомендую',
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
      text: '))))',
    },
  ];
</script>

<div class="flex flex-wrap gap-5 items-center mb-8">
  <ActionBtn>Написать отзыв</ActionBtn>
  <div class="flex items-center">
    <div class="text-silvery">Сортировать:</div>
    <select name="sort" class="ml-2 text-silvery bg-transparent">
      <option value="asc">по возрастанию</option>
      <option value="desc">по убыванию</option>
    </select>
  </div>
</div>

<div class="flex gap-4 flex-wrap justify-center md:justify-start">
  {#each reviews as r}
    <div class="relative px-5 py-10 w-[320px] bg-white">
      <div class="flex mb-[52px]">
        <div class="flex-[0_0_84px] flex w-[84px] h-[84px]">
          <img src={r.pic} alt="avatar" class="w-full h-full object-cover rounded-full" />
        </div>
        <div class="ml-5">
          <div class="mb-5 text-silvery">{r.city}</div>
          <h2
            class="block min-h-[48px] mb-5 text-[20px] leading-6 text-graphite font-bold break-all overflow-hidden"
          >
            {r.name}
          </h2>
          <div class="flex font-bold text-graphite">
            <div class="w-[50px] flex items-center">
              <img src="images/icons/star.svg" alt="stars" class="w-3 h-3 mr-2" />
              {r.stat.stars}
            </div>
            <div class="w-[50px] flex items-center">
              <img src="images/icons/text-bubble.svg" alt="comments" class="w-3 h-3 mr-2" />
              {r.stat.comments}
            </div>
            <div class="w-[50px] flex items-center">
              <img src="images/icons/eye.svg" alt="views" class="w-3 h-3 mr-2" />
              {r.stat.views}
            </div>
          </div>
        </div>
      </div>

      <p class="">{r.text}</p>
    </div>
  {/each}
</div>
