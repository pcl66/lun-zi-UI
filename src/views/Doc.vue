<script setup lang="ts">
import { inject, onMounted, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'

const asideVisible = inject<Ref<boolean>>('asideVisible')

const clientWidth = document.documentElement.clientWidth

onMounted(() => {
  if (clientWidth >= 500) {
    if (asideVisible) {
      asideVisible.value = true
    }
  }
})
</script>

<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">骨架屏 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">面包屑 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">单选框 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">复选框 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Message 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">城市选择 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">虚拟列表 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">返回顶部 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 5px;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      /* background: lightgreen; */
    }
  }
}
aside {
  background: #fff;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  overflow: auto;
  border-right: 2px solid #247f1d;
  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }
  > ol {
    > li {
      > a {
        padding: 10px 16px;
        display: block;
        text-decoration: none;
        transition: all 250ms;
        background: #fff;
        &:hover {
          background: #b5d9ba;
          background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
          background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
          background: linear-gradient(to bottom right, #b5d9ba, #7bc681);
          border-right: 2px solid #247f1d;
        }
      }
      .router-link-active {
        background: #b5d9ba;
        background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
        background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
        background: linear-gradient(to bottom right, #b5d9ba, #7bc681);
        border-right: 2px solid #247f1d;
        /* transition: all 250ms; */
      }
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
    /* height: 6px; */
  }
  &:hover::-webkit-scrollbar {
    width: 6px;
  }
  /*滚动条的轨道*/
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: #ccc;
  }
  /*滚动条的滑块按钮*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bbb;
    box-shadow: inset 0 0 5px #000;
  }
  /*滚动条的上下两端的按钮*/
  &::-webkit-scrollbar-button {
    height: 10px;
    background-color: #333;
  }
}
main {
  height: 100%;
}
</style>
