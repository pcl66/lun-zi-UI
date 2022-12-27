<script setup lang="ts">
import { ref } from 'vue'
import { openDialog } from '../lib/openDialog'
import Button from '../lib/Button.vue'

const visible = ref(true)
const open = () => {
  visible.value = true
  openDialog({
    modelValue: visible.value,
    title: '示例2',
    onCancel: () => {
      visible.value = false
    },
    onOk: () => {
      visible.value = false
    }
  })
}
</script>

<template>
  <Button @click="open">点击打开弹窗</Button>
</template>

<style></style>
