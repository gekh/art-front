<script lang="ts">
  import Login from './Login.svelte';
  import Registration from './Registration.svelte';

  let show_registration = false;
  function showRegistration(event: Event) {
    event.preventDefault();
    disableScroll();
    show_registration = true;
  }

  function hideRegistration(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    enableScroll();
    show_registration = false;
  }

  let show_login = false;
  function showLogin(event: Event) {
    event.preventDefault();
    disableScroll();
    show_login = true;
  }

  function hideLogin(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    enableScroll();
    show_login = false;
  }

  let scrollY: number;
  let prevBodyPosition: string;
  let prevBodyOverflow: string;
  let prevBodyWidth: string;

  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.style.paddingRight = '15px';
  };

  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || '';
    document.body.style.top = '';
    document.body.style.overflow = prevBodyOverflow || '';
    document.body.style.width = prevBodyWidth || '';
    document.body.style.paddingRight = '';
    window.scrollTo(0, scrollY);
  };
</script>

<svelte:head>
  <title>Art Compas</title>
  <meta content="Art Compass" property="og:title" />
  <meta content="Art Compass" property="twitter:title" />
  <link rel="stylesheet" type="text/css" href="/main/css/style.css?ver=1" />

  <script
    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5c7037d68128cb293324f104"
    type="text/javascript"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
  <script defer src="/main/js/script.js?2" type="text/javascript"></script>
</svelte:head>

