<template>
  <div>
    <h1>
      <ruby>
        你
        <rt>ní</rt>
      </ruby>
      <ruby>
        好
        <rt>hǎo</rt>
      </ruby>
    </h1>
    <h2> <a href="https://chanind.github.io/hanzi-writer/docs.html" >汉字作家</a> </h2>
    <!-- 你 -->
    <!-- <div id="character-ni"></div> -->
    <div id="character-target-div">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" id="character-ni">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#DDD"></line>
        <line x1="100" y1="0" x2="0" y2="100" stroke="#DDD"></line>
        <line x1="50" y1="0" x2="50" y2="100" stroke="#DDD"></line>
        <line x1="0" y1="50" x2="100" y2="50" stroke="#DDD"></line>
      </svg>
    </div>
    <el-button type='primary' @click="animatefun1">笔顺</el-button>
    <hr>
    <h2>循环</h2>
    <div id="character-target-div">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" id="character-xun">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#DDD"></line>
        <line x1="100" y1="0" x2="0" y2="100" stroke="#DDD"></line>
        <line x1="50" y1="0" x2="50" y2="100" stroke="#DDD"></line>
        <line x1="0" y1="50" x2="100" y2="50" stroke="#DDD"></line>
      </svg>
    </div>
    <hr>
    <h2>顺序书写</h2>
    <!-- liujinyuan -->
    <div class="box">
      <div v-for="(item,index) in myNametext.split('')" :key="index" >
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" :id="`character-target-${index}`">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#DDD"></line>
        <line x1="100" y1="0" x2="0" y2="100" stroke="#DDD"></line>
        <line x1="50" y1="0" x2="50" y2="100" stroke="#DDD"></line>
        <line x1="0" y1="50" x2="100" y2="50" stroke="#DDD"></line>
      </svg>
      </div>
    </div>
    <el-button type='primary' @click="animatefun2" :disabled="disabledBtn">Start</el-button>
    <!-- 测试 -->
    <div class="box">
      <div id="character-target-test"></div>
    </div>
    <el-button type='primary' @click="animatefun3">重写</el-button>
    <tang-shi></tang-shi>
  </div>
</template>

<script>
const HanziWriter = require("hanzi-writer");
import loop from './mixin'
import tangShi from './tangs'
export default {
  mixins: [loop],
  components:{
    tangShi
  },
  data() {
    return {
      nitext: "",
      xun:'',
      myNametext: "潇蓝诺依",
      myName: [],
      test:'',
      disabledBtn:false,
    };
  },
  methods: {
    animatefun1() {
      this.nitext.animateCharacter();
    },
    animatefun2() {
      this.disabledBtn = true;
      let delayBetweenAnimations = 1000; // milliseconds
      this.myName.map(item => item.hideCharacter());
      this.loop(0, this.myName);
    },
    animatefun3() {
      this.test.quiz();
    }
  },
  mounted() {
    
    this.nitext = HanziWriter.create("character-ni", "爽", {
      width: 100,
      height: 100,
      padding: 20,
      strokeColor: "#EE00FF", // 字体颜色
      radicalColor: "#168F16", // 偏旁颜色
      showOutline: true, //是否显示轮廓
      strokeAnimationSpeed: 3, // 绘制每个笔画的速度(默认1)
      delayBetweenStrokes: 100, // 动画时每个笔划之间的时间(毫秒,默认1000)
    });

    this.xun = HanziWriter.create("character-xun", "循", {
      width: 100,
      height: 100,
      padding: 20,
      strokeColor: "#EE00FF", // 字体颜色
      radicalColor: "#168F16", // 偏旁颜色
      showOutline: true, //是否显示轮廓
      strokeAnimationSpeed: 3, // 绘制每个笔画的速度(默认1)
      delayBetweenStrokes: 100, // 动画时每个笔划之间的时间(毫秒,默认1000)
      delayBetweenLoops: 300//循环动画
    });
    this.xun.loopCharacterAnimation()
    //
    let a = this.myNametext.split("");
    a.forEach((item, index) => {
      this.myName[index] = HanziWriter.create(
        `character-target-${index}`,
        item,
        {
          width: 100,
          height: 100,
          padding: 20,
          strokeColor: "#EE00FF", // 字体颜色
          radicalColor: "#168F16", // 偏旁颜色
          showOutline: true, //是否显示轮廓
          strokeAnimationSpeed: 3, // 绘制每个笔画的速度(默认1)
          delayBetweenStrokes: 10 // 动画时每个笔划之间的时间(毫秒,默认1000)
        }
      );
    });
    //手写
    this.test = HanziWriter.create("character-target-test", "测", {
      width: 100,
      height: 100,
      padding: 20,
      showCharacter: false,
    });
    this.animatefun3()
    
  }
};
</script>

<style scoped>
.box {
  display: flex;
}
.character-ni {
  border: 1px solid #ccc;
}
*[id^="character-target-"] {
  border: 1px solid #ccc;
  width: 102px;
  height: 102px;
  margin-right: 5px;
  flex-shrink: 0;
}
</style>
