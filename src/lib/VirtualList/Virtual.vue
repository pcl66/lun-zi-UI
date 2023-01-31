<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  width: number
  height: number
}>(), {
  height: 600,
  width: 200
})
const height = props.height + 'px'
const width = props.width + 'px'
const data = Array.from({length: 100}).map((v,i) => i)
const realHeight = 30 * data.length + 'px'
const start = ref(0)
const showData = ref(data.slice(start.value, 20))
const virtualListRef = ref<HTMLDivElement | null>(null)
const realRef = ref<HTMLDivElement | null>(null)
const hScroll = (e: Event) => {
  console.log((e.target as any).scrollTop)
  const scrollTop = (e.target as any).scrollTop
  // if(scrollTop > 30 * data.length - 30 * 20 ) return
  start.value = Math.floor(scrollTop / 30)
  console.log('start', start.value)
  showData.value = data.slice(start.value, start.value + 20)
  realRef.value!.style.transform = `translateY(${start.value * 30}px)`
}
onMounted(() => {
  console.log(virtualListRef.value)
  virtualListRef.value!.addEventListener('scroll', hScroll)
})
</script>

<template>
<div class="virtualList" ref="virtualListRef">
  <div class="real">
    <div class="vis-content" ref="realRef">
      <div class="item" v-for="(v, i) in showData" :key="i">{{ v }}</div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.virtualList{
  height: v-bind(height);
  width: v-bind(width);
  border: 1px solid red;
  overflow: scroll;
  position: relative;
  .real {
    position: absolute;
    height: v-bind(realHeight);
    .item {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
