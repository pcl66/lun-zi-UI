<script setup lang='ts'>
import Demo from './Demo.vue';
import Message1Demo from './Message1.Demo.vue';
import Message1Code from './Message1.Demo.vue?raw';
</script>

<template>
<h1>消息提示组件示例</h1>
<Demo title="基本用法" :component="Message1Demo" :code="Message1Code"/>
</template>

<style>

</style>
