import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { POSITION } from 'vue-toastification'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast, { position: POSITION.TOP_RIGHT })
app.mount('#app')
