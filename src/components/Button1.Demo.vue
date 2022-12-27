<script setup lang='ts'>
import Button from '../lib/Button.vue';
const hClick = () => {
  console.log('点击了button')
}
</script>

<template>
<Button size="small" @click="hClick">small</Button>
<Button>normal</Button>
<Button size="large">large</Button>
</template>

<style>

</style>
