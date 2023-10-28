import { createApp, h } from 'vue'
import './style.scss'
import './lib/svg.js'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import { VShake } from './directive/v-shake'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.config.globalProperties = {
  name: '123'
}



app.use(router)
app.use(ElementPlus)
app.directive('shake', VShake)
app.mount('#app')
