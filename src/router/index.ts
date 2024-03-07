export const routes = [
  {
    path: '/',
    name: 'home',
    component: async () => await import('../pages/HomePage.vue')
  },
  {
    path: '/uploading_photo',
    name: 'uploading_photo',
    component: async () => await import('../pages/UploadPhotoPage.vue')
  },
  {
    path: '/video_ready',
    name: 'video_ready',
    component: async () => await import('../pages/VideoReady.vue')
  },
  {
    path: '/competition',
    name: 'competition',
    component: async () => await import('../pages/Competition.vue')
  },
  {
    path: '/contest',
    name: 'contest',
    component: async () => await import('../pages/Contest.vue')
  }
]
