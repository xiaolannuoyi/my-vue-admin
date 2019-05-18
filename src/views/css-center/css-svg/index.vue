<template>
<div class="css-svg">
   <el-tabs v-model="activeName">
    <el-tab-pane label="svg-line" name="first">
      <div class="svg-line">
        <svg-line-stroke-animation></svg-line-stroke-animation>
      </div>
    </el-tab-pane>
    <el-tab-pane label="svg-line" name="fourth">
       <div class="svg-line">
        <svg-outline></svg-outline>
      </div>
    </el-tab-pane>
    <el-tab-pane label="svg-button1" name="second">
      <div class="svg-line">
        <svg-button1></svg-button1>
      </div>
    </el-tab-pane>
    <el-tab-pane label="svg-button2" name="third">
      <div class="svg-line">
        <svg-button2></svg-button2>
      </div>
    </el-tab-pane>
    <el-tab-pane label="svg-button3" name="fifth">
      <div class="svg-line">
        <svg-button3></svg-button3>
      </div>
    </el-tab-pane>
  </el-tabs>
</div>
 
</template>

<script>
import SvgLineStrokeAnimation from "./SVG-Line-Stroke-Animation";
import SvgOutline from './SVG-Outline'
import SvgButton1 from "./SVG-Button1";
import SvgButton2 from "./SVG-Button2";
import SvgButton3 from "./SVG-Button3";

export default {
  components: {
    SvgLineStrokeAnimation,SvgOutline,SvgButton1,SvgButton2,SvgButton3
  },
  data(){
    return {
      activeName:'first'
    }
  }
};
</script>

<style scoped>
.svg-line{
    min-height: calc(100vh - 99px);
    width: 100%;
    margin: 0;
    padding: 0;
    background :#073146;
    font-family: sans-serif;
}
</style>
<style>
.css-svg .el-tabs__header{
  margin-bottom: 0;
}
</style>

