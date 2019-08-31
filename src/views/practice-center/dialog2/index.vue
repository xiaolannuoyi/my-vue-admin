<template>
  <div class="parent">
    <h1>我是父组件,我的数据dialog是{{dialog}}</h1>
    <el-button @click="open">打开dialog</el-button>
    <child :dialogswitch.sync="dialog" ></child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  data(){
    return{
      dialog:false
    }
  },
  components:{
      Child
  },
  methods:{
    open(){
      this.dialog = true
    },
  }
}
</script>
