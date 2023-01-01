<script setup lang='ts'>
import { inject } from 'vue'

defineProps<{
  to?: string,
}>()
const separator = inject('separator')
</script>

<template>
<div class="lz-bread-item">
  <router-link v-if="to" :to="to">
    <slot></slot>
  </router-link>
  <span v-else><slot></slot></span>
  <i v-if="separator">{{separator}}</i>
  <i v-else class="iconfont icon-angle-right"></i>
</div>
</template>

<style lang="scss">
.lz-bread-item {
  a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: #27ba9b;
      }
    }
  i {
    margin: 0 6px;
    font-size: 10px;
  }
  // 最后一个i隐藏
  &:nth-last-of-type(1) {
    i {
      display: none;
    }
  }
}
</style>
