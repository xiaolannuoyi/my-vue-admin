<template>
  <div class="css-svg">
    <el-tabs v-model="activeName">
      <el-tab-pane label="按页查询" name="tablebypage"></el-tab-pane>
      <el-tab-pane label="查询所有" name="tablebyall"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import tablebypage from "./tablebypage";
import tablebyall from './tablebyall'

export default {
  components: {
    tablebypage,tablebyall
  },
  data() {
    return {
      activeName: "tablebypage"
    };
  }
};
</script>

<style scoped>
</style>
<style>
.css-svg .el-tabs__header {
  margin-bottom: 0;
}
</style>

