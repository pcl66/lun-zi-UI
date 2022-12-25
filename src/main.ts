import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import He from './components/He.vue'
import Home from './views/Home.vue'

const app = createApp(App)

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/1', component: He},
  ]
})

app.use(router)
app.mount('#app')
