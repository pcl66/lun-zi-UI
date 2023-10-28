<script setup lang='ts'>
import { onMounted, ref, useAttrs, useSlots } from 'vue';

const selectedItems = ref<string[]>([])

// 获取插槽
const slots = useSlots()
const attrs = useAttrs()

onMounted(() => {
  // 获取插槽组件中的expose的信息
  console.log('slots', (slots.default?.()))
  console.log('attrs', attrs)
})

defineExpose({
  clp: '0'
})

</script>

<template>
<div class="lz-collapse">
  <slot></slot>
</div>
</template>

<style>

</style>
