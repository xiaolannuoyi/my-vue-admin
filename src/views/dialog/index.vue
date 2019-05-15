<template>
  <div>
    <el-button icon="el-icon-question" type="primary" @click="opendialog">打开公共dialog</el-button>
    <p>不需要通过父子组件传递值，或者store。</p>
    <p>只需要在调用组件上添加ref,调用this.$refs.xxx.events();</p>
    <my-dialog ref="dialog"></my-dialog>
  </div>
</template>

<script>
import MyDialog from "./dialog";
export default {
  components: {
    MyDialog
  },
  methods: {
    opendialog() {
      this.$refs.dialog.open();
      // this.$refs['dialog'].open();
    }
  }
};
</script>

<style>
</style>
