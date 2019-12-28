<template>
  <div>
    <input-path
      :fileName.sync="fileName"
      :filePath.sync="filePath"
      prefix="github"
      getprojectname="项目名"
    ></input-path>
    <hr>
    <input-path
      :fileName.sync="fileName"
      :filePath.sync="filePath"
      prefix="github"
      getprojectname="项目名"
      type='input'
    ></input-path>
  </div>
</template>

<script>
import inputPath from "./inputPath";
export default {
  components: {
    inputPath
  },
  data() {
    return {
      filePath: "src/home/about/aaa",
      fileName: ""
    };
  },
  watch: {
    fileName(val) {
      console.log("父组件fileName", val);
    },
    filePath(val) {
      console.log("父组件filePath", val);
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>