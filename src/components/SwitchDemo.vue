<script setup lang='ts'>
import { ref } from 'vue';
import Switch1Demo from './Switch1.Demo.vue';
import Switch2Demo from './Switch2.Demo.vue';
import Switch1Code from './Switch1.Demo.vue?raw'
import Switch2Code from './Switch2.Demo.vue?raw'
import Demo from './Demo.vue';
import Attr from './Attr.vue';
import {columns} from '../config/data'
const value2 = ref(false)
const data = [
  {
    params: 'v-model:checked',
    desc: '选中状态',
    type: 'boolean',
    select: 'true / false',
    default: ' - '
  },
  {
    params: 'disabled',
    desc: '禁用',
    type: 'boolean',
    select: 'true / false',
    default: 'false'
  }
]
</script>

<template>
<div>
  <div>
  <h1>Switch 组件示例 </h1>
  <Demo title="基本用法" :component="Switch1Demo" :code="Switch1Code"/>
  <Demo title="支持disabled" :component="Switch2Demo" :code="Switch2Code"/>
  <Attr :columns="columns" :data="data"/>
</div>
</div>
</template>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
