<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { sendImage, showProgress, getStatus, queue } from '~/composables/upload-photo'
import { useRoute, useRouter } from 'vue-router'

const showModal = ref(false)

const inputEl = ref<HTMLInputElement>()

const openModal = (): void => {
  showModal.value = true
}

const closeModal = (): void => {
  showModal.value = false
}

let interval: ReturnType<typeof setInterval>

const router = useRouter()
const route = useRoute()

async function send (e: Event): Promise<void> {
  const form = new FormData()
  const target = e.target as HTMLInputElement
  if (!target.files?.length) return
  form.append('file', target.files[0])
  await sendImage(form, router)
  await starPolling()
}

async function pollStatus (taskId: string): Promise<void> {
  await getStatus(taskId, router).then(async (res) => {
    if (typeof res === 'undefined') throw new Error('Error')
    if (res.status === 'failure') throw new Error('Error')
    if (res.status === 'success') {
      clearInterval(interval)
      showProgress.value = false
      await router.push({
        path: '/video_ready',
        query: { fileId: res.file_path }
      })
    }
  }).catch(() => {
    throw new Error('Error')
  })
}

async function starPolling (): Promise<void> {
  const taskId = route.query.taskId
  if (!taskId) return
  showProgress.value = true
  await pollStatus(taskId.toString())
  let retires = 0
  interval = setInterval(async () => {
    try {
      await pollStatus(taskId.toString())
    } catch (e) {
      retires += 1
      if (retires > 5) {
        clearInterval(interval)
        showProgress.value = false
        await router.push({ path: '/uploading_photo', query: {} })
      }
    }
  }, 3000)
}
onMounted(async () => {
  await starPolling()
})

onUnmounted(() => {
  clearInterval(interval)
  showProgress.value = false
})

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
      <div class="progress-queue">{{ queue }}</div>
      <span class="loader"></span>
    </div>
  </div>
</template>

<style></style>
