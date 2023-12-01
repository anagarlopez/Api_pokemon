import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
createApp(App).mount('#app');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');