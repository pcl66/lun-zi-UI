<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue';

const value = ref(false)

</script>

<template>
  <Switch v-model:checked="value" />
</template>

<style lang="scss">
</style>
