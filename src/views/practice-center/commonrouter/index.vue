<template>
  <div>你好,{{name}}</div>
</template>

<script>
import serviceManger from "@/service/index";

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    getmessage(name) {
      serviceManger.getTest(name).then(data => {
        this.name = data.result;
      });
    }
  },
  watch: {
    $route(to, from) {
      console.log("路由变化", to.path);
      if (to.path == "/practice/path1") {
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
