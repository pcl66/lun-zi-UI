<script setup lang='ts'>
import { time } from 'console';
import { Duplex } from 'stream';
import { onMounted, Ref, ref } from 'vue';

const props = withDefaults(defineProps<{
  target?: string
  duration?: number
}>(), {
  target: '.back-up-demo',
  duration: 5000
})
const element = ref<HTMLElement | null>(null)
const elHeight = ref<number>(0)
const timeGap = ref<number>(0)
onMounted(() => {
  element.value = document.querySelector(props.target)
})
const myScroll = (el: HTMLElement) => {
  if(el.scrollTop === 0) {
    timeGap.value = Date.now() -  timeGap.value
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
  // element.value!.scrollTo({
  //   top: 0,
  //   behavior: "smooth"
  // })
  timeGap.value = Date.now()
  elHeight.value = element.value!.scrollTop
  myScroll(element.value!)
}
</script>

<template>
<div class="light-back-top" @click="hClick">
  up
</div>
</template>

<style lang="scss">
.light-back-top {
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: 1px solid green;
}
</style>
