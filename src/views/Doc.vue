<script setup lang="ts">
import { inject, onMounted, onUnmounted, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'

const asideVisible = inject<Ref<boolean>>('asideVisible')

const clientWidth = document.documentElement.clientWidth

const handleResize = () => {
  if (document.documentElement.clientWidth >= 560) {
    if (asideVisible) {
      asideVisible.value = true
    }
  }
}

const hClickOut = () => {
  if(document.documentElement.clientWidth >= 560) return 
  if (asideVisible) {
    asideVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if (clientWidth >= 500) {
    if (asideVisible) {
      asideVisible.value = true
    }
  }
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '默认标题'
  }
)
</script>

<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <Transition>
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
          <h3>基础组件</h3>
          <ol>
            <li>
              <router-link to="/doc/button">按钮 Button</router-link>
            </li>
          </ol>
          <h3>表单组件</h3>
          <ol>
            <li>
              <router-link to="/doc/switch">切换 Switch </router-link>
            </li>
            <li>
              <router-link to="/doc/checkbox">复选框 CheckBox</router-link>
            </li>
            <li>
              <router-link to="/doc/upload">文件上传 Upload</router-link>
            </li>
          </ol>
          <h3>数据展示</h3>
          <ol>
            <li>
              <router-link to="/doc/dialog">对话框 Dialog</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">标签页 Tabs</router-link>
            </li>
            <li>
              <router-link to="/doc/skeleton">骨架屏 Skeleton</router-link>
            </li>
            <li>
              <router-link to="/doc/bread">面包屑 Bread</router-link>
            </li>
            <li>
              <router-link to="/doc/carousel">轮播图 Carousel</router-link>
            </li>
            <li>
              <router-link to="/doc/message">消息提示 Message</router-link>
            </li>
            <li>
              <router-link to="/doc/v-shake">抖动框 Shake</router-link>
            </li>
            <li>
              <router-link to="/doc/virtual-list">虚拟列表 VirtualList</router-link>
            </li>
            <li>
              <router-link to="/doc/back-top">返回顶部 BackTop</router-link>
            </li>
            <li>
              <router-link to="/doc/collapse">折叠面板 Collapse</router-link>
            </li>
            <li>
              <router-link to="/doc/code-diff">form对比 diff</router-link>
            </li>
          </ol>
        </aside>
      </Transition>

      <main @click="hClickOut">
        <transition>
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 路由过渡动画 */
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .v-enter-active,
  .v-leave-active {
    transition: all 500ms;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateX(20px) scale(0.95);
  }
  .v-enter-to,
  .v-leave-from {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
  > .nav {
    flex-shrink: 0;
    position: fixed;
    width: 100%;
  }
  > .content {
    flex-grow: 1;
    padding-top: 5px;
    padding-left: 220px;
    padding-right: 20px;
    padding-top: 63px;
    @media (max-width: 560px) {
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
  transition: all 250ms;
  z-index: 1;
  > h2,h3 {
    margin-bottom: 4px;
    padding: 4px 16px;
    border-top: 1px solid black;
  }
  > ol {
    > li {
      > a {
        padding: 10px 16px;
        display: block;
        text-decoration: none;
        transition: all 500ms;
        background: #fff;
        border-radius: 6px;
        &:hover {
          background: #c4c4c49c;
          /* color: #247f1d; */
          /* background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
          background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
          background: linear-gradient(to bottom right, #b5d9ba, #7bc681); */
          border-right: 2px solid #247f1d;
        }
      }
      .router-link-active {
        color: #366e3a;
        background-color: #75b8794e;
        /* font-weight: 800; */
        /* background: #b5d9ba;
        background: -webkit-linear-gradient(top left, #b5d9ba, #7bc681);
        background: -moz-linear-gradient(top left, #b5d9ba, #7bc681);
        background: linear-gradient(to bottom right, #b5d9ba, #7bc681); */
        border-right: 2px solid #247f1d;
        /* transition: all 250ms; */
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
    /* opacity: 0;
    visibility: hidden; */
    width: 5px;
    transition: all .5s;
    /* height: 6px; */
  }
  &:hover::-webkit-scrollbar {
    /* visibility: visible;
    opacity: 1; */
    display: none;
  }
  /* &:hover::-webkit-scrollbar {
    width: 6px;
  } */
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
