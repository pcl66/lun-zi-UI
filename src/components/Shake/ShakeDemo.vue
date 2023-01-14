<script setup lang='ts'>
import Shake1Demo from './Shake1.Demo.vue';
import Shake1DemoCode from './Shake1.Demo.vue?raw';
import Demo from '../Demo.vue';
</script>

<template>
<div>
  <h1>v-shake指令</h1>
  <Demo title="基本用法" :component="Shake1Demo" :code="Shake1DemoCode"/>
</div>
</template>

<style>

</style>
