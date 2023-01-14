<script setup lang='ts'>
import BackTopDemo from './BackTop.Demo.vue';
import BackTopCode from './BackTop.Demo.vue?raw'
import Demo from './Demo.vue'

</script>

<template>
  <Demo :title="'BackTop组件示例'" :component="BackTopDemo" :code="BackTopCode"/>
</template>

<style lang="scss" scoped>

</style>
