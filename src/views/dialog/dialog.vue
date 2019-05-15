<template>
  <el-dialog title="提示" :visible.sync="dialogswitch" width="30%">
    <span>hello</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogswitch: false
    };
  },
  methods: {
    open() {
      this.dialogswitch = true;
    },
    close() {
      this.dialogswitch = false;
    },
    submit() {
      this.dialogswitch = false;
    }
  }
};
</script>

<style>
</style>
