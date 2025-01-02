import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import axios from 'axios';

loadFonts();

axios.defaults.baseURL = 'http://localhost:8080';
const app = createApp(App);

app.use(vuetify);
app.use(router);

app.config.globalProperties.$axios = axios;
app.mount('#app');
