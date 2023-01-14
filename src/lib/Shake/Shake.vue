<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';


const props =withDefaults(defineProps<{
  toggle?: boolean
  duration?: number
}>(), {
  toggle: false,
  duration: 820
})
const v = ref(`light-shake ${props.duration}ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both`)

const emit = defineEmits(['update:toggle'])

onMounted(() => {
  watch(
    () => props.toggle,
    (val) => {
      if (val) {
        setTimeout(() => {
          emit('update:toggle', false)
        }, props.duration)
      }
    }
  )
})
</script>

<template>
  <div :class="{'light-apply-shake': props.toggle}" :style="{'--v': v}">
    <slot />
  </div>
</template>

<style>
@keyframes light-shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.light-apply-shake {
  /* animation: light-shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both; */
  animation: var(--v);
}
</style>
