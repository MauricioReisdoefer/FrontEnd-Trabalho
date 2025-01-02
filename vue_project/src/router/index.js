
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Topics from '../components/TopicComps/topics.vue'
import Register from '../components/UserComps/register.vue'
import Login from '../components/UserComps/login.vue'
import CreateTopic from '../components/TopicComp/create.topic.vue'
import ManageAccount from '../components/UserComps/manageAccount.vue'

const routes = [
  { path: '/', component: Home, name: "home" },
  { path: '/topics', component: Topics, name: 'topics' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/createTopic', component: CreateTopic, name: 'createTopic'},
  { path: '/login', component: Login, name: 'login'},
  { path: '/manage', component: ManageAccount, name: 'manageAccount'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
