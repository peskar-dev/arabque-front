export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/uploading_photo',
    name: 'uploading_photo',
    component: () => import('../pages/UploadPhotoPage.vue'),
  },
  {
    path: '/video_ready',
    name: 'video_ready',
    component: () => import('../pages/VideoReady.vue'),
  },
  {
    path: '/competition',
    name: 'competition',
    component: () => import('../pages/Competition.vue'),
  },
  {
    path: '/contest',
    name: 'contest',
    component: () => import('../pages/Contest.vue'),
  }
]
