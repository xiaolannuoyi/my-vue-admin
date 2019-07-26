<template>
  <div>
    <h1>你好,{{name}}</h1>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    getmessage(name) {
      this.$serviceManger.getTest(name).then(data => {
        this.name = data.result;
      });
    }
  },
  watch: {
    $route(to, from) {
      console.log("路由变化", to.path);
      Object.assign(this.$data, this.$options.data())
      if (to.path == "/practice-center/path1") {
        this.getmessage("admin");
      } else {
        this.getmessage("student");
      }
    }
  },
  mounted() {
    let start = window.location.href.lastIndexOf("/");
    let path = window.location.href.slice(start + 1);
    if (path == "path1") {
      console.log("path1");
      this.getmessage("admin");
    } else {
      console.log("path2");
      this.getmessage("student");
    }
  }
};
</script>

<style>
</style>
