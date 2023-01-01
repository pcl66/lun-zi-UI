import { h, render } from 'vue'
import XtxMessage from './Message.vue'

interface Props {
  type?: 'success' | 'error' | 'warning'
  text: string
  duration?: number
}

let timeId = -1
const divMessage = document.createElement('div')
divMessage.setAttribute('class', 'xtx-message-container')
document.body.appendChild(divMessage)

export const Message = ({ type = 'success', text, duration }: Props) => {
  const vNode = h(XtxMessage, { type, text })
  console.log('vNode', vNode)
  render(vNode, divMessage)
  timeId = window.setTimeout(() => {
    render(null, divMessage)
    clearTimeout(timeId)
  }, duration || 3000)
}

Message.success = (value: string) => {
  Message({
    type: 'success',
    text: value
  })
}

Message.warning = (value: string) => {
  Message({
    type: 'warning',
    text: value
  })
}

Message.error = (value: string) => {
  Message({
    type: 'error',
    text: value
  })
}
