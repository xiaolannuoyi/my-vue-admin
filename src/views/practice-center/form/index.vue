<template>
  <div>
    <el-button type="primary" @click="dialog = true">dialog</el-button>


    <el-dialog title="新建" :visible.sync="dialog">
      <el-form ref="formdata" :model="formdata" label-width="100px" :rules="rule">
        <el-form-item prop="type" label="类型">
          <el-select v-model="formdata.type" placeholder="请选择" class="select-width">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="formdata.type == 1" prop="username" label="username">
          <el-input v-model="formdata.username" placeholder="请输入" type="string" />
        </el-form-item>
        <el-form-item v-if="formdata.type == 1" prop="password" label="password">
          <el-input v-model="formdata.password" placeholder="请输入" type="string" />
        </el-form-item>
        <el-form-item v-if="formdata.type == 2" prop="privatekeycontent" label="私钥">
          <el-input
            v-model="formdata.privatekeycontent"
            type="textarea"
            placeholder="请输入私钥"
            resize="none"
            :autosize="{ minRows: 6, maxRows: 20 }"
          />
        </el-form-item>
        <el-form-item prop="description" label="描述">
          <el-input
            v-model="formdata.description"
            type="textarea"
            placeholder="请输入描述"
            resize="none"
            :autosize="{ minRows: 6, maxRows: 20 }"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      formdata: {
        type: "1",
        username: "",
        passwprd: "",
        privatekeycontent: "",
        description: ""
      },
      typeList: [
        {
          label: "Username with password",
          value: "1"
        },
        {
          label: "SSH Username with private key",
          value: "2"
        }
      ],
      rule: {
        username: [{ required: true, trigger: "blur", message: "不能为空" }],
        password: [{ required: true, trigger: "blur", message: "不能为空" }],
        privatekeycontent: [
          { required: true, trigger: "blur", message: "不能为空" }
        ],
        description: [{ required: true, trigger: "blur", message: "不能为空" }]
      }
    };
  },
  methods: {
    confirm() {
      this.$refs.formdata.validate(vaild => {
        if (vaild) {
          this.$message({
            message: "创建成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "请填写正确的信息",
            type: "warning"
          });
        }
      });
    }
  }
};
</script>

<style>
</style>