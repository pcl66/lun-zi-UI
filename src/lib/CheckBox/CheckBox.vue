<script lang="ts" setup name="XtxCheckbox">
const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits<{(event: 'update:modelValue', val: boolean): void}>()

const hClick = () => {
  console.log('点击了')
  emits('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="xtx-checkbox">
    <i @click="hClick" v-if="modelValue" class="iconfont icon-checked"></i>
    <i @click="hClick" v-else class="iconfont icon-unchecked"></i>
    <span><slot></slot></span>
  </div>
</template>

<style scoped lang="scss">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  i {
    cursor: pointer;
  }
  .icon-checked {
    color: #1dc779;
    ~ span {
      color: #1dc779;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
