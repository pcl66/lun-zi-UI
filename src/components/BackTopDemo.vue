<script setup lang='ts'>
import Attr from './Attr.vue';
import BackTop1Demo from './BackTop1.Demo.vue';
import BackTop1Code from './BackTop1.Demo.vue?raw'
import BackTop2Demo from './BackTop2.Demo.vue';
import BackTop2Code from './BackTop2.Demo.vue?raw'
import Demo from './Demo.vue'
import { columns } from '../config/data'

const data = [
  {
    params: 'target',
    desc: '目标元素选择器',
    type: 'string',
    select: ' - ',
    default: ' body '
  }
]
</script>

<template>
  <div>
    <h1>BackTop组件示例</h1>
    <Demo :title="'基本使用'" :component="BackTop1Demo" :code="BackTop1Code"/>
    <Demo :title="'使用插槽'" :component="BackTop2Demo" :code="BackTop2Code"/>
    <Attr title="Attributes" :columns="columns" :data="data"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
