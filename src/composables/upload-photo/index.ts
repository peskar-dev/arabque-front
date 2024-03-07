import { ref } from 'vue'
import type { GetStatusResponse } from './index.types'

export const showProgress = ref(false)

export const filePath = ref('')

export const sendImage = async (data: FormData) => {
  try {
    showProgress.value = true
    const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return res
  } catch (error) {
    console.error('Error:', error)
  } finally {
    showProgress.value = false
  }
}

export const getStatus = async (taskId: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${taskId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data: GetStatusResponse = await res.json()
    filePath.value = data.file_path
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

export const getVideo = async () => {
  try {
    if (filePath.value) {
      const res: Response = await fetch(`${import.meta.env.VITE_API_URL}/images/${filePath.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return res
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
