import { createApp, h } from "vue"
import Dialog from "./Dialog.vue"

interface Options {
  modelValue: boolean
  title?: string
  onOk?: Function
  onCancel?: Function
}
export const openDialog = ({ modelValue, title = '', onOk, onCancel }: Options) => {
  console.log('0')
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(Dialog, {modelValue, title, onOk, onCancel, "onUpdate:modelValue": (newVal) => {
        if(!newVal) {
          console.log('newVal', newVal)
          app.unmount()
          div.remove()
        }
      }},{
        content: () => {
          return h('h1', {}, '内容')
        }
      })
    }
  })
  app.mount(div)
  console.log('----')
}