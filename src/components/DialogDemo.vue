<script setup lang="ts">
import { ref } from 'vue'
import { openDialog } from '../lib/openDialog'
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1.Demo.vue'
import Dialog1Code from './Dialog1.Demo.vue?raw'
import Dialog2Demo from './Dialog2.Demo.vue'
import Dialog2Code from './Dialog2.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data = [
  {
    params: 'v-model',
    desc: '弹窗显隐',
    type: 'boolean',
    select: 'true / false',
    default: 'false'
  },
  {
    params: 'title',
    desc: '标题',
    type: 'string',
    select: ' - ',
    default: ' - '
  },
  {
    params: 'onOk',
    desc: '点击确认的回调函数',
    type: 'Function',
    select: ' - ',
    default: ' - '
  },
  {
    params: 'onCancel',
    desc: '点击关闭或取消的回调函数',
    type: 'Function',
    select: ' - ',
    default: ' - '
  },
]
</script>

<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <Demo title="基本用法" :component="Dialog1Demo" :code="Dialog1Code" />
    <Demo title="函数式调用" :component="Dialog2Demo" :code="Dialog2Code" />
    <Attr :columns="columns" :data="data" />
  </div>
</template>

<style lang="scss" scoped></style>
