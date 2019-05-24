<template>
  <div>
    <p>查询出所有在分页</p>
    <el-table :data="tableData" v-loading="loading" class="mytable">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <my-page ref='page' :page='page' :result='result' :tableData.sync='tableData'></my-page>
  </div>
</template>

<script>
import myPage from './page'
import { debug, debuglog } from 'util';
export default {
    components:{
        myPage
    },
  data() {
    return {
      tableData: [],
      result: [],
      loading: false,
      page: {
        totalPage: 0, //总页数
        pageSize: 5, //每页显示数量
        currentPage: 1 //当前页
      }
    };
  },
  methods: {
    init() {
      this.$serviceManger.getTableByAll().then(data => {
        this.loading = false;
        this.result = data.result;
        this.page.totalPage = this.result.length;
      });
    },
  },
  beforeMount() {
    this.loading = true;
    this.init();
  }
};
</script>

<style>
.mytable {
  width: 94%;
  margin: 0 auto;
}
</style>
