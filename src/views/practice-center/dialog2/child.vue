<template>
  <el-dialog title="提示" :visible.sync="show" @close='handleclose' width="30%">
    <span slot="footer" class="dialog-footer">
      <el-button @click="closebtn">取 消</el-button>
      <el-button type="primary" @click="submitbtn">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'child',
  props: ['dialogswitch'],
  data(){
      return {
          show: this.dialogswitch,
      }
  },
  watch:{
      dialogswitch(val){
          this.show = val;
      },
  },
  methods:{
      handleclose(){
          this.$emit('update:dialogswitch',false)
      },
      closebtn(){
          this.show = false;
        //   this.$emit('update:dialogswitch',false)
      },
      submitbtn(){
          console.log('确定');
      }
  }
}
</script>
