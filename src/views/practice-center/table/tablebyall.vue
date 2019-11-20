<template>
  <div>
    <p>查询出所有,再分页</p>
    <my-search placeholder="请输入搜索内容" :Allresult="Allresult" :result.sync="result" searchKey="name"></my-search>
    <el-table
      :data="tableData"
      v-loading="loading"
      class="mytable"
      @select="handleSelectionChange"
      @select-all="handleSelectionChange"
      row-key="name"
      @sort-change="sortChange"
    >
      <el-table-column type="selection" :reserve-selection="true"></el-table-column>
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable="custom"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <my-page ref="page" :result="result" :tableData.sync="tableData"></my-page>
  </div>
</template>

<script>
import myPage from "./page";
import mySearch from "./search";
export default {
  components: {
    myPage,
    mySearch
  },
  data() {
    return {
      tableData: [], //每页展示的数据
      result: [], //过滤后，展示的数据
      Allresult: [], //所有数据
      loading: false,
      multipleSelection: [],
      test: [
        {
          name: "1",
          date: "2018-01-01",
          address: "123"
        },
        {
          name: "11",
          date: "2018-01-01",
          address: "123"
        },
        {
          name: "23",
          date: "2018-01-01",
          address: "123"
        },
        {
          name: "2",
          date: "2018-01-01",
          address: "123"
        }
      ]
    };
  },
  methods: {
    init() {
      this.$serviceManger.getTableByAll().then(data => {
        this.Allresult = [];
        this.result = [];
        this.loading = false;

        this.Allresult = this.result = data.result;
      });
    },
    refresh() {
      this.init();
    },
    handleSelectionChange(selection, row) {
      this.multipleSelection = selection;
    },
    indexMethod(index) {
      let page = this.$refs["page"].page; //拿到page组件中的page对象数据
      return (page.currentPage - 1) * page.pageSize + index + 1; //index从0开始计数,所以+1
    },
    sortChange({ column, prop, order }) {
      this.sort2(column, prop, order);
    },
    //中文排序
    sort2(column, prop, order) {
      if (order == "ascending") {
        this.result.sort((a, b) => a[prop].localeCompare(b[prop], "zh"));
      } else {
        this.result.sort((a, b) => b[prop].localeCompare(a[prop], "zh"));
      }
    }
  },
  mounted() {
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
