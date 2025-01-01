import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

Vue.config.productionTip = false
Vue.use(router);
app.mount('#app');