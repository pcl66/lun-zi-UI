<script setup lang='ts'>
import {Message} from '../lib/Message/index';
import Button from '../lib/Button.vue';

const hClick1 = () => {
  Message({
    type: "success",
    text: "成功"
  })
}
const hClick2 = () => {
  Message({
    type: "warning",
    text: "警告"
  })
}
const hClick3 = () => {
  Message({
    type: "error",
    text: "错误"
  })
}
</script>

<template>
<Button type="primary" @click="hClick1">显示成功提示消息</Button>
<Button type="warning" @click="hClick2">显示警告提示消息</Button>
<Button type="danger" @click="hClick3">显示失败提示消息</Button>
</template>

<style>

</style>
