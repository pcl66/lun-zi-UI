<script setup lang="ts">
import { ComponentOptionsBase, ComponentPublicInstance, computed, onMounted, ref, useAttrs, useSlots, watchEffect } from 'vue'
import Tab from './Tab.vue'

const selectedRef = ref<HTMLDivElement | null>(null)
const navRef = ref<HTMLDivElement| null>(null)
const indicatorRef = ref<HTMLDivElement | null>()

const slots = useSlots()
const tabs = slots.default!()
const props = defineProps<{selected: string}>()
const emits = defineEmits(['update:selected'])
/** 所有tab的title */
const titles = ref<string[]>([])
/** 类型校验 */
tabs.forEach((v, i) => {
  if (v.type !== Tab) {
    throw new Error('Tabs的子标签必须为Tab')
  }
  titles.value.push(v.props!.title as string)
})
const attr = useAttrs()
const checkedTitle = ref(props.selected)
const tab = computed(() => {
  return tabs.filter(v => v.props!.title === checkedTitle.value)[0]
})
const hClick = (val: string) => {
  checkedTitle.value = val
  console.log('selectedTitle', val)
  emits('update:selected', val)
}
onMounted(() => {
  watchEffect(() => {
    console.log('ref', selectedRef.value)
    const {width}= selectedRef.value!.getBoundingClientRect()
    indicatorRef.value!.style.width  = width + 'px'
    const { left:left1 } = selectedRef.value!.getBoundingClientRect()
    const { left:left2 } = navRef.value!.getBoundingClientRect()
    const left = left1 - left2
    indicatorRef.value!.style.left = left + 'px'
  })
})
</script>

<template>
  <div class="lz-nav" ref="navRef">
    <div
      class="lz-nav-item"
      :class="{ 'lz-nav-active': checkedTitle === v }"
      v-for="(v, i) in titles"
      :key="i"
      @click="hClick(v)"
      :ref="
        (el) => {
          if (checkedTitle === v) {
            selectedRef = el as HTMLDivElement
          }
        }
      "
    >
      {{ v }}
    </div>
    <div class="lz-nav-indicator" ref="indicatorRef"></div>
  </div>
  <Component :is="tab" :key="tab.props!.title" />
</template>

<style lang="scss">
.lz-nav {
  display: flex;
  position: relative;
  border-bottom: 1px solid gray;
  margin-bottom: 16px;
  &-item {
    cursor: pointer;
    margin: 10px;
  }
  &-item:first-child {
    margin-left: 0;
  }
  &-item:hover {
    color: #7ec050;
  }
  &-active {
    /* border-bottom: 1px solid black; */
    color: #7ec050;
  }
  &-indicator {
    position: absolute;
    left: 0;
    /* top: 100%; */
    bottom: 0;
    width: 50px;
    height: 3px;
    background-color: #7ec050;
    transition: all 250ms;
  }
}
</style>
