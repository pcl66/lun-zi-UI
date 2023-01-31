<script setup lang="ts">
import Demo from './Demo.vue'
import Upload1Demo from './Upload1.Demo.vue'
import Upload1Code from './Upload1.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data1 = [
  {
    params: 'separator',
    desc: '分割符',
    type: 'string',
    select: ' - ',
    default: ' / '
  }
]
const data2 = [
  {
    params: 'to',
    desc: '跳转路由',
    type: 'string',
    select: ' - ',
    default: ' - '
  }
]
</script>

<template>
  <div>
    <h1>Bread 组件示例</h1>
    <Demo title="基本用法" :component="Upload1Demo" :code="Upload1Code" />
    <!-- <h2>Bread</h2>
    <Attr :columns="columns" :data="data1" />
    <h2>BreadItem</h2>
    <Attr :columns="columns" :data="data2" /> -->
  </div>
</template>

<style></style>
