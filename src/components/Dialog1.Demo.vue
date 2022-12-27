<script setup lang='ts'>import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

const visible = ref(false)
const onCancel = () => {
  console.log('xxxx')
}

const onOk = () => {
  visible.value = false
}
</script>

<template>
<Button @click="visible = true">点击打开弹窗</Button>
<Dialog v-model="visible" title="示例1" :on-cancel="onCancel" :on-ok="onOk">
  <template #content>
    <p>第一行</p>
    <p>第二行</p>
  </template>
</Dialog>
</template>

<style>

</style>
