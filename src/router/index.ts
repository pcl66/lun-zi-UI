import { createWebHashHistory, createRouter } from 'vue-router'
import Doc from '../views/Doc.vue'
import Home from '../views/Home.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import PageNotFound from '../components/404.vue'
import DialogDemo from '../components/DialogDemo.vue'
const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc, children: [
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: '/:pathMatch(.*)*', component: PageNotFound}
    ] },
  ]
})