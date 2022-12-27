<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

const value = ref(true)
</script>

<template>
  <Switch v-model:checked="value" disabled />
</template>

<style lang="scss"></style>
