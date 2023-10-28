<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue';

// 是否展开
const expand = ref<boolean>(false)

// 切换展开状态
const hClickHeader = () => {
  expand.value = !expand.value
}

const slotDivRef = ref<HTMLElement | null>(null)
const collapseItemRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if(slotDivRef.value) {
    const slotDivHeight = slotDivRef.value.clientHeight
    if(collapseItemRef.value) {
      collapseItemRef.value.style.height = slotDivHeight + 'px'
    }
  }
})

const props = defineProps<{
  title?: string
  name?: string
}>()

defineExpose({
  clp: '1'
})
</script>

<template>
<div class="lz-collapse-item">
  <div class="lz-collapse-item__header" @click="hClickHeader">
    <slot name="header"></slot>
  </div>
  <div class="lz-collapse-item__body" ref="collapseItemRef" :class="[expand ? '': 'closed']">
    <div ref="slotDivRef">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.lz-collapse-item {
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  .lz-collapse-item__header {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  .lz-collapse-item__body {
    overflow: hidden;
    padding: 0 10px;
    transition: height 0.3s;
  }
  .lz-collapse-item__body.closed {
    height: 0 !important;
  }
}
</style>
