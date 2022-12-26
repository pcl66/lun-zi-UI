<script setup lang='ts'>
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog'

const visible = ref(false)
const onCancel = () => {
  console.log('xxxx')
}

const onOk = () => {
  visible.value = false
}
const visible2 = ref(true)
const open = () => {
  visible2.value = true
  openDialog({modelValue: visible2.value, title: '示例2', onCancel: () => { visible2.value = false}, onOk: () => { visible2.value = false }})
}
</script>

<template>
<h1>示例1</h1>
<Button @click="visible = true">点击打开弹窗</Button>
<Dialog v-model="visible" title="示例1" :on-cancel="onCancel" :on-ok="onOk">
  <template #content>
    <p>第一行</p>
    <p>第二行</p>
  </template>
</Dialog>
<hr>
<h1>示例2</h1>
<Button @click="open">点击打开弹窗</Button>
</template>

<style lang="scss" scoped>

</style>
