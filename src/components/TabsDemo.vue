<script setup lang='ts'>
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.Demo.vue';
import Tabs1Code from './Tabs1.Demo.vue?raw';
</script>

<template>
<h1>tabs使用示例</h1>
<Demo title="基本用法" :component="Tabs1Demo" :code="Tabs1Code"/>
</template>

<style lang="scss" scoped>

</style>
