<template>
  <div>
    <p>按页发送请求查询，page-size='1'</p>
    <el-table :data="tableData" v-loading="loading" class="mytable">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="page.totalPage"
      :page-size="1"
      :current-page.sync="page.currentPage"
      @current-change="init(page.currentPage,5)"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: false,
      page: {
        totalPage: 0, //总页数
        currentPage: 1 //当前页
      }
    };
  },
  methods: {
    init(currentPage,pageSize) {
      //currentPage,pageSize 
      //当前页，每页显示数量
      this.loading = true;
      this.$serviceManger.getTableByPage(currentPage,pageSize).then(data => {
        this.loading = false;
        this.page.totalPage = data.totalPage;
        this.page.currentPage = data.currentPage;
        this.tableData = data.result;
      });
    },
  },
  mounted() {
    this.init(this.page.currentPage,5);
  }
};
</script>

<style>
.mytable {
  width: 94%;
  margin: 0 auto;
}
</style>
