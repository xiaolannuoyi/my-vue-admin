(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5f47e42"],{"4aa4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input-path",{attrs:{fileName:t.fileName,filePath:t.filePath,prefix:"github",getprojectname:"项目名"},on:{"update:fileName":function(e){t.fileName=e},"update:file-name":function(e){t.fileName=e},"update:filePath":function(e){t.filePath=e},"update:file-path":function(e){t.filePath=e}}}),n("hr"),n("input-path",{attrs:{fileName:t.fileName,filePath:t.filePath,prefix:"github",getprojectname:"项目名",type:"input"},on:{"update:fileName":function(e){t.fileName=e},"update:file-name":function(e){t.fileName=e},"update:filePath":function(e){t.filePath=e},"update:file-path":function(e){t.filePath=e}}})],1)},i=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"path"},[n("span",[n("router-link",{staticClass:"root-link ld-link",attrs:{to:t.prefix}},[t._v(t._s(t.getprojectname))]),n("span",{staticClass:"separator"},[t._v("/")])],1),"input"==t.type?n("span",[t._l(t.fileArr,(function(e,a){return n("span",{key:a},[n("router-link",{staticClass:"ld-link",attrs:{to:e.path}},[t._v(t._s(e.name))]),n("span",{staticClass:"separator"},[t._v("/")])],1)})),n("span",[n("el-input",{attrs:{size:"mini"},on:{input:t.inputfun},nativeOn:{keyup:function(e){return t.keyup(e)}},model:{value:t.fname,callback:function(e){t.fname="string"===typeof e?e.trim():e},expression:"fname"}})],1)],2):n("span",[t._l(t.fileArr,(function(e,a){return n("span",{key:a},[a?n("span",{staticClass:"separator"},[t._v("/")]):t._e(),a!==t.fileArr.length-1?n("router-link",{staticClass:"ld-link",attrs:{to:e.path}},[t._v(t._s(e.name))]):t._e()],1)})),n("span",[n("strong",[t._v(t._s(t.fileArr[t.fileArr.length-1].name))])])],2)])},r=[],l=(n("7f7f"),n("a481"),n("28a5"),{data:function(){return{flag:"",fname:this.fileName}},props:{fileName:{type:String,default:""},filePath:{type:String,default:""},prefix:{type:String,default:""},getprojectname:{type:String,default:"项目名"},type:{type:String,default:"router"}},computed:{fileArr:function(){var t=this;return this.filePath.split("/").reduce((function(e,n,a){return e.push({name:n,path:0==a?t.prefix:e[a-1].path+"/"+n}),e}),[])}},watch:{fname:function(t){this.$emit("update:fileName",t)}},methods:{inputfun:function(t){return this.fname=t.replace(/^\//g,"")},keyup:function(t){var e=t.target.value.substring(t.target.value.length-1),n=t.keyCode;if(191===n&&"、"!==e){var a=this.fname.substring(0,this.fname.lastIndexOf("/")).trim(),i=this.fileArr.length;this.fileArr.push({name:a,path:this.fileArr[i-1].path+a}),this.$emit("update:filePath",this.fileArr.map((function(t){return t.name})).join("/")),this.fname=""}0===this.flag.length&&8==n&&this.fileArr.length>0&&(this.fname=this.fileArr.pop().name,this.$emit("update:filePath",this.fileArr.map((function(t){return t.name})).join("/"))),this.flag=this.fname}},mounted:function(){}}),u=l,s=(n("7ff2"),n("2877")),p=Object(s["a"])(u,f,r,!1,null,"717594d9",null),o=p.exports,h={components:{inputPath:o},data:function(){return{filePath:"src/home/about/aaa",fileName:""}},watch:{fileName:function(t){console.log("父组件fileName",t)},filePath:function(t){console.log("父组件filePath",t)}},methods:{},mounted:function(){}},c=h,m=Object(s["a"])(c,a,i,!1,null,"ecca9f54",null);e["default"]=m.exports},"7ff2":function(t,e,n){"use strict";var a=n("e325"),i=n.n(a);i.a},e325:function(t,e,n){}}]);
//# sourceMappingURL=chunk-e5f47e42.11614648.js.map