
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Topics from '../components/topics.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/topics', component: Topics }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
