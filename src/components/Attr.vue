<script setup lang="ts">
interface P {
  title?: string
  columns: Object
  data: Object
}
const props = withDefaults(defineProps<P>(), {
  title: 'Attributes'
})
</script>

<template>
  <div class="lz-attr">
    <h2>{{title}}</h2>
    <table class="attr-table">
      <thead>
      <tr>
        <th class="lz-attr-title" v-for="(item,index) in props.columns">{{ (item as any).title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in props.data">
        <td class="lz-attr-title td" v-for="(value,key) in item">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.lz-attr {
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .lz-attr-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  .td {
    color: #606266;
  }
}
</style>