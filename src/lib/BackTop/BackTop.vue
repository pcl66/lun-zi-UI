<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    target?: string
    duration?: number
  }>(),
  {
    target: 'body',
    duration: 5000
  }
)
const element = ref<HTMLElement | null>(null)
const elHeight = ref<number>(0)
const timeGap = ref<number>(0)
const scrollHeight = ref<number>(0)
const hScroll = () => {
  scrollHeight.value = element.value!.scrollTop
}
onMounted(() => {
  element.value = document.querySelector(props.target)
  element.value?.addEventListener('scroll', hScroll)
})
onUnmounted(() => {
  element.value?.removeEventListener('scroll', hScroll)
})
const myScroll = (el: HTMLElement) => {
  if (el.scrollTop === 0) {
    timeGap.value = Date.now() - timeGap.value
    console.log('gap', timeGap.value)
    return
  }
  console.log('movement', elHeight.value / (props.duration / 16))
  el.scrollTop -= elHeight.value / (props.duration / 16)
  console.log(Date.now())
  window.requestAnimationFrame(() => {
    myScroll(el)
  })
}
const hClick = () => {
  // 1.使用scrollTo
  element.value!.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  // 2.使用requestAnimation
  // timeGap.value = Date.now()
  // elHeight.value = element.value!.scrollTop
  // myScroll(element.value!)
}
</script>

<template>
  <transition>
    <button v-if="scrollHeight >= 200" button class="light-back-top" @click="hClick">
      <slot >
        up
      </slot>
    </button>
  </transition>
</template>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: all 500ms;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateX(20px) scale(0.95);
  }
  .v-enter-to,
  .v-leave-from {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
.light-back-top {
  /* position: fixed;
  bottom: 20px;
  right: 20px;
  inset-inline-end: 20px;
  inset-block-end: 40px;
  border: 1px solid green; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
  border: none;
  position: fixed;
  cursor: pointer;
  overflow: hidden;
  z-index: 99;
  display: block;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  inset-inline-end: 64px;
  inset-block-end: 71px;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  transition: all .5s;
  border-radius: 6px;
  &:hover {
    background-color: #78b155;
  }
}
</style>
