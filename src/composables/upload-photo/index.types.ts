export interface GetStatusResponse {
  status: string
  file_path: string
  queue: number
}

export interface ImageGenerationResponse {
  task_id: string
}
