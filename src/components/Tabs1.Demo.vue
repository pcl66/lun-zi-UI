<script setup lang='ts'>
import Tabs from '../lib/Tabs/Tabs.vue';
import Tab from '../lib/Tabs/Tab.vue';
import { ref } from 'vue';
const checked = ref('选项2')
</script>

<template>
<Tabs v-model:selected="checked">
  <Tab title="选项1">内容1</Tab>
  <Tab title="选项2">内容2</Tab>
</Tabs>
</template>

<style>

</style>
