<script setup lang='ts'>
import Carousel from '../lib/Carousel/Carousel.vue';
import girl1 from '../assets/girl1.png'
import girl2 from '../assets/girl2.jpg'
import girl3 from '../assets/girl3.jpg'

interface BannerItem {
  id: string
  imgUrl: string
}
const slides: BannerItem[] = [
  {
    id: '0',
    imgUrl: girl1,
  },
  {
    id: '1',
    imgUrl: girl2,
  },
  {
    id: '2',
    imgUrl: girl3,
  }
] 
</script>

<template>
<Carousel :slides="slides" auto-play :duration="4000" style="width: 400px; height: 280px;"/>
</template>

<style>

</style>
