import { ref } from 'vue'
import { type Router } from 'vue-router'
import { type GetStatusResponse, type ImageGenerationResponse } from './index.types'

export const showProgress = ref(false)

export const filePath = ref<string>()

export const queue = ref<number>()

export const sendImage = async (data: FormData, router: Router): Promise<void> => {
  try {
    showProgress.value = true
    const res = await fetch(`${import.meta.env.VITE_API_URL}/images/`, {
      method: 'POST',
      body: data,
    })

    const resData = (await res.json()) as ImageGenerationResponse
    const taskId = resData.task_id
    await router.push({ path: '/uploading_photo', query: { taskId } })
  } catch (error) {
    console.error('Error:', error)
  } finally {
    showProgress.value = false
  }
}

export const getStatus = async (taskId: string, router: Router): Promise<GetStatusResponse | undefined> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${taskId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) await router.push({ path: '/uploading_photo', query: {} })
  else {
    const data = (await response.json()) as GetStatusResponse
    filePath.value = data.file_path
    queue.value = data.queue
    console.log('data - ', data)
    console.log('queue - ', queue.value)
    return data
  }
}

export const getVideo = async (): Promise<Response | undefined> => {
  if (filePath.value === undefined) return
  return await fetch(`${import.meta.env.VITE_API_URL}/outputs/${filePath.value}/`, {
    method: 'GET',
  })
}