{#if show_registration}
  <Registration onClose={hideRegistration} />
{/if}

{#if show_login}
  <Login onClose={hideLogin} />
{/if}

<div
  data-collapse="medium"
  data-animation="over-right"
  data-duration="400"
  data-w-id="88332f86-1db5-e09e-35f2-fa2749902c3c"
  role="banner"
  class="navbar-2 w-nav"
>
  <a href="#top" class="brand-2 w-nav-brand"
    ><img
      src="/main/images/5c80effd8d66f45b69c58056_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20101.svg"
      loading="lazy"
      alt=""
      class="image-38"
    /></a
  >
  <div class="menu-button-2 w-nav-button">
    <div
      style="-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
      class="div-block-401"
    />
    <div style="opacity:1" class="div-block-403" />
    <div
      style="-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
      class="div-block-406"
    />
  </div>
  <div style="opacity:0" class="div-block-404">
    <div class="div-block-402">
      <a href="#top" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">Главная</div>
        <div class="div-block-373" /></a
      ><a href="#how-to-start" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">Как начать</div>
        <div class="div-block-373" /></a
      ><a href="#for-whom" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">Кому подойдёт</div>
        <div class="div-block-373" /></a
      ><a href="#for-cutomer" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">Для заказчика</div>
        <div class="div-block-373" /></a
      ><a href="#for-artist" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">Для исполнителя</div>
        <div class="div-block-373" /></a
      ><a href="#benefits" class="link-block-303 w-inline-block w-nav-button"
        ><div class="text-block-17">В чем польза</div>
        <div class="div-block-373" /></a
      >
    </div>
  </div>
</div>
<div class="div-block-405">
  <a href="#top" class="brand-2 w-nav-brand"
    ><img
      src="/main/images/5c80effd8d66f45b69c58056_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20101.svg"
      loading="lazy"
      alt=""
      class="image-38"
    /></a
  >
  <div class="div-block-404">
    <div class="div-block-402">
      <a href="#top" class="link-block-303 w-inline-block"
        ><div class="text-block-17">Главная</div>
        <div class="div-block-373" /></a
      ><a href="#how-to-start" class="link-block-303 w-inline-block"
        ><div class="text-block-17">Как начать</div>
        <div class="div-block-373" /></a
      ><a href="#for-whom" class="link-block-303 w-inline-block"
        ><div class="text-block-17">Кому подойдёт</div>
        <div class="div-block-373" /></a
      ><a href="#for-cutomer" class="link-block-303 w-inline-block"
        ><div class="text-block-17">Для заказчика</div>
        <div class="div-block-373" /></a
      ><a href="#for-artist" class="link-block-303 w-inline-block"
        ><div class="text-block-17">Для исполнителя</div>
        <div class="div-block-373" /></a
      ><a href="#benefits" class="link-block-303 w-inline-block"
        ><div class="text-block-17">В чем польза</div>
        <div class="div-block-373" /></a
      >
    </div>
  </div>
</div>
<div class="div-block-395">
  <div data-w-id="795e1459-dd3f-2b8a-39f0-e7c475e307de" class="div-block-396" />
  <div data-w-id="3e383fdb-72a9-a279-2496-9eb076760038" class="div-block-397" />
</div>
<div class="div-block-322" />
<div class="div-block-325" />
<div data-w-id="8dab770c-e9a1-4ff4-f4bd-946bbf0e093a" style="opacity:0" class="section-25">
  <img
    src="/main/images/5fa28c4247e177156b6af2df_ArtCompas_Slow20(1).gif"
    loading="lazy"
    alt=""
    class="image-38-copy"
  />
</div>
<div id="top" data-w-id="6b99ee31-88d8-092e-8ee5-e4d40760ddf7" style="opacity:1" class="section-16">
  <div class="div-block-321">
    <div class="div-block-366">
      <div class="div-block-339">
        <div class="div-block-400">
          <img
            src="/main/images/5f9fdec7da4102db5693f079_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C2066.svg"
            loading="lazy"
            alt=""
            class="image-38-copy"
          />
        </div>
        <h1 class="heading-6">Art<span class="text-span">compas</span></h1>
      </div>
      <div class="div-block-360">
        <div class="div-block-361">
          <div class="div-block-333">
            <div class="div-block-338">
              <img
                src="/main/images/5f96b5d2fdf3fd8276656586_21.jpg"
                loading="lazy"
                alt=""
                class="image-39"
              />
              <div class="div-block-337" />
            </div>
            <div class="div-block-334">
              <p class="paragraph-3">Основатель</p>
              <p class="paragraph-2">Тимур Абитов</p>
            </div>
          </div>
          <div class="div-block-327">
            <p class="paragraph-2">
              Наша платформа помогает соединить исполнителей и заказчиков, для создания мероприятий
              в любом городе России
            </p>
          </div>
        </div>
        <div class="div-block-336">
          <div class="cherta_3" />
          <a
            data-w-id="97effa1b-e190-0439-45e1-6ea1e7f2d4f1"
            href="#reg"
            class="button-1 w-button"
            on:click={showRegistration}>Регистрация</a
          >
          <span style="padding: 0 5px" />
          <a
            data-w-id="97effa1b-e190-0439-45e1-6ea1e7f2d4f1"
            href="#reg"
            class="button-1 w-button"
            on:click={showLogin}>Вход</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="div-block-364">
    <div class="div-block-391">
      <div class="div-block-365">
        <div class="div-block-332">
          <div class="cherta_3" />
          <h3 class="heading-9">01</h3>
        </div>
        <p class="paragraph-2">Более 400 артистов нашли работу!</p>
      </div>
      <div class="div-block-365">
        <div class="div-block-332">
          <div class="cherta_3" />
          <h3 class="heading-9">02</h3>
        </div>
        <p class="paragraph-2">Только положительные отзывы!</p>
      </div>
      <div class="div-block-365 _2">
        <div class="div-block-332">
          <div class="cherta_3" />
          <h3 class="heading-9">03</h3>
        </div>
        <p class="paragraph-2">Свыше 20 новых мероприятий в день!</p>
      </div>
    </div>
  </div>
  <div class="div-block-372" />
</div>
<div id="how-to-start" data-w-id="aebc7c43-140d-1979-ed26-1c655c177914" class="section-20">
  <div class="div-block-341">
    <div class="div-block-311">
      <div class="div-block-340">
        <h2 class="heading-7">Как начать</h2>
      </div>
      <div data-w-id="aebc7c43-140d-1979-ed26-1c655c17791a" class="div-block-319">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Регистрация</h3>
        </div>
        <p class="paragraph-2">
          Для начала нужно пройти регистрацию в которой вы выберите ваш тип и юр. позицию и после
          всех заполненных полей вы дойдете до договора, который нужно будет подписать и выслать на
          почту бухгалтеру, после ваш аккаунт станет активным!
        </p>
      </div>
      <div data-w-id="1f349d74-e0d7-cbe1-ae44-9afa1bc969d2" class="div-block-319 _2">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Остались вопросы?</h3>
        </div>
        <p class="paragraph-2">
          При возникновении вопросов вы всегда сможете связаться с нашим оператором
        </p>
        <div class="div-block-336">
          <div class="cherta_3" />
          <a href="#link" class="link-block-302 w-inline-block"
            ><img
              src="/main/images/5f5a413c0f92c3e22f5f0084_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20166.png"
              loading="lazy"
              alt=""
              class="image-47"
            /></a
          ><a href="#link" class="link-block-302 w-inline-block"
            ><img
              src="/main/images/5f5a413d1de0fe16b0590601_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20146.png"
              loading="lazy"
              alt=""
              class="image-47"
            /></a
          ><a href="#link" class="link-block-302 w-inline-block"
            ><img
              src="/main/images/5f5a413c984fd1db3a265aba_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20236.png"
              loading="lazy"
              alt=""
              class="image-47"
            /></a
          ><a href="#link" class="link-block-302 w-inline-block"
            ><img
              src="/main/images/5f5a413d5ca26c4f33126edb_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20246.png"
              loading="lazy"
              alt=""
              class="image-47"
            /></a
          ><a href="#link" class="link-block-302 w-inline-block"
            ><img
              src="/main/images/5f5a413d24bfc1501c1123ae_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20256.png"
              loading="lazy"
              alt=""
              class="image-47"
            /></a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="div-block-342">
    <img
      src="/main/images/5f54a5dbf5fe282127131d10_D091D0B5D0B7-D0B8D0BCD0B5D0BDD0B8-1.jpg"
      loading="lazy"
      alt=""
      class="image-42"
    />
  </div>
  <div class="div-block-393" />
</div>
<div id="for-whom" data-w-id="7d9ce869-5787-c2a3-aa22-47b4e6fe6a18" class="section-19">
  <div class="div-block-344">
    <div class="div-block-349">
      <div class="div-block-326">
        <div class="div-block-340">
          <h2 class="heading-7">Кому подойдёт</h2>
        </div>
        <div data-w-id="84e384d7-f34b-70a1-da8f-ab06aa0b5013" class="div-block-319">
          <div class="div-block-343">
            <div class="cherta_3" />
            <h3 class="heading-9">Исполнители</h3>
          </div>
          <p class="paragraph-2">
            Вы за короткое время сможете найти под себя мероприятия, созданные заказчиками
          </p>
        </div>
        <div data-w-id="87919b7c-c4fd-8d88-2f56-5b8cfc452e33" class="div-block-319">
          <div class="div-block-343">
            <div class="cherta_3" />
            <h3 class="heading-9">Заказчикам</h3>
          </div>
          <p class="paragraph-2">
            Вы легко создадите мероприятия и сможете быстро найти исполнителей для него
          </p>
        </div>
        <div data-w-id="f84d1de2-73b9-c29a-098c-ff2738f9840a" class="div-block-319 _2">
          <div class="div-block-343">
            <div class="cherta_3" />
            <h3 class="heading-9">Преподавателям</h3>
          </div>
          <p class="paragraph-2">Вы сможете размещать свои уроки и набирать к себе учеников</p>
        </div>
      </div>
    </div>
  </div>
  <div class="div-block-345">
    <div class="div-block-346" />
    <div class="div-block-347" />
    <div class="div-block-348" />
  </div>
</div>
<div id="for-cutomer" data-w-id="82262af8-b8c2-dfc6-3d9e-eccff3550a5d" class="section-17">
  <div class="div-block-374">
    <div class="div-block-385">
      <div class="div-block-340">
        <h2 class="heading-7">Как это работает для заказчика</h2>
      </div>
      <div class="div-block-316">
        <div data-w-id="c39edb24-f87e-97f8-eff0-2e327327f078" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">01</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Создание мероприятия</h3>
              </div>
              <p class="paragraph-2">
                Для создания мероприятия, переходим в  анкету во вкладку - "Мероприятия" и в самом
                начале, жмем на - "Добавить"
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033e9dd6b231fd566e9b_D0A1D0BAD180D0B8D0BDD18B.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033e9dd6b231fd566e9b_D0A1D0BAD180D0B8D0BDD18B-p-500.jpeg 500w, /main/images/5f5e033e9dd6b231fd566e9b_D0A1D0BAD180D0B8D0BDD18B-p-1080.jpeg 1080w, /main/images/5f5e033e9dd6b231fd566e9b_D0A1D0BAD180D0B8D0BDD18B-p-1600.jpeg 1600w, /main/images/5f5e033e9dd6b231fd566e9b_D0A1D0BAD180D0B8D0BDD18B.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="045ad5d2-744e-cf5b-ff40-a2686a6a97d4" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">02</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Заполнение формы</h3>
              </div>
              <p class="paragraph-2">В открывшимся окне Заполняем все поля и жмем - "Сохранить"</p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033e64debe752e5ab8a4_D0A1D0BAD180D0B8D0BDD18B2.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033e64debe752e5ab8a4_D0A1D0BAD180D0B8D0BDD18B2-p-500.jpeg 500w, /main/images/5f5e033e64debe752e5ab8a4_D0A1D0BAD180D0B8D0BDD18B2-p-1080.jpeg 1080w, /main/images/5f5e033e64debe752e5ab8a4_D0A1D0BAD180D0B8D0BDD18B2-p-1600.jpeg 1600w, /main/images/5f5e033e64debe752e5ab8a4_D0A1D0BAD180D0B8D0BDD18B2.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="4b7c6325-2c6a-94c3-6b1f-fc3f11b18bb4" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">03</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Как опубликовать</h3>
              </div>
              <p class="paragraph-2">
                После, новое мероприятие отображается первым и для публикации жмем - "Опубликовать"
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033e7dc2124bfd3b38b8_D0A1D0BAD180D0B8D0BDD18B3.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033e7dc2124bfd3b38b8_D0A1D0BAD180D0B8D0BDD18B3-p-500.jpeg 500w, /main/images/5f5e033e7dc2124bfd3b38b8_D0A1D0BAD180D0B8D0BDD18B3-p-1080.jpeg 1080w, /main/images/5f5e033e7dc2124bfd3b38b8_D0A1D0BAD180D0B8D0BDD18B3-p-1600.jpeg 1600w, /main/images/5f5e033e7dc2124bfd3b38b8_D0A1D0BAD180D0B8D0BDD18B3.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="c897c0d5-20c9-a50c-de44-85de84b83c59" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">04</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Общий каталог</h3>
              </div>
              <p class="paragraph-2">
                Потом переходим в каталог - "Мероприятия" в котором видим свое созданное мероприятие
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-500.jpeg 500w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-1080.jpeg 1080w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-1600.jpeg 1600w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="b32093f9-40fb-cd23-0242-17c29f965d35" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">05</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Набор исполнителей</h3>
              </div>
              <p class="paragraph-2">
                Для того, чтоб добавить исполнителей к себе, переходим в каталог - "Исполнители и
                группы" и жмем на - "+" в котором открывается окна в котором выбираем нужное
                мероприятие
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033f30956a9111d4a79c_D0A1D0BAD180D0B8D0BDD18B5.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033f30956a9111d4a79c_D0A1D0BAD180D0B8D0BDD18B5-p-500.jpeg 500w, /main/images/5f5e033f30956a9111d4a79c_D0A1D0BAD180D0B8D0BDD18B5-p-1080.jpeg 1080w, /main/images/5f5e033f30956a9111d4a79c_D0A1D0BAD180D0B8D0BDD18B5-p-1600.jpeg 1600w, /main/images/5f5e033f30956a9111d4a79c_D0A1D0BAD180D0B8D0BDD18B5.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="4b3cf13c-6be7-941e-42dd-f56f43c59fe2" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">06</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Продолжение, после заявки</h3>
              </div>
              <p class="paragraph-2">
                Для того, чтобы продолжить беседу с новый исполнителем, переходим в анкету во
                вкладку - "Биржа" и для общение открываем чат с ним на нажатие на кнопку - "+" в
                котором задаем вопросы и при общем
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-500.jpeg 500w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-1080.jpeg 1080w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-1600.jpeg 1600w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="288bf9b2-3649-14a0-c53f-6b178e19172a" class="div-block-376">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">07</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Чат с исполнителем</h3>
              </div>
              <p class="paragraph-2">
                Вы обсуждаете с исполнителем все условности и при обоюдном согласии и нужном
                количестве исполнителей жмем - 'Подать заявку" и оно отправляется на модерация
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e0a21bb8ad041e476d1fd_D0A1D0BAD180D0B8D0BDD18B8.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e0a21bb8ad041e476d1fd_D0A1D0BAD180D0B8D0BDD18B8-p-500.jpeg 500w, /main/images/5f5e0a21bb8ad041e476d1fd_D0A1D0BAD180D0B8D0BDD18B8-p-1080.jpeg 1080w, /main/images/5f5e0a21bb8ad041e476d1fd_D0A1D0BAD180D0B8D0BDD18B8-p-1600.jpeg 1600w, /main/images/5f5e0a21bb8ad041e476d1fd_D0A1D0BAD180D0B8D0BDD18B8.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="8313ff62-f3ea-3b2b-e0bf-56029504a738" class="div-block-376 _2">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">08</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Отзывы</h3>
              </div>
              <p class="paragraph-2">
                Каждый заказчик может оставить свои отзывы о выступлении артистов в - "Отзывах",
                также он может написать отзывы обо всех организованных мероприятиях у себя в анкете.
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9-p-500.jpeg 500w, /main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9-p-1600.jpeg 1600w, /main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="div-block-388" />
</div>
<div id="for-artist" data-w-id="2bd93e98-8a89-b3f6-8b02-1350d713367b" class="section-24">
  <div class="div-block-375">
    <div class="div-block-386">
      <div class="div-block-340">
        <h2 class="heading-7">Как это работает для исполнителя</h2>
      </div>
      <div class="div-block-314">
        <div data-w-id="2bd93e98-8a89-b3f6-8b02-1350d7133681" class="div-block-387">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">01</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Создание анкеты</h3>
              </div>
              <p class="paragraph-2">
                После регистрации вы сможете полностью заполнить свою анкету
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e1d9fbd70844e3ac05db3_D0A1D0BAD180D0B8D0BDD18B10.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e1d9fbd70844e3ac05db3_D0A1D0BAD180D0B8D0BDD18B10-p-500.jpeg 500w, /main/images/5f5e1d9fbd70844e3ac05db3_D0A1D0BAD180D0B8D0BDD18B10-p-1600.jpeg 1600w, /main/images/5f5e1d9fbd70844e3ac05db3_D0A1D0BAD180D0B8D0BDD18B10.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="2bd93e98-8a89-b3f6-8b02-1350d713368e" class="div-block-387">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">02</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Поиск мероприятий</h3>
              </div>
              <p class="paragraph-2">
                Перейдя в каталог заказчиков вы можете в понравившимся, оставить заявку и ждать
                отклика от заказчика
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-500.jpeg 500w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-1080.jpeg 1080w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4-p-1600.jpeg 1600w, /main/images/5f5e033ef3638c1d6cea8e68_D0A1D0BAD180D0B8D0BDD18B4.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="2bd93e98-8a89-b3f6-8b02-1350d713369b" class="div-block-387">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">03</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Перед началом мероприятия</h3>
              </div>
              <p class="paragraph-2">
                Вы обсуждаете с заказчиком все условности и он при обоюдном согласии, подает заявку
                на создание общего договора
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-500.jpeg 500w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-1080.jpeg 1080w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7-p-1600.jpeg 1600w, /main/images/5f5e0a2164debedbc55ac6bd_D0A1D0BAD180D0B8D0BDD18B7.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
        <div data-w-id="2bd93e98-8a89-b3f6-8b02-1350d71336a8" class="div-block-387 _3">
          <div class="div-block-377">
            <div class="div-block-378">
              <h3 class="heading-7">04</h3>
            </div>
            <div class="div-block-320">
              <div class="div-block-343">
                <div class="cherta_3" />
                <h3 class="heading-9">Отзывы</h3>
              </div>
              <p class="paragraph-2">
                Каждый исполнитель может перейти в раздел - "Отзывы" к заказчику и оставить о нем
                отзыв
              </p>
            </div>
          </div>
          <img
            src="/main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9.jpg"
            loading="lazy"
            sizes="100vw"
            srcset="/main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9-p-500.jpeg 500w, /main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9-p-1600.jpeg 1600w, /main/images/5f5e0a216ec9083f964f2376_D0A1D0BAD180D0B8D0BDD18B9.jpg 1896w"
            alt=""
            class="image-49"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="div-block-389" />
</div>
<div id="6" data-w-id="67ef834c-7477-e13d-ed08-195c872c38a3" class="section-22">
  <div class="div-block-390">
    <div class="div-block-319 _2">
      <div class="div-block-343">
        <div class="cherta_3" />
        <h3 class="heading-9">Остались вопросы?</h3>
      </div>
      <p class="paragraph-2">
        При возникновении вопросов вы всегда сможете связаться с нашим оператором
      </p>
      <div class="div-block-336">
        <div class="cherta_3" />
        <a href="#link" class="link-block-302 w-inline-block"
          ><img
            src="/main/images/5f5a413c0f92c3e22f5f0084_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20166.png"
            loading="lazy"
            alt=""
            class="image-47"
          /></a
        ><a href="#link" class="link-block-302 w-inline-block"
          ><img
            src="/main/images/5f5a413d1de0fe16b0590601_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20146.png"
            loading="lazy"
            alt=""
            class="image-47"
          /></a
        ><a href="#link" class="link-block-302 w-inline-block"
          ><img
            src="/main/images/5f5a413c984fd1db3a265aba_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20236.png"
            loading="lazy"
            alt=""
            class="image-47"
          /></a
        ><a href="#link" class="link-block-302 w-inline-block"
          ><img
            src="/main/images/5f5a413d5ca26c4f33126edb_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20246.png"
            loading="lazy"
            alt=""
            class="image-47"
          /></a
        ><a href="#link" class="link-block-302 w-inline-block"
          ><img
            src="/main/images/5f5a413d24bfc1501c1123ae_D09CD0BED0BDD182D0B0D0B6D0BDD0B0D18F20D0BED0B1D0BBD0B0D181D182D18C20256.png"
            loading="lazy"
            alt=""
            class="image-47"
          /></a
        >
      </div>
    </div>
  </div>
</div>
<div id="benefits" data-w-id="811d5e79-2a5d-27d1-d97c-8540bb2ec6f0" class="section-21">
  <div class="div-block-379">
    <div class="div-block-329">
      <div class="div-block-340">
        <h2 class="heading-7">В чем польза</h2>
      </div>
      <div data-w-id="cf716c8a-28d4-016b-c6e2-2598d9048418" class="div-block-319">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Налоги</h3>
        </div>
        <p class="paragraph-2">
          Мы используем официальные договоры в своих делах и обеспечиваем налоговую прозрачность
        </p>
      </div>
      <div data-w-id="cf716c8a-28d4-016b-c6e2-2598d904841f" class="div-block-319">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Время</h3>
        </div>
        <p class="paragraph-2">
          Мгновенный поиск артистов и мероприятий для осуществления творческой деятельности и
          реализации культурных событий.
        </p>
      </div>
      <div data-w-id="cf716c8a-28d4-016b-c6e2-2598d9048426" class="div-block-319">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Прибыль</h3>
        </div>
        <p class="paragraph-2">
          Вы творческий человек и теперь с помощью нашего сервиса можете легко конвертировать свой
          потенциал в денежный эквивалент.Об организации документо-оборота  позаботимся мы.
        </p>
      </div>
      <div data-w-id="a868bafc-9ac9-45f0-75b5-9c3967cca6cc" class="div-block-319 _2">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Помощь открытие ИП</h3>
        </div>
        <p class="paragraph-2">
          Мы помогаем открыть ИП с минимальными затратами и берем его полное сопровождение
        </p>
      </div>
    </div>
  </div>
  <div class="div-block-380">
    <div class="div-block-381" />
    <div class="div-block-382" />
  </div>
</div>
<div id="8" data-w-id="09555152-9ceb-a062-d06c-054eeac6cce6" class="section-18">
  <div class="div-block-330">
    <div class="div-block-340">
      <h2 class="heading-7">Мы ждем тебя!</h2>
    </div>
    <div class="div-block-392">
      <div class="div-block-319 _2">
        <div class="div-block-343">
          <div class="cherta_3" />
          <h3 class="heading-9">Регистрация</h3>
        </div>
        <p class="paragraph-2">
          При новой регистрации мы каждому начисляем 100 очков бонусов, которые он может потратить
          как угодно внутри платформы
        </p>
      </div>
      <div class="div-block-336">
        <div class="cherta_3" />
        <a
          data-w-id="0be8da58-62f5-d28a-cb8d-d0e4ec741073"
          href="#reg"
          class="button-1 w-button"
          on:click={showRegistration}>Регистрация</a
        >
      </div>
    </div>
  </div>
  <div class="div-block-394" />
</div>
