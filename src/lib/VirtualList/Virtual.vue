<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  width: number
  height: number
  itemHeight: number
  itemCount: number
}>(), {
  height: 400,
  width: 200,
  itemHeight: 20,
  itemCount: 20
})
const height = props.height + 'px'
const width = props.width + 'px'
const data = Array.from({length: 100}).map((v,i) => i)
const realHeight = props.itemHeight * data.length + 'px'
const itemHeight = props.itemHeight + 'px'
const start = ref(0)
const showData = ref(data.slice(start.value, props.itemCount))
const virtualListRef = ref<HTMLDivElement | null>(null)
const realRef = ref<HTMLDivElement | null>(null)
const hScroll = (e: Event) => {
  const scrollTop = (e.target as any).scrollTop
  start.value = Math.floor(scrollTop / props.itemHeight)
  showData.value = data.slice(start.value, start.value + props.itemCount)
  realRef.value!.style.transform = `translateY(${start.value * props.itemHeight}px)`
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
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 5px;
  overflow: scroll;
  position: relative;
  .real {
    position: absolute;
    height: v-bind(realHeight);
    width: 100%;
    .item {
      height: v-bind(itemHeight);
      line-height: v-bind(itemHeight);
      width: calc(100% - 10px);
      cursor: pointer;
      transition: all .5s;
      border-radius: 3px;
      &:hover {
        background-color: gray;
      }
    }
  }
}
</style>
