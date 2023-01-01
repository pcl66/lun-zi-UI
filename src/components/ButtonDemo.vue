<script setup lang="ts">
import { ref } from 'vue'
import Button1Demo from './Button1.Demo.vue'
import Button1Code from './Button1.Demo.vue?raw'
import Button2Demo from './Button2.Demo.vue'
import Button2Code from './Button2.Demo.vue?raw'
import Demo from './Demo.vue'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data = ref([
  {
    params: 'size',
    desc: '尺寸',
    type: 'string',
    select: 'normal / small / mini',
    default: 'normal'
  },
  {
    params: 'type',
    desc: '按钮类型',
    type: 'string',
    select: 'primary / warning / danger',
    default: 'primary'
  },
  {
    params: 'loading',
    desc: '加载中',
    type: 'boolean',
    select: 'false / true',
    default: 'false'
  }
])
</script>

<template>
  <h1>Button 组件示例</h1>
  <Demo title="基本用法" :component="Button1Demo" :code="Button1Code" />
  <Demo title="不同类型" :component="Button2Demo" :code="Button2Code" />
  <Attr :columns="columns" :data="data" />
</template>

<style lang="scss" scoped></style>
