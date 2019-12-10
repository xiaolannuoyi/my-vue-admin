<template>
  <div class="about">
    <!-- <iframe id="other-iframe" src="http://192.9.210.87:10080/"></iframe> -->
    <!-- <iframe ref="iframe" id="iframe" src="http://192.168.187.238:3000/user/login?redirect_to="></iframe> -->
    <!-- <el-button @click="con">按钮</el-button>
    <iframe  ref="iframe" id="iframe" src="http://localhost:8081/"></iframe> -->
    <div id='123' v-html='html'></div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from "qs";

export default {
  data() {
    return {
      crsf: "",
      html:''
    };
  },
  methods: {
    con(){
      console.log("con", this.$refs.iframe.contentWindow.document.getElementsByTagName("meta")["viewport"]);
    }
  },
  mounted() {
    // console.log('iframe',this.$refs.iframe);
    // document.getElementsByTagName("meta")["_crsf"]

    axios.get("http://192.168.187.238:3000/user/login?redirect_to=").then(data=>{
      console.log('===',data.data);
      this.html = data.data;
    })

    // document.getElementById('123').onload('http://192.9.210.87:10080/')
  },
  updated() {
    console.log("updated");
  }
};
</script>

<style>
.about.main {
  padding: 0;
  width: 100%;
}
iframe {
  border: 0;
  width: 100%;
  height: calc(100vh - 65px);
}
.full.height {
  background-color: red;
}
</style>
