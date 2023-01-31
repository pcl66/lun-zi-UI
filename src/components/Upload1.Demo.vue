<script setup lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Upload from '../lib/Upload/Upload.vue'
const files = ref<File[]>([])
const hOk = (f: File[]) => {
  files.value = f
}
const hClick = () => {
  console.log('f-files', files.value)
}
</script>

<template>
  <div style="width: 80%">
    <Upload :on-ok="hOk">
      <Button type="warning">选择文件</Button>
    </Upload>
    <Button style="margin-top: 10px;" :class="files.length === 0 ? 'disabled' : ''" @click="hClick">上传文件</Button>
  </div>
</template>

<style lang="scss" scoped>
.disabled {
  color: gray;
  background-color: #ccc;
  pointer-events: none;
}
</style>
