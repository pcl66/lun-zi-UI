<script setup lang='ts'>
import Button from '../lib/Button.vue';

const hClick = () => {
  console.log('点击了')
}
</script>

<template>
<h1>不同尺寸</h1>
<Button size="small" @click="hClick">small</Button>
<Button>normal</Button>
<Button size="large">large</Button>
</template>

<style lang="scss" scoped>

</style>
