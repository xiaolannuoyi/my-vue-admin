<template>
  <div class="css-svg">
    <el-tabs v-model="activeName">
      <el-tab-pane label="shine" name="shine"></el-tab-pane>
      <el-tab-pane label="border-around" name="border-around"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import shine from "./shine";
import borderAround from "./borderaround";

export default {
  components: {
    shine,borderAround
  },
  data() {
    return {
      activeName: "shine"
    };
  }
};
</script>

<style scoped>
.svg-line {
  min-height: calc(100vh - 99px);
  width: 100%;
  margin: 0;
  padding: 0;
  background: #073146;
  font-family: sans-serif;
}
</style>
<style>
.css-svg .el-tabs__header {
  margin-bottom: 0;
}
</style>

