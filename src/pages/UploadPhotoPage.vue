<script setup lang="ts">
import { ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { sendImage, showProgress, getStatus } from '~/composables/upload-photo'
import { GetStatusResponse, ImageGenerationResponse } from '~/composables/upload-photo/index.types.ts'

const showModal = ref(false)

const inputEl = ref<HTMLInputElement | null>(null)

const showError = ref(false)

const openModal = () => (showModal.value = true)

const closeModal = () => (showModal.value = false)

let interval: ReturnType<typeof setInterval>

const pollStatus = (res?: GetStatusResponse) => {
  if (!res) return
  if (res.status === 'success') clearInterval(interval)
  if (res.status === 'failure') showError.value = true
}

const send = async (e: any) => {
  const response = await sendImage(e.target.value)
  if (!response) return
  const resImage: ImageGenerationResponse = await response.json()
  interval = setInterval(async () => {
    const res = await getStatus(resImage.task_id)
    pollStatus(res)
  }, 3000)
}
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <section class="main__download download">
        <div class="container">
          <div class="download__inner">
            <h2 class="download__title">Создание видео</h2>
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
            <button class="button button-upload-photo" @click="openModal">Загрузить фото</button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  <div v-if="showModal" class="modal" @click.self="closeModal">
    <div class="modal__window">
      <h3 class="modal__title">Требования к фото</h3>
      <div class="modal__body">
        <div class="modal__body-img">
          <img src="/img/photo_selection.jpg" alt="Выбор фотографии" />
        </div>
        <div class="modal__body-text">
          <ul class="modal__body-list">
            <li class="modal__body-item">
              <img src="/img/check.svg" alt="" />
              <p>Фото в фокусе</p>
            </li>
            <li class="modal__body-item">
              <img src="/img/check.svg" alt="" />
              <p>Хорошее освещение</p>
            </li>
            <li class="modal__body-item">
              <img src="/img/check.svg" alt="" />
              <p>Открытое лицо</p>
            </li>
          </ul>
          <form id="upload-form">
            <div class="button-upload-btn upload-btn" @click.prevent="inputEl?.click()">Загрузить</div>
            <input
              ref="inputEl"
              type="file"
              id="file-input"
              name="photo"
              accept=".jpg, .jpeg, .png"
              style="display: none"
              @change="send"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showProgress" class="progress-modal">
    <div class="progress-modal-inner">
      <h1 class="progress-modal-title">Ваше видео в процессе создания</h1>
      <span class="loader"></span>
    </div>
  </div>
</template>

<style></style>
