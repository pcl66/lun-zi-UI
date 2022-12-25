<script setup lang="ts">
import { inject, Ref } from 'vue'
const asideVisible = inject<Ref<boolean>>('asideVisible')
const asideToggle = () => {
  if (asideVisible) {
    asideVisible.value = !asideVisible.value
  }
}
</script>

<template>
  <div class="topnav">
    <div class="logo" @click="asideToggle">logo</div>
    <div class="menuToggle">-</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .menuToggle {
    display: none;
  }
  @media (max-width: 560px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .menuToggle {
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
