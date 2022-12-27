<script setup lang='ts'>
import Button1Demo from './Button1.Demo.vue';
import Button1Code from './Button1.Demo.vue?raw';
import Button2Demo from './Button2.Demo.vue';
import Button2Code from './Button2.Demo.vue?raw';
import Demo from './Demo.vue';

</script>

<template>
<h1>Button组件示例</h1>
<Demo title="基本使用" :component="Button1Demo" :code="Button1Code"/>
<Demo title="不同类型" :component="Button2Demo" :code="Button2Code"/>
</template>

<style lang="scss" scoped>

</style>
