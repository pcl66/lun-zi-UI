<script setup lang="ts">
import { provide, ref } from 'vue';
const clintWidth = document.documentElement.clientWidth

const asideVisible = ref(clintWidth <= 560 ? true : false)
provide('asideVisible',asideVisible)
</script>

<template>
  <transition>
    <router-view />
  </transition>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 500ms;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateX(20px) scale(0.95);
  }
  .v-enter-to,
  .v-leave-from {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
</style>
