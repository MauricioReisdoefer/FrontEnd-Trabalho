
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Topics from '../components/TopicComps/topics.vue'
import CreateTopic from '../components/TopicComps/create.topic.vue'
import ManageAccount from '../components/UserComps/manageAccount.vue'
import regsLog from '../components/UserComps/regs-log.vue'
import topicPage from '../components/TopicComps/topicPage.vue'

const routes = [
  { path: '/', component: Home, name: "home" },
  { path: '/topics', component: Topics, name: 'topics' },
  { path: '/createTopic', component: CreateTopic, name: 'createTopic'},
  { path: '/manage/:id', component: ManageAccount, name: 'manageAccount'},
  { path: '/regslog', component: regsLog, name: 'regsLog'},
  {
    path: '/acessTopic/:id',
    name: 'TopicPage',
    component: topicPage,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
