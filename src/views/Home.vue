<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<template>
  <div class="color">
    <Topnav />
    <div class="banner">
      <h1>Light UI</h1>
      <h2>一个面向学习的UI框架</h2>
      <p class="actions">
        <router-link to="/doc/intro">开始</router-link>
        <router-link to="/doc/switch">组件</router-link>
        <a href="">github</a>
        <!-- <a href=""></a> -->
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.color {
  /* Created with https://www.css-gradient.com */
  background: #b5d9ba;
  background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
  background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
  background: linear-gradient(to bottom right, #b5d9ba, #7bc681);
  clip-path: ellipse(67% 49% at 49% 32%);
  .topnav {
    background: transparent;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Created with https://www.css-gradient.com */
  /* background: #b5d9ba; */
  /* background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
  background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
  background: linear-gradient(to bottom right, #b5d9ba, #7bc681); */
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #508c47;
      color: #fafff9;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: 6px;
      padding: 0 8px;
    }
  }
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
