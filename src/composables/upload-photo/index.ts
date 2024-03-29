import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import type { GetStatusResponse } from './index.types'


export const showProgress = ref(false)

export const filePath = ref('')

export const sendImage = async (data: FormData) => {
  const router = useRouter()
  try {
    showProgress.value = true
    const res = await fetch(`${import.meta.env.VITE_API_URL}/images/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await res.json()
    const taskId = resData.task_id
    await router.push({ path: '/uploading_photo', query: { taskId: taskId } })
  } catch (error) {
    console.error('Error:', error)
  } finally {
    showProgress.value = false
  }
}

export const getStatus = async (taskId: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${taskId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data: GetStatusResponse = await res.json()
  filePath.value = data.file_path
  return data
}

export const getVideo = async () => {
  if (!filePath.value) return
  return await fetch(`${import.meta.env.VITE_API_URL}/outputs/${filePath.value}/`, {
    method: 'GET',
  })
}
