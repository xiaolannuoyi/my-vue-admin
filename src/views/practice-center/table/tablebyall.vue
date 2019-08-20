<template>
  <div>
    <p>查询出所有,再分页</p>
    <my-search placeholder='请输入搜索内容' :Allresult='Allresult' :result.sync='result' searchKey='name'></my-search>
    <el-table :data="tableData" v-loading="loading" class="mytable" @select="handleSelectionChange"
        @select-all='handleSelectionChange' row-key="name">
      <el-table-column type='selection' :reserve-selection='true' width="180"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <my-page ref='page' :result='result' :tableData.sync='tableData'></my-page>
    <el-button @click="refresh">刷新</el-button>
  </div>
</template>

<script>
import myPage from './page'
import mySearch from './search'
import { debug, debuglog } from 'util';
import { constants } from 'crypto';
export default {
    components:{
        myPage,mySearch
    },
  data() {
    return {
      tableData: [],//每页展示的数据
      result: [],//过滤后，展示的数据
      Allresult:[],//所有数据
      loading: false,
      multipleSelection:[],
      test:[
        {
          name:'刘三',
          address:"北京"
        },
        {
          name:'刘一',
          address:"北京"
        },
        {
          name:'刘二',
          address:"北京"
        }
      ]
    };
  },
  methods: {
    init() {
      this.$serviceManger.getTableByAll().then(data => {
        this.Allresult=[];
        this.result = [];
        this.loading = false;

        this.Allresult = this.result = data.result;
        this.result.push(...this.test);
      console.log('--333--',this.multipleSelection.length)

      });
    },
    refresh(){
      this.init();
    },
    handleSelectionChange(selection, row) {
      this.multipleSelection = selection;
      console.log('----',this.multipleSelection.length)
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
