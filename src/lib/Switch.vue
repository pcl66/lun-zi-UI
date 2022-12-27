<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    checked: boolean
    disabled?: boolean
  }>(),
  {
    checked: true,
    disabled: false
  }
)
const emit = defineEmits(['update:checked'])
const hToggle = () => {
  emit('update:checked', !props.checked)
}
</script>

<template>
  <button class="lz-switch" @click="hToggle" :disabled="disabled" :class="{ 'lz-disabled': props.disabled, 'lz-checked': props.checked }">
    <span :class="{ 'lz-checked': props.checked }"></span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.lz-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #8c8c8c;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  &.lz-checked {
    background: #3875f6;
  }
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
    > .lz-checked {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  > .lz-checked {
    left: calc(100% - #{$h2} - 2px);
  }
}
.lz-disabled {
  cursor: no-drop;
  background: #8c8c8c;
  &:active {
    > span {
      width: $h2;
    }
  }
  &.lz-checked {
    background: #7ea6f9;
  }
}
</style>
