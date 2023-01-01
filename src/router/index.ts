import { createWebHashHistory, createRouter } from 'vue-router'
import Doc from '../views/Doc.vue'
import Home from '../views/Home.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import PageNotFound from '../components/404.vue'
import DialogDemo from '../components/DialogDemo.vue'
import Intro from '../components/Intro.vue'
import GetStarted from '../components/GetStarted.vue'
import Install from '../components/Install.vue'
import BreadDemo from '../components/BreadDemo.vue'
import SkeletonDemo from '../components/SkeletonDemo.vue'
import CarouselDemo from '../components/CarouselDemo.vue'
import CheckBoxDemo from '../components/CheckBoxDemo.vue'
import MessageDemo from '../components/MessageDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
const history = createWebHashHistory()

export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc, children: [
      { path: 'intro', component: Intro },
      { path: 'get-started', component: GetStarted },
      { path: 'install', component: Install },
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: 'bread', component: BreadDemo },
      { path: 'skeleton', component: SkeletonDemo },
      { path: 'carousel', component: CarouselDemo },
      { path: 'checkbox', component: CheckBoxDemo },
      { path: 'message', component: MessageDemo },
      { path: 'tabs', component: TabsDemo },
      { path: '/:pathMatch(.*)*', component: PageNotFound}
    ] },
  ]
})