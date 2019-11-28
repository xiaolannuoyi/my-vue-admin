<template>
  <div class="json-editor">
    <textarea ref="textarea" v-mode="value" />
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";

import "codemirror/addon/lint/lint.css"; //警告样式
import "codemirror/theme/night.css";
require("script-loader!jsonlint");
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint"; //警告
import "codemirror/addon/lint/json-lint";
import "codemirror/addon/selection/active-line.js"; //高亮行
import "codemirror/addon/edit/matchbrackets.js"; //括号匹配

export default {
  data() {
    return {
      jsonEditor: null,
      value: ""
    };
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      mode: "application/json",
      gutters: ["CodeMirror-lint-markers"], //CodeMirror-lint-markers是实现语法报错功能
      theme: "night",
      lint: true, //警告

      smartIndent: true, //是否智能缩进
      matchBrackets: true, //括号匹配

      styleActiveLine: true, //高亮行
      lineNumbers: true, //行号
      lineWrapping: true
    });
  }
};
</script>

<style scoped>
.json-editor {
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
}
.json-editor >>> .CodeMirror-scroll {
  min-height: 300px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
</style>