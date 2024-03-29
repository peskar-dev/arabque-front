import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../router/index'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  scrollTo(0, 0)
})
