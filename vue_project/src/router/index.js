
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Topics from '../components/topics.vue'
import Register from '../components/register.vue'
import CreateTopic from '../components/TopicComp/create.topic.vue'

const routes = [
  { path: '/', component: Home, name: "home" },
  { path: '/topics', component: Topics, name: 'topics' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/createTopic', component: CreateTopic, name: 'createTopic'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
