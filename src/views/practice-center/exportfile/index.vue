<template>
  <div>
    <p>文本格式xxxx=xxxxx</p>
    <div>
      TERM_SESSION_ID=w0t0p0:FBF242DC-474F-4B8C-92A5-B4130757683B<br>
      SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.lNCwlxtCvN/Listeners<br>
      Apple_PubSub_Socket_Render=/private/tmp/com.apple.launchd.KBiSpwokys/Render<br>
      COLORFGBG=7;0<br>
      ITERM_PROFILE=Default<br>
      XPC_FLAGS=0x0<br>
    </div>

    <el-button size="small" type="primary" class="button">
      选取文件
      <input type="file" class="file" @change="getfilename">
    </el-button>
    <span>{{filename}}</span>

    <el-form ref="myform" :model="myform" label-width="80px">
      <template slot-scope="props">
        <el-row :gutter="20" v-for="(item, index) in myform.envGroup" :key="index">
          <el-col :span="10">
            <el-form-item label="key" :prop="'envGroup.' + index + '.key'">
              <el-input v-model="item.key"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="value" :prop="'envGroup.' + index + '.val'">
              <el-input v-model="item.val"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myform: {
        envGroup: [{ key: "", val: "" }]
      },
      filename: ""
    };
  },
  methods: {
    getfilename(event) {
      console.log("==", event.target.files);
      const files = event.target.files;
      let self = this;

      if (files && files.length > 0 && files[0].size > 0) {
        this.filename = files[0].name;
        console.log("filename", this.filename);
        //下面这一句相当于JQuery的：var file =$("#upload").prop('files')[0];

        if (window.FileReader) {
          let reader = new FileReader();
          // 包含中文内容用gbk编码
          reader.readAsText(files[0], "utf8");

          reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
              // console.log('文件内容',evt.target.result);
              // this.filetext = evt.target.result;
              self.getcontent(evt.target.result);
            }
          };
        }
      }
    },
    getcontent(text) {
      console.log(text);
      let reg = new RegExp("\n", "g");
      let a = text.replace(reg, ",");

      let arr = a.split(",");
      let self = this;
      arr.forEach(item => {
        let len = item.length;
        let index = item.indexOf("=");
        console.log("---", item);
        console.log("11", item.slice(0, index), item.slice(index + 1));

        self.myform.envGroup.push({
          key: item.slice(0, index),
          val: item.slice(index + 1)
        });
      });
    }
  }
};
</script>

<style>
.button{
  position: relative;
}
.file {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}
</style>
