<template>
  <div class="tinymce-editor">
    <editor v-model="myValue" :init="init"></editor>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/quickbars"; // 选中时 工具栏
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
        toolbar: false, //隐藏工具栏
        menubar: false, //隐藏菜单栏
        inline: true, //开启内联模式
        plugins: ["quickbars"], //选择需加载的插件
        //选中时出现的快捷工具，与插件有依赖关系
        quickbars_insert_toolbar: 'quickimage quicktable',//默认值 quickimage quicktable
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'//默认值bold italic | quicklink h2 h3 blockquote
      },
      myValue: "hello,world"
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {}
};
</script>