<template>
  <div class="css-svg">
    <el-tabs v-model="activeName">
      <el-tab-pane label="svg-line" name="ExpandLetter"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import ExpandLetter from "./ExpandLetter";

export default {
  components: {
    ExpandLetter
  },
  data() {
    return {
      activeName: "ExpandLetter"
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

