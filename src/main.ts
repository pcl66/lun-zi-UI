import { createApp, h } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './router'


const app = createApp(App)



app.use(router)
app.mount('#app')
