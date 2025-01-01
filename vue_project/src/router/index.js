
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Topics from '../components/topics.vue'
import Register from '../components/register.vue'

const routes = [
  { path: '/', component: Home, name: "home" },
  { path: '/topics', component: Topics, name: 'topics' },
  { path: '/register', component: Register, name: 'register' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
