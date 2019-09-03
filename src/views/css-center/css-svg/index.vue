<template>
  <div class="css-svg">
    <el-tabs v-model="activeName">
      <el-tab-pane label="svg-line" name="SvgLineStrokeAnimation"></el-tab-pane>
      <el-tab-pane label="svg-line" name="SvgOutline"></el-tab-pane>
      <el-tab-pane label="Svg3" name="Svg3"></el-tab-pane>
    </el-tabs>
    <component :ref="activeName" :is="activeName"></component>
  </div>
</template>

<script>
import SvgLineStrokeAnimation from "./SVG-Line-Stroke-Animation";
import SvgOutline from "./SVG-Outline";
import Svg3 from "./SVG-3";

export default {
  components: {
    SvgLineStrokeAnimation,
    SvgOutline,
    Svg3
  },
  data() {
    return {
      activeName: "SvgLineStrokeAnimation"
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

