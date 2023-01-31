<script setup lang='ts'>
import { ref } from 'vue';
import DeleteSvg from '../../assets/delete.svg'

interface P {
  name?: string
  action?: string
  method?: string
  onOk: (f: File[]) => void
}
const props = defineProps<P>()

const src = ref('')
const fileLists = ref<File[]>([])
const onClickUpload = () => {
  let oInput = document.createElement('input')
  oInput.type = "file"
  oInput.accept = "image/jpg"
  oInput.multiple = true
  oInput.addEventListener('change', (e) => {
    src.value = URL.createObjectURL(oInput.files![0])
    fileLists.value = [...fileLists.value ,...Array.from(oInput.files!)]
    props.onOk(fileLists.value)
    oInput.remove()
  })
  oInput.click()
}
const hDelete = (id :number) => {
  fileLists.value.splice(id, 1)
}
</script>

<template>
<div>
  <div @click="onClickUpload">
    <slot />
  </div>
  <!-- <img :src="src" style="width: 200px"/> -->
  <transition-group name="list">
    <div v-for="(v,i) in fileLists" :key="i" class="light-item">
      <div class="light-item-name">
        {{ v.name }}
      </div>
      <span @click="hDelete(i)" class="light-item-delete">
      </span>
    </div>
  </transition-group>
  <!-- <button @click="">上传</button> -->
</div>
</template>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 500ms ease !important;
}
.list-enter-from,
.list-leave-to {
  opacity: 0 !important;
  height: 0px !important;
  transform: translateX(30px);
  margin-top: 0px !important;
}
.light-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 250ms;
  opacity: 1;
  border-radius: 6px;
  overflow: hidden;
  padding: 0 5px;
  height: 30px;
  margin-top: 5px;
  line-height: 30px;
  .light-item-name {
    font-size: 14px;
  }
  .light-item-delete {
    transition: all 250ms;
    opacity: 0;
    width: 20px;
    background-image: url('../../assets/delete.svg');
    background-size: 100% 100%;
  }
  &:hover {
    background-color: antiquewhite;
    .light-item-delete {
      opacity: 1;
    }
  }
}
</style>
