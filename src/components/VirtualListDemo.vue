<script setup lang="ts">
import Demo from './Demo.vue'
import VirtualList1Demo from './VirtualList1.Demo.vue'
import VirtualList1Code from './VirtualList1.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data1 = [
  {
    params: 'height',
    desc: '容器高度(px)',
    type: 'number',
    select: ' - ',
    default: ' 400 '
  },
  {
    params: 'width',
    desc: '容器宽度(px)',
    type: 'number',
    select: ' - ',
    default: ' 200 '
  },
  {
    params: 'itemHeight',
    desc: '每一项的高度(px)',
    type: 'number',
    select: ' - ',
    default: ' 20 '
  },
  {
    params: 'itemCount',
    desc: '显示的个数',
    type: 'number',
    select: ' - ',
    default: ' 20 '
  },
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
    <h1>VirtualList 组件示例</h1>
    <Demo title="基本用法" :component="VirtualList1Demo" :code="VirtualList1Code" />
    <Attr :columns="columns" :data="data1" />
  </div>
</template>

<style></style>
