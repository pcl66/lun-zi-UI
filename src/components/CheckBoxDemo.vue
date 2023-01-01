<script setup lang="ts">
import Demo from './Demo.vue'
import CheckBox1Demo from './CheckBox1.Demo.vue'
import CheckBox1Code from './CheckBox1.Demo.vue?raw'
import Attr from './Attr.vue'
import { columns } from '../config/data'

const data = [
  {
    params: 'v-model',
    desc: '是否选中',
    type: 'boolean',
    select: 'true / false',
    default: 'false'
  }
]
</script>

<template>
  <h1>复选框示例</h1>
  <Demo title="基本用法" :component="CheckBox1Demo" :code="CheckBox1Code" />
  <Attr :columns="columns" :data="data"/>
</template>

<style></style>
