<script setup lang='ts'>
import { reactive } from 'vue';
import CodeDiff from '../lib/CodeDiff/index.vue'

// do not use same name with ref
const leftForm = reactive({
  name: '1',
  region: '2',
  delivery: false,
  type: ['Online activities'],
  resource: '5',
  desc: '7',
})
const rightForm = reactive({
  name: '1',
  region: '2',
  delivery: false,
  type: ['Online activities'],
  resource: '5',
  desc: '6',
})

</script>

<template>
<CodeDiff :left="leftForm" :right="rightForm">
  <template #default="{formData}">
    <el-form :model="formData" label-width="120px" disabled>
        <el-form-item label="Activity name">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formData.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              v-model="formData.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="formData.date2"
              placeholder="Pick a time"
              style="width: 100%"
            />
          </el-col>
        </el-form-item> -->
        <el-form-item label="Instant delivery">
          <el-switch v-model="formData.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" v-if="formData.type">
          <el-checkbox-group v-model="formData.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="formData.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formData.desc" type="textarea" />
        </el-form-item>
      </el-form>
  </template>
</CodeDiff>
</template>

<style>

</style>
