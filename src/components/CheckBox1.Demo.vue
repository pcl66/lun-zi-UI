<script setup lang="ts">
import { ref } from 'vue';
import CheckBox from '../lib/CheckBox/CheckBox.vue';

const isAgree = ref(false)
</script>

<template>
  <CheckBox v-model="isAgree">我同意</CheckBox>
</template>

<style></style>
