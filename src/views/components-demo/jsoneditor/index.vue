<template>
  <div id="jsoneditor" class="box"></div>
  
</template>


<script>
import jsoneditor from "jsoneditor";
export default {
  data() {
    return {
    };
  },
  // mounted(){
  //   let box = document.getElementById('box');
  //   let divs = box.getElementsByTagName('div');
  //   for(let i=0;i<divs.length;i++){
  //     divs[i].setAttribute("id", 'id-'+i);
  //   }
  // }
  mounted() {
    let container = document.getElementById("jsoneditor");
    let json = {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: { a: "b", c: "d" },
      String: "Hello World"
    };
    let options = {
      mode: "text",
      indentation: 2,
    };
    let editor = new jsoneditor(container, options);
    editor.set(json);
  }
  // beforeCreate(){
  //   console.log('beforeCreate');
  //   debugger
  // },
  // created(){
  //   console.log('created')
  //   debugger
  // },
  // beforeMount(){
  //   console.log('beforeMount')
  //   debugger
  // },
  // mounted(){
  //   console.log('mounted')
  //   debugger
  // },
  // beforeUpdate(){
  //   console.log('beforeUpdate')
  //   debugger
  // },
  // updated(){
  //   console.log('updated')
  //   debugger
  // },
  // beforeDestroy(){
  //   console.log('beforeDestroy')
  //   debugger
  // },
  // destroyed(){
  //   console.log('destroyed')
  //   debugger
  // },
};
</script>

<style scoped>

.box{
  width: 50%;
  height: calc(100vh - 100px);
}
</style>
