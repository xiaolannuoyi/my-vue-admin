<template>
  <el-input
    :placeholder="placeholder"
    v-model="searchContent"
    @keyup.enter.native="search(searchContent)"
  >
    <el-button slot="append" icon="el-icon-search" type="primary" @click="search(searchContent)"></el-button>
  </el-input>
</template>

<script>
export default {
  props: ["placeholder", "Allresult",'searchKey','result'],
  data() {
    return {
      searchContent: ""
    };
  },
  methods: {
    search(val) {
      let len = this.Allresult.length;
      let arr = [];
      let reg = new RegExp(this.searchContent);
      for (let i = 0; i < len; i++) {
        //如果字符串中不包含目标字符会返回-1
        if (this.Allresult[i][this.searchKey].match(reg)) {
          arr.push(this.Allresult[i]);
        }
      }
      this.$emit('update:result',arr)
    }
  }
};
</script>

<style>
</style>
