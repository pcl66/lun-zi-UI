<script setup lang='ts'>
import Carousel from '../lib/Carousel/Carousel.vue';
import girl1 from '../assets/girl1.jpg'
import girl2 from '../assets/girl2.jpg'
import girl3 from '../assets/girl3.jpg'
import girl4 from '../assets/girl4.jpg'
import girl5 from '../assets/girl5.jpg'
import girl6 from '../assets/girl6.jpg'
import girl7 from '../assets/girl7.jpg'
import girl8 from '../assets/girl8.jpg'
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
  },
  {
    id: '3',
    imgUrl: girl4,
  },
  {
    id: '4',
    imgUrl: girl5,
  },
  {
    id: '5',
    imgUrl: girl6,
  },
  {
    id: '6',
    imgUrl: girl7,
  },
  {
    id: '7',
    imgUrl: girl8,
  }
] 
</script>

<template>
<Carousel :slides="slides" auto-play :duration="4000" style="width: 400px; height: 280px;"/>
</template>

<style>

</style>
