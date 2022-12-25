<script setup lang='ts'>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
const value = ref(false)
</script>

<template>
<div>
  <Switch v-model:checked = "value"/>
</div>
</template>

<style lang="scss" scoped>

</style>
