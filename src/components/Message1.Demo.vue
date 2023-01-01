<script setup lang='ts'>
import {Message} from '../lib/Message/index';
import Button from '../lib/Button.vue';

const hClick = () => {
  Message({
    type: "success",
    text: "成功"
  })
}
</script>

<template>
<Button type="danger" @click="hClick">显示成功提示消息</Button>
</template>

<style>

</style>
