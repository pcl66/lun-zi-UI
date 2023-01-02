<script setup lang='ts'>
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.Demo.vue';
import Tabs1Code from './Tabs1.Demo.vue?raw';
</script>

<template>
  <div>
    <h1>tabs 组件示例</h1>
    <Demo title="基本用法" :component="Tabs1Demo" :code="Tabs1Code"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
