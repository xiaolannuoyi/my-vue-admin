<template>
  <div>
    <a href="https://github.com/EvanHahn/HumanizeDuration.js">humanize-duration</a>
  </div>
</template>

<script>
const moment = require("moment");
const humanizeDuration = require("humanize-duration");
// moment(1411641720000).format('YYYY-MM-DD HH:mm:ss')
export default {
  data() {
    return {
      tableData: [
        {
          time: 1568619013626
        },
        {
          time: 133951
        }
      ]
    };
  },
  methods: {
    formatDuring(mss) {
      let days = Math.floor(mss / (1000 * 60 * 60 * 24));
      let hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.round((mss % (1000 * 60)) / 1000);
      return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    }
  },
  mounted() {
    moment.locale("zh-cn");
    const spanishHumanizer = humanizeDuration.humanizer({
      language: "zh_CN",
       round: true,//取消小数
       delimiter: ' ',//上一个和下一个
       conjunction: ' ',//最后一个连接符号
       serialComma: false,
       units: ['y', 'mo', 'd','h','m','s'],
       largest: 2
    });
    console.log("a.diff(b)", spanishHumanizer(moment().diff(moment(1564624800000))));
    
    console.log("spanishHumanizer(133951)", spanishHumanizer(133951));
    // console.log('===',this.formatDuring(133951));
    
  }
};
</script>

<style>
</style>