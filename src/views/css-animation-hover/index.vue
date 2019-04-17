<template>
<div class="css-svg">
   <el-tabs v-model="activeName">
    <el-tab-pane label="svg-line" name="first">
      <div class="svg-line">
        <expand-letter></expand-letter>
      </div>
    </el-tab-pane>
    <el-tab-pane label="svg-line" name="fourth">
       <div class="svg-line">
        <h1 style="color:#fff;">测试travis-ci</h1>
      </div>
    </el-tab-pane>
    <!-- <el-tab-pane label="svg-button1" name="second">
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
    </el-tab-pane>  -->
  </el-tabs>
</div>
 
</template>

<script>
import ExpandLetter from "./ExpandLetter";

export default {
  components: {
    ExpandLetter
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 99px);
    margin: 0;
    padding: 0;
    background :#333;
    font-family: sans-serif;
}
</style>
<style>
.css-svg .el-tabs__header{
  margin-bottom: 0;
}
</style>

