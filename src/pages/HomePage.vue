<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <section class="main__hero hero">
        <div class="container">
          <div class="hero__inner">
            <h1 class="hero__title">
              <img src="/img/logo_Cabaret.svg" alt="" />
            </h1>
            <p class="hero__text">
              Погрузись в волшебный мир арабской сказки. Укради сердце главного героя с помощью новой туши Cabaret Noir Arabique
              oт Vivienne Sabó!
            </p>
            <a class="button" href="/uploading_photo"> Создать Видео </a>
            <div class="page">
              <img src="/img/page.svg" alt="Стрелка вниз" />
            </div>
          </div>
          <div class="hero__video">
            <video playsinline autoplay muted loop src="/videos/video.mp4"></video>
          </div>
        </div>
      </section>

      <section id="instr" class="main__instructions instructions">
        <div class="container">
          <div class="instructions__inner">
            <h4 class="instructions__title">Как создать видео?</h4>
            <div class="image-wrapper">
              <div class="download__img">
                <img src="/img/download-image-couple.jpg" alt="" class="download__image" />
              </div>
              <div class="woman">
                <div class="woman-img">
                  <img src="/img/download-image-woman.jpg" alt="" class="download__image-woman" />
                </div>
              </div>
              <div class="arrow">
                <img src="/img/arrow-photo.svg" alt="" class="download__arrow" />
              </div>
            </div>
            <ul class="instructions__list">
              <li class="instructions__item">
                <span>01</span>
                Найди в телефоне свое лучшее фото или просто сделай селфи. Важно, чтобы твое лицо было хорошо освещено и
                находилось в центре изображения.
              </li>
              <li class="instructions__item">
                <span>02</span>
                Загрузи фото и немного подожди, мы создаем видео, в котором у тебя главная роль!
              </li>
              <li class="instructions__item">
                <span>03</span>
                После того как видео будет готово, ты можешь сохранить его на свой телефон и отправить друзьям, или же поделиться
                им в социальных сетях и принять участие в нашем конкурсе!
              </li>
            </ul>
            <a class="button" href="/uploading_photo"> Создать Видео </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style>

</style>
