<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Button from '../lib/Button.vue';
import 'prismjs'
import 'prismjs/themes/prism.css'
interface P {
  title: string
  component: Object
  code: string
}
const Prism = (window as any).Prism
const codeVisible = ref(false)
const showCode = () => (codeVisible.value = true)
const hideCode = () => (codeVisible.value = false)
const props = defineProps<P>()
const html = computed(() => {
  const _html = Prism.highlight(props.code, Prism.languages.html, 'html')
  return _html
})
const preRef = ref<HTMLPreElement | null>(null)
const codeRef = ref<HTMLPreElement | null>(null)
const _height = ref<number>(0)

onMounted(() => {
  _height.value = preRef.value!.clientHeight
  codeRef.value!.style.height = _height.value + 'px'
})
</script>

<template>
  <div class="demo">
    <h2>{{ props.title }}</h2>
    <div class="demo-component">
      <component :is="props.component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div ref="codeRef" class="demo-code" :class="{hidden: !codeVisible}">
      <pre ref="preRef" class="language-html" v-html="html" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    /* padding: 16px; */
    border-top: 1px dashed $border-color;
    transition: all 500ms;
    overflow: hidden;
    /* max-height: ; */
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
  .hidden {
    height: 0 !important;
    padding: 0;
    border: 0px;
  }
}
</style>
