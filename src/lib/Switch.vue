<script setup lang="ts">
const props = defineProps<{
  checked: boolean
}>()
const emit = defineEmits(['update:checked'])
const hToggle = () => {
  emit('update:checked', !props.checked)
}
</script>

<template>
  <button @click="hToggle">
    <span :class="{ checked: props.checked }"></span>
  </button>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &:active {
    > .checked {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  > .checked {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
