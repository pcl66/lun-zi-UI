<script setup lang='ts'>
import Bread from '../lib/Bread/Bread.vue';
import BreadItem from '../lib/Bread/BreadItem.vue';

</script>

<template>
<Bread separator="/">
  <BreadItem to="/">首页</BreadItem>
  <BreadItem to="/doc/switch">组件列表</BreadItem>
  <BreadItem >面包屑</BreadItem>
</Bread>
</template>

<style>

</style>
