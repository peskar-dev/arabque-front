export interface GetStatusResponse {
  status: string
  file_path: string
  queue: string
}

export interface ImageGenerationResponse {
  task_id: string
}
