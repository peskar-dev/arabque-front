<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import { getVideo } from '~/composables/upload-photo'

const file = ref(null)

onMounted(async () => {
  file.value = await getVideo()
})

</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <section class="main__ready ready">
        <div class="container">
          <div class="ready__inner">
            <h2 class="ready__title">Твое видео готово!</h2>
            <p class="ready__text">
              Ты выглядишь просто неотразимо! Настоящая принцесса из восточной сказки!
              <br />
              Скорее поделись им в социальных сетях и принимай участие в нашем конкурсе, чтобы выиграть годовой запас туши Cabaret
              Noire Arabique! Ведь с ней ресницы чернее арабской ночи..
            </p>
            <button class="button button-viewing">Посмотреть Видео</button>
            <button class="button button-viewing" onclick="location.href='/download_photo/{{ dirkey }}/'">Скачать видео</button>
            <a class="button__contest" href="{% url 'competition' %}">Участвовать в конкурсе</a>
            <h3 class="ready__title-phone">Как сохранить видео на iPhone</h3>
            <div class="instruction">
              <img src="/img/inst-1.png" alt="" />
              <img src="/img/inst-2.png" alt="" />
              <img src="/img/inst-3.png" alt="" />
              <img src="/img/inst-4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  <div class="modal">
    <div class="modal__window-viewing">
      <div class="modal__viewing-img">
        <video v-if="file" controls class="modal__video">
          <source :src="file" type="video/mp4" />
        </video>
        <div class="modal__cancel">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L10 10M1 10L10 1" stroke="black" />
          </svg>
        </div>
      </div>
      <a class="button button-download" :href="`https://arabiquenoire.com/ready/${file}`">Скачать Видео</a>
      <a class="button__contest" href="{% url 'competition' %}">Участвовать в конкурсе</a>
    </div>
  </div>
</template>

<style></style>
