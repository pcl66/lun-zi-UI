<script setup lang="ts">
import { inject, Ref } from 'vue'
import { useRoute } from 'vue-router';
const asideVisible = inject<Ref<boolean>>('asideVisible')
const asideToggle = () => {
  if (asideVisible) {
    asideVisible.value = !asideVisible.value
  }
}
const route = useRoute()
const active = route.path !== '/'

</script>

<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/light.svg" alt="" />
      </router-link>
    </div>
    <div v-if="active" class="menuToggle" @click="asideToggle">
      <img src="../assets/switch.svg" alt="">
    </div>
    <ul class="menu">
      <router-link to="/doc/intro">
        <li>文档</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  display: flex;
  padding: 16px;
  background: #b5d9ba;
  background: -webkit-linear-gradient(top left, #b5d9ba, #a1e2a7);
  /* background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
  background: linear-gradient(to bottom right, #b5d9ba, #7bc681); */
  border-bottom: 1px solid rgb(27, 100, 3);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    img {
      width: 26px;
      height: 26px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      color: #213c2c;
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
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
