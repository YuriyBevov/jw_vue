import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Components from '../views/Components.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: MainView
    },

    {
      path: '/components',
      name: 'Компоненты',
      component: Components
    }
  ]
})

export default router
