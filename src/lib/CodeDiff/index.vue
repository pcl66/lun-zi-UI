<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import {cloneDeep} from 'lodash'

const props = defineProps<{
  left?: Object
  right?: Object
}>()

const leftFormRef = ref<HTMLElement | null>(null)
const rightFormRef = ref<HTMLElement | null>(null)

let leftData: Object = {}
let rightData: Object = {}

let leftKeys: string[] = []
let rightKeys: string[] = []
let allKeys: string[] = []


const init = () => {
  if(!props.left || !props.right) throw new Error('left or right is required')
  leftData = cloneDeep(props.left)
  Object.keys(leftData).forEach(k => {
    leftData[k] = {value: leftData[k], isDiff: false}
  })

  rightData = cloneDeep(props.right)
  Object.keys(rightData).forEach(k => {
    rightData[k] = {value: rightData[k], isDiff: false}
  })
  leftKeys = leftData && Object.keys(leftData)
  rightKeys = rightData && Object.keys(rightData)
  allKeys = [...new Set([...leftKeys, ...rightKeys])]

  allKeys.forEach(k => {
    if(leftData[k]?.value !== rightData[k]?.value) {
      if(leftData[k]) {
        leftData[k].isDiff = true
      }
      if(rightData[k]) {
        rightData[k].isDiff = true
      }
    }
  })

}



// console.log(leftData, rightData)

const handleDiff = () => {
  const leftForm = leftFormRef.value
  const rightForm = rightFormRef.value
  if (!leftForm || !rightForm) return
  const leftFormItems = Array.from(leftForm.querySelectorAll('.el-form-item__content'))
  const rightFormItems = Array.from(rightForm.querySelectorAll('.el-form-item__content'))
  allKeys?.forEach((k, i) => {
    if(leftData[k]?.isDiff) {
      console.log('i', i)
      console.log(leftFormItems[i])
      leftFormItems[i].classList.add('is-diff')
    }
    if(rightData[k]?.isDiff) {
      rightFormItems[i].classList.add('is-diff')
    }
  })
}

onMounted(() => {
  // console.log(leftFormRef.value)
  // console.log(rightFormRef.value)
  init()
  handleDiff()
})

</script>

<template>
<div class="diff-content">
  <div class="left" ref="leftFormRef">
    <slot :form-data="props.left"/>
  </div>
  <div class="right" ref="rightFormRef">
    <slot :form-data="props.right"/>
  </div>
</div>
</template>

<style lang="scss">
.diff-content {
  display: flex;
  justify-content: space-between;
  .left {
    width: 50%;
    .el-form-item {
      .el-form-item__content.is-diff::before {
        position: absolute;
        content: '';
        top: -7px;
        left: -7px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        display: block;
        border: 2px dotted red;
      }
    }
  }
  .right {
    width: 50%;
    .el-form-item {
      .el-form-item__content.is-diff::before {
        position: absolute;
        content: '';
        top: -7px;
        left: -7px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        display: block;
        border: 2px dotted skyblue;
      }
    }
  }
}
</style>
