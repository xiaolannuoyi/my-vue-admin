<template>
  <div>
    <div class="title">
      <div class="inline seat1"></div>
      <div v-for="(item,index) in tangshi.title.split('')" :key="index" :id="`title-${index}`" class="inline"></div>
    </div>
    <div class="author">
      <div class="inline seat2"></div>
      <div v-for="(item,index) in tangshi.author.split('')" :key="index" :id='`author-${index}`' class="inline" ></div>
    </div>
    <div class="content">
      <div v-for="(item,index) in tangshi.line" :key='index' >
          <div v-for="(text,i) in item" :key="i" :id='`line${index}-${i}`' class="inline"></div>
      </div>
    </div>
     <el-button type='primary' @click="animatefun" :disabled="disabledBtn">重写</el-button>
  </div>
</template>

<script>
import loop from './mixin'
const HanziWriter = require("hanzi-writer");
export default {
  mixins: [loop],
  data() {
    return {
      fontsetting: {
        width: 70,
        height: 70,
        strokeColor: "#EE00FF", // 字体颜色
        strokeAnimationSpeed: 3, // 绘制每个笔画的速度(默认1)
        delayBetweenStrokes: 5 // 动画时每个笔划之间的时间(毫秒,默认1000)
      },
      tangshi:{
          title: "春晓",
            author: "孟浩然",
            line: ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声", "花落知多少"],
      },
      tangshiArr:{
          title: [],
            author: [],
            line: [],
      },
      Allarr:[],
      disabledBtn:false
      // line1:'春眠不觉晓',
      // line2:'处处闻啼鸟',
      // line3:'夜来风雨声',
      // line4:'花落知多少',

    //   titleArr: [],
    //   authorArr: [],
    //   line1Arr: [],
    //   line2Arr: [],
    //   line3Arr: [],
    //   line4Arr: []
    };
  },
  methods:{
      animatefun() {
        this.disabledBtn = true;
      let delayBetweenAnimations = 1000; // milliseconds
      this.Allarr = [].concat(this.tangshiArr.title,this.tangshiArr.author,this.tangshiArr.line.flat(1))
      this.Allarr.map(item => item.hideCharacter());
      this.loop(0, this.Allarr);
    },
  },
  mounted() {
    this.tangshi.title.split("").forEach((item, index) => {
      this.tangshiArr.title[index] = HanziWriter.create(
        `title-${index}`,
        item,
        this.fontsetting
      );
    });

    this.tangshi.author.split("").forEach((item, index) => {
      this.tangshiArr.author[index] = HanziWriter.create(
        `author-${index}`,
        item,
        this.fontsetting
      );
    });

    this.tangshi.line.forEach((item, index) => {
        this.tangshiArr.line[index] = [];
      item.split("").forEach((ele, i) => {
        this.tangshiArr.line[index][i] = HanziWriter.create(
            `line${index}-${i}`,
            ele,
            this.fontsetting
        );
        });
    });
    


  }
};
</script>

<style scoped>
.inline{
    display: inline-block;
}
.seat1{
    height: 70px;
    width: 105px;
}
.seat2{
    height: 70px;
    width: 140px;
}
</style>
