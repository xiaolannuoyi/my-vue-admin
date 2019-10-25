<template>
  <div>
    <el-form ref="ruleForm" label-width="80px" :model="form" :rules="rules" v-loading="loading">
      <el-form-item label="模版名称" prop="templatename">
        <el-input v-model="form.templatename"></el-input>
      </el-form-item>
      <el-form-item label="模版图片" prop="file">
        <el-upload
          action="a"
          ref="upload"
          :class="{ disabled: uploadDisabled }"
          list-type="picture-card"
          :limit="1"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :auto-upload="false"
          accept="image/*"
        >
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">只能上传图片文件，且不超过100kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        templatename: "",
        file: ""
      },
      rules: {
        templatename: [{ required: true, message: "请输入正确的信息", trigger: "blur", pattern: /^[A-Za-z0-9]+$/ }],
        file: [{ required: true, message: "请上传文件", trigger: "blur" }]
      },
      loading: false,
      uploadDisabled: false,
    };
  },
  methods: {
    handleChange(file, fileList) {
      if (file.size > 1024 * 100) {
        this.$refs.upload.clearFiles();
        this.uploadDisabled = false;
        this.$message({
          message: "上传图片大小不能超过 100kb!",
          type: "error"
        });
      } else {
        this.uploadDisabled = fileList.length >= 1;
        this.form.file = file.raw; //将上传文件付给表单的字段
      }
    },
    handleRemove(file, fileList) {
      console.log("handleRemove", file);
      this.uploadDisabled = fileList.length >= 1;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log('提交请求--代码')
          this.loading = false;
        } else {
          return false;
        }
      });
    },
    reset() {
      this.$refs.upload.clearFiles();
      this.uploadDisabled = false;
      this.$refs.ruleForm.resetFields();
    }
  },
};
</script>

<style>
.disabled .el-upload--picture-card {
  display: none;
}
</style>
