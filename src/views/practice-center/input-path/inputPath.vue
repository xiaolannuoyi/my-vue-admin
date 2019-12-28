<template>
  <div class="path">
    <span>
      <router-link :to="prefix" class="root-link ld-link">{{ getprojectname }}</router-link>
      <span class="separator">/</span>
    </span>
    <!-- 输入框模式 -->
    <span v-if="type == 'input'">
      <span v-for="(item, index) in fileArr" :key="index">
        <router-link :to="item.path" class="ld-link">{{item.name}}</router-link>
        <span class="separator">/</span>
      </span>
      <span >
        <el-input v-model.trim="fname" @input="inputfun" size='mini' @keyup.native="keyup"></el-input>
      </span>
    </span>
    <!-- 路由模式 -->
    <span v-else>
      <span v-for="(item, index) in fileArr" :key="index">
        <span class="separator" v-if="index">/</span>
        <router-link
          :to="item.path"
          class="ld-link"
          v-if="index !== fileArr.length - 1"
        >{{item.name}}</router-link>
      </span>
      <span>
        <strong>{{ fileArr[fileArr.length - 1].name }}</strong>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "",
      fname: this.fileName
    };
  },
  props: {
    fileName: {
      type: String,
      default: ""
    },
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
    },
    type: {
      type: String,
      default: "router" //router 为路由模式，input 为输入框模式
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
  watch: {
    fname(value) {
      this.$emit("update:fileName", value);
    }
  },
  methods: {
    inputfun(value) {
      return (this.fname = value.replace(/^\//g, ""));
    },
    keyup(event) {
      let lastchart = event.target.value.substring(
        event.target.value.length - 1
      );
      let key = event.keyCode;
      // ("/")键按下文件名变路径 但是不是顿号
      if (key === 191 && lastchart !== "、") {
        let name = this.fname.substring(0, this.fname.lastIndexOf("/")).trim();
        let length = this.fileArr.length;

        this.fileArr.push({
          name: name,
          path: this.fileArr[length - 1].path + name
        });
        this.$emit(
          "update:filePath",
          this.fileArr.map(item => item.name).join("/")
        );

        this.fname = "";
      }
      //当文件名为空时，按下删除键
      if (this.flag.length === 0 && key == 8 && this.fileArr.length > 0) {
        this.fname = this.fileArr.pop().name;
        this.$emit(
          "update:filePath",
          this.fileArr.map(item => item.name).join("/")
        );
      }
      this.flag = this.fname;
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
  span{
      display: inline-block;
  }
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
