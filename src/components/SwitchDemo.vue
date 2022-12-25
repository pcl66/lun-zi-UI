<script setup lang='ts'>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
const value = ref(false)
</script>

<template>
<div>
  <Switch v-model:checked = "value"/>
  <hr>
  <Switch v-model:checked = "value" disabled/>
  <hr>
  <Switch v-model:checked = "value" disabled/>
  <hr>
  <Switch v-model:checked = "value" disabled/>
  <hr>
</div>
</template>

<style lang="scss" scoped>

</style>
