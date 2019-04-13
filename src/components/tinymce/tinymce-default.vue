<template>
  <div class="tinymce-editor">
    <editor v-model="myValue" :init='init'></editor>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
export default {
  components: {
    Editor
  },
  data() {
    return {
      init: {
        skin_url: "static/tinymce/skins/ui/oxide",
        language_url: "static/tinymce/langs/zh_CN.js",
        language: "zh_CN",
      },
      myValue:'hello,world'
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
  },
};
</script>