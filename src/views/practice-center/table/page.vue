<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="page.totalPage"
      :page-size="page.pageSize"
      :current-page.sync="page.currentPage"
      @current-change="current_change"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: function() {
        return {
          totalPage: 0, //总页数
          pageSize: 5, //每页显示数量
          currentPage: 1 //当前页
        };
      }
    },
    result: {
      type: Array
    },
    tableData:{
        type: Array
    }
  },
  methods: {
    current_change(currentPage,result=this.result) {
      let start = (currentPage - 1) * this.page.pageSize;
      let end = currentPage * this.page.pageSize;
      let length = result.length;
      let tableData = [];
      tableData = result.slice(start, end);
      this.$emit('update:tableData',tableData);
    }
  },
  watch:{
      result(val){
          this.page.totalPage = val.length;
          this.page.currentPage = 1;
          this.current_change(this.page.currentPage)
      }
  }
};
</script>

<style>
</style>
