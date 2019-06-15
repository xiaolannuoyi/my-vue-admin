<template>
  <div>
    <el-steps :space="200" :active="active" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <component :ref="activeName" :is="activeName"></component>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
import step1 from "./step1";
import step2 from "./step2";
import step3 from "./step3";
export default {
  components: {
    step1,
    step2,
    step3
  },
  data() {
    return {
      active: 0,
      activeName: "step1",
      stepArr: ["step1", "step2", "step3"]
    };
  },

  methods: {
    next() {
      this.active++;
      if (this.active > 2) {
        return
      }
      this.activeName = this.stepArr[this.active];
    }
  }
};
</script>

<style>
</style>
