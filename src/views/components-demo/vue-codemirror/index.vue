<template>
  <div class="json-editor">
    <textarea ref="textarea" v-model="value" />
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";

import "codemirror/addon/lint/lint.css"; //警告样式
import "codemirror/theme/night.css";

import "codemirror/mode/xml/xml.js";

import "codemirror/addon/hint/show-hint.js"; //hint/xml-hint.js
import "codemirror/addon/hint/xml-hint.js"; //hint/xml-hint.js

import "codemirror/addon/selection/active-line.js"; //高亮行
import "codemirror/addon/edit/matchbrackets.js"; //括号匹配

export default {
  data() {
    return {
      jsonEditor: null,
      value: ""
    };
  },
  methods: {
    completeAfter(cm, pred) {
      var cur = cm.getCursor();
      if (!pred || pred())
        setTimeout(function() {
          if (!cm.state.completionActive)
            cm.showHint({ completeSingle: false });
        }, 100);
      return CodeMirror.Pass;
    },
    completeIfAfterLt(cm) {
      return this.completeAfter(cm, function() {
        var cur = cm.getCursor();
        return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
      });
    },
    completeIfInTag(cm) {
      return this.completeAfter(cm, function() {
        var tok = cm.getTokenAt(cm.getCursor());
        if (
          tok.type == "string" &&
          (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) ||
            tok.string.length == 1)
        )
          return false;
        var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
        return inner.tagName;
      });
    }
  },
  mounted() {
    const dummy = {
      attrs: {
        color: ["red", "green", "blue", "purple", "white", "black", "yellow"],
        size: ["large", "medium", "small"],
        description: null
      },
      children: []
    };
    const tags = {
      "!top": ["top"],
      "!attrs": {
        id: null,
        class: ["A", "B", "C"]
      },
      top: {
        attrs: {
          lang: ["en", "de", "fr", "nl"],
          freeform: null
        },
        children: ["animal", "plant"]
      },
      animal: {
        attrs: {
          name: null,
          isduck: ["yes", "no"]
        },
        children: ["wings", "feet", "body", "head", "tail"]
      },
      plant: {
        attrs: { name: null },
        children: ["leaves", "stem", "flowers"]
      },
      wings: dummy,
      feet: dummy,
      body: dummy,
      head: dummy,
      tail: dummy,
      leaves: dummy,
      stem: dummy,
      flowers: dummy
    };

    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      mode: "xml",
      lineNumbers: true,
      extraKeys: {
        "'<'": this.completeAfter,
        "'/'": this.completeIfAfterLt,
        "' '": this.completeIfInTag,
        "'='": this.completeIfInTag,
        "Ctrl-Space": "autocomplete"
      },
      hintOptions: { schemaInfo: tags },

      // gutters: ["CodeMirror-lint-markers"], //CodeMirror-lint-markers是实现语法报错功能
      // theme: "night",
      // lint: true, //警告

      // smartIndent: true, //是否智能缩进
      // matchBrackets: true, //括号匹配

      // styleActiveLine: true, //高亮行
      // lineNumbers: true, //行号
      // lineWrapping: true
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