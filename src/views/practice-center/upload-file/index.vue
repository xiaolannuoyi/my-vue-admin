<template>
  <el-upload
    ref="upload"
    action="a"
    :on-change="handleChange"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log("handleRemove", file, fileList);
    },
    handleChange(file, fileList) {
      console.log("handleChange");
      if(fileList.length>1){
        fileList.splice(0,1);
      }
      this.fileList[0] = file.raw;
    }
  }
};
</script>
