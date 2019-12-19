<template>
  <div>
    <div style="height:300px"></div>
    <el-scrollbar
      wrapClass="warp"
      viewClass="view"
      class="box"
      wrapStyle
      viewStyle
      :native="false"
      :noresize="true"
      tag="ul"
    >
        <li v-for="item in num" :key="item">{{item}}</li>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 40
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.box{
    width: 200px;
}
.warp {
  max-height: 200px;
  color: red;
}
.view {
}
</style>