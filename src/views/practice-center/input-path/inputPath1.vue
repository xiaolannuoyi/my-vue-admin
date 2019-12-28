<template>
  <div class="path">
    <span>
      <router-link :to="prefix" class="root-link ld-link">{{ getprojectname }}</router-link>
      <span class="separator">/</span>
    </span>

    <span v-for="(item, index) in fileArr" :key="index">
      <router-link :to="item.path" class="ld-link">{{item.name}}</router-link>
      <span class="separator">/</span>
    </span>
    <span>
      <el-input v-model.trim="fileName" @input="inputfun" @keyup.native="keyup" @change="change"></el-input>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "",
      fileName:''
    };
  },
  props: {
    filePath: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: ""
    },
    getprojectname: {
      type: String,
      default: "项目名"
    }
  },
  computed: {
    fileArr() {
      let self = this;
      return this.filePath.split("/").reduce(function(pre, cur, index) {
        pre.push({
          name: cur,
          path: index == 0 ? self.prefix : pre[index - 1].path + "/" + cur
        });
        return pre;
      }, []);
    }
  },
  methods: {
    inputfun(value) {
      return this.fileName = value.replace(/^\//g, "");
    },
    keyup(event) {
      let lastchart = event.target.value.substring(
        event.target.value.length - 1
      );
      let key = event.keyCode;
      // ("/")键按下文件名变路径 但是不是顿号
      if (key === 191 && lastchart !== "、") {
        let name = this.fileName
          .substring(0, this.fileName.lastIndexOf("/"))
          .trim();
        let length = this.fileArr.length;

        this.fileArr.push({
          name: name,
          path: this.fileArr[length - 1].path + name
        });
        this.fileName = "";
      }
      //当文件名为空时，按下删除键
      if (this.flag.length === 0 && key == 8 && this.fileArr.length > 0) {
        this.fileName = this.fileArr.pop().name;
      }
      this.flag = this.fileName;
    },
    change(value){
    console.log('==',value);
    
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.path {
  display: inline-flex;
  margin-left: 5px;
  font-size: 16px;
  line-height: 40px;
  color: #586069;
  .root-link {
    font-weight: 600;
  }
  .ld-link {
    color: #0052cc;
  }
  .separator {
    // &::after,
    // &::before {
    //   content: " ";
    // }
    margin: 0 4px;
  }
}
</style>
