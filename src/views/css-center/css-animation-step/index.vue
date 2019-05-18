<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="阿里云-icon" name="aliyunIcon"></el-tab-pane>
      <el-tab-pane label="people-run" name="peopleRun"></el-tab-pane>
      <el-tab-pane label="京东图" name="jd"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import aliyunIcon from './aliyun-icon'
import peopleRun from './people-run'
import jd from './jd'

export default {
  components:{
    aliyunIcon,peopleRun,jd
  },
  data(){
    return {
      activeName:'aliyunIcon'
    }
  }
}
</script>

<style>

</style>
