<script setup lang="ts">
import { computed } from 'vue'

interface P {
  type?: 'primary' | 'warning' | 'danger'
  size?: 'large' | 'normal' | 'small'
  disabled?: boolean
}

const props = withDefaults(defineProps<P>(), {
  type: 'primary',
  size: 'normal',
  disabled: false
})

const classes = computed(() => {
  return {
    [`lz-type-${props.type}`]: props.type,
    [`lz-size-${props.size}`]: props.size
  }
})
</script>

<template>
  <button class="lz-button" :class="classes">
    <slot />
  </button>
</template>

<style lang="scss">
$h: 32px;
$border-color: transparent;
$color: #fff;
$blue: #3875f6;
$blue-hover: #5794f7;
$radius: 4px;
$red: red;
$grey: grey;
.lz-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $color;
    border-color: transparent;
    background-color: $blue-hover;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.lz-type-primary {
    background-color: #f2f9ec;
    color: #7ec050;
    &:hover {
    background-color: #7ec050;
    color: #f2f9ec;
    }
  }
  &.lz-type-warning {
    background-color: #fcf6ed;
    color: #dca550;
    &:hover {
    background-color: #dca550;
    color: #f2f9ec;
    }
  }
  &.lz-type-danger {
    background-color: #fcf0f0;
    color: #e47470;
    &:hover {
    background-color: #e47470;
    color: #f2f9ec;
    }
  }
  &.lz-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.lz-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>
