<template>
  <div>
    <a href="https://github.com/ecomfe/echarts-liquidfill">水位图插件echarts-liquidfill</a>
    <div id="liquidfill-chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import liquidfill from "echarts-liquidfill";
export default {
  data() {
    return {
      initOption: {
        series: [
          {
            type: "liquidFill",
            data: [
              {
                value: 0.95,
                itemStyle: {
                  color: `rgba(51, 86, 158,0.5)`
                }
              },
              {
                value: 0.2,
                itemStyle: {
                  color: `rgba(21, 149, 235,0.5)`
                }
              }
            ],
            outline: {
              show: false
            },
            shape: "container",
            label: {
              show: false
            }
          }
        ]
      }
    };
  },
  mounted() {
    console.log("==", document.getElementById("liquidfill-chart"));
    let _chart = echarts.init(document.getElementById("liquidfill-chart"));
    _chart.setOption(this.initOption);
  }
};
</script>

<style scoped>
#liquidfill-chart {
  width: 30%;
  height: 140px;
  margin-bottom: 10px;
}
</style>