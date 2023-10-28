<script setup lang='ts'>
import Collapse from '../lib/Collapse/index.vue'
import CollapseItem from '../lib/Collapse/CollapseItem/index.vue'
import { onMounted, ref } from 'vue';
const CollRef = ref(null)
console.log('CollapseItem', CollapseItem)
onMounted(() => {
  console.log('CollRef', CollRef.value)
})
</script>

<template>
<div>
  <Collapse ref="CollRef">
    <CollapseItem title="标题1" name="1">
      <template #header>
        <div>标题1</div>
      </template>
      <div>内容1</div>
    </CollapseItem>
    <CollapseItem title="标题2" name="2">
      <template #header>
        <div>标题2</div>
      </template>
      <div>内容2</div>
    </CollapseItem>
    <CollapseItem title="标题3" name="3">
      <template #header>
        <div>标题3</div>
      </template>
      <div>内容3</div>
    </CollapseItem>
  </Collapse>
</div>
</template>

<style>

</style>
