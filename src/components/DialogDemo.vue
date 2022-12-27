<script setup lang='ts'>
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog'
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.Demo.vue';
import Dialog1Code from './Dialog1.Demo.vue?raw';
import Dialog2Demo from './Dialog2.Demo.vue';
import Dialog2Code from './Dialog2.Demo.vue?raw';

const visible2 = ref(true)
const open = () => {
  visible2.value = true
  openDialog({modelValue: visible2.value, title: '示例2', onCancel: () => { visible2.value = false}, onOk: () => { visible2.value = false }})
}
</script>

<template>
<h1>Dialog组件示例</h1>
<Demo title="基本用法" :component="Dialog1Demo" :code="Dialog1Code"/>
<Demo title="函数式调用" :component="Dialog2Demo" :code="Dialog2Code"/>

</template>

<style lang="scss" scoped>

</style>
