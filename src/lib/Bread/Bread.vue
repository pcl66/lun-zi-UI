<script setup lang="ts">
import { provide } from 'vue'

// const { separator = '/' } = defineProps<{
//   separator?: string
// }>()
const props = defineProps({
  separator: {
    type: String,
    default: '/'
  }
})
provide('separator', props.separator)
</script>

<template>
<div class="lz-bread">
  <slot ></slot>
</div>
</template>

<style lang="scss">
.lz-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: #27ba9b;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
