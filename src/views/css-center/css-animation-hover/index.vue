<template>
  <div class="css-svg">
    <el-tabs v-model="activeName">
      <el-tab-pane label="svg-line" name="ExpandLetter"></el-tab-pane>
      <el-tab-pane label="svg-button1" name="SvgButton1"></el-tab-pane>
      <el-tab-pane label="svg-button2" name="SvgButton2"></el-tab-pane>
      <el-tab-pane label="svg-button3" name="SvgButton3"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import ExpandLetter from "./ExpandLetter";
import SvgButton1 from "./SVG-Button1";
import SvgButton2 from "./SVG-Button2";
import SvgButton3 from "./SVG-Button3";
export default {
  components: {
    ExpandLetter,
    SvgButton1,
    SvgButton2,
    SvgButton3
  },
  data() {
    return {
      activeName: "ExpandLetter"
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

