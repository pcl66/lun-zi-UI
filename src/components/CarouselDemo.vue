<script setup lang="ts">
import Demo from './Demo.vue'
import Carousel1Demo from './Carousel1.Demo.vue'
import Carousel1Code from './Carousel1.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data = [
  {
    params: 'slides',
    desc: '图片容器',
    type: 'BannerItem[ ]',
    select: ' - ',
    default: ' - '
  },
  {
    params: 'auto-play',
    desc: '自动轮播',
    type: 'boolean',
    select: ' true / false ',
    default: ' false '
  },
  {
    params: 'duration',
    desc: '间隔时间(ms)',
    type: 'number',
    select: ' - ',
    default: ' 3000 '
  },
]
</script>

<template>
  <h1>Carousel 组件示例</h1>
  <Demo title="基本用法" :component="Carousel1Demo" :code="Carousel1Code" />
  <Attr :columns="columns" :data="data" />
</template>

<style></style>
