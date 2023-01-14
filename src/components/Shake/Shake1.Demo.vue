<script setup lang='ts'>
import { ref } from 'vue';
import Shake from '../../lib/Shake/Shake.vue'
import Button from '../../lib/Button.vue';
const shake = ref(false)
const hClick = () => {
  shake.value = true
}
</script>

<template>
  <Shake v-model:toggle="shake" :duration="1000" class="shake">
    <span>抖</span>
  </Shake>
  <Button @click="hClick">点击</Button>
</template>

<style lang="scss" scoped>
.shake {
  margin-bottom: 10px;
}
</style>
