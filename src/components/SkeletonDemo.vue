<script setup lang="ts">
import Demo from './Demo.vue'
import Skeleton1Demo from './Skeleton1.Demo.vue'
import Skeleton1Code from './Skeleton1.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data = [
  {
    params: 'width',
    desc: '宽度(px)',
    type: 'number',
    select: ' - ',
    default: ' - '
  },
  {
    params: 'height',
    desc: '高度(px)',
    type: 'number',
    select: ' - ',
    default: ' - '
  },
  {
    params: 'bg',
    desc: '背景颜色',
    type: 'string',
    select: ' - ',
    default: ' #efefef '
  },
  {
    params: 'animated',
    desc: '动画',
    type: 'boolean',
    select: ' true / false ',
    default: ' false '
  },
  {
    params: 'fade',
    desc: '闪动效果',
    type: 'boolean',
    select: ' true / false ',
    default: ' false '
  },
]
</script>

<template>
  <h1>Skeleton 组件示例</h1>
  <Demo title="基本用法" :component="Skeleton1Demo" :code="Skeleton1Code" />
  <Attr :columns="columns" :data="data" />
</template>

<style></style>
