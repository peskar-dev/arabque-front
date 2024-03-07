import {ref} from 'vue'
import type {GetStatusResponse} from './index.types'

export const showProgress = ref(false)

export const filePath = ref('')

export const sendImage = async (data: FormData) => {
  try {
    showProgress.value = true
    return await fetch(`${import.meta.env.VITE_API_URL}/images/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
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
