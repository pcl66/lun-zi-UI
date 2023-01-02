<script lang="ts" setup name="XtxCarousel">
import { onBeforeUnmount, onMounted, ref } from 'vue'
interface BannerItem {
  id: string
  imgUrl: string
}
const props = defineProps<{
  slides: BannerItem[]
  autoPlay?: boolean
  duration?: number
}>()

const i = ref(0)
const timer = ref(-1)
// 上一页
const turnToPrev = () => {
  // if (i.value < 1) {
  //   i.value = props.slides.length - 1
  // } else {
  //   i.value--
  // }
  i.value = (i.value - 1 + props.slides.length) % props.slides.length
}
// 下一页
const turnToNext = () => {
  i.value = (i.value + 1) % props.slides.length
}
// 开始轮播
const startPlay = () => {
  timer.value = window.setInterval(turnToNext, props.duration || 3000)
}
// 停止轮播
const stopPlay = () => {
  window.clearInterval(timer.value)
}
// 初始化
onMounted(() => {
  if (props.autoPlay) {
    startPlay()
  }
})
// 销毁
onBeforeUnmount(() => {
  stopPlay()
})
</script>

<template>
  <div class="xtx-carousel" @mousemove="stopPlay" @mouseleave="startPlay">
    <ul class="carousel-body">
      <li class="carousel-item" :class="{ fade: i === index }" v-for="(item, index) in slides" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="turnToPrev"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" class="carousel-btn next" @click="turnToNext"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span :class="{ active: i === index }" v-for="(item, index) in slides" :key="item.id" @mouseenter="i = index"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 0;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 6px;
        height: 6px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 6px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 22px;
      height: 22px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 11px);
      z-index: 2;
      text-align: center;
      line-height: 22px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
