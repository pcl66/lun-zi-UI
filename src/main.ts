import { createApp, h } from 'vue'
import './style.scss'
import './lib/svg.js'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import { VShake } from './directive/v-shake'


const app = createApp(App)



app.use(router)
app.directive('shake', VShake)
app.mount('#app')
