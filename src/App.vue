<script setup lang="ts">
import { provide, ref } from 'vue';
const clintWidth = document.documentElement.clientWidth

const asideVisible = ref(clintWidth <= 560 ? true : false)
provide('asideVisible',asideVisible)
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
