<template>
  <div>
    <h1>使用<a href="https://github.com/micku7zu/vanilla-tilt.js" target='_blank'>vanilla-tilt.js</a></h1>
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3">
      <div class="inner"></div>
    </div>
    <div class="box box4"></div>
    <div class="jumbotron">
      <div>
        <img class="jumbotron-plant-2" src="@/assets/home/plant-2.png" />
        <img class="jumbotron-web" src="@/assets/home/web.png" />
        <img class="jumbotron-plant-1" src="@/assets/home/plant-1.png" />
        <img class="jumbotron-figure-1" src="@/assets/home/figure-1.png" />
        <img class="jumbotron-figure-2" src="@/assets/home/figure-2.png" />
      </div>
      <div class="layer1">
        <img class="jumbotron-cloud-1" src="@/assets/home/cloud-1.png" />
        <img class="jumbotron-cloud-2" src="@/assets/home/cloud-2.png" />
      </div>
      <div class="layer2">
        <img class="jumbotron-compo-1" src="@/assets/home/compo-1.png" />
        <img class="jumbotron-compo-2" src="@/assets/home/compo-2.png" />
        <img class="jumbotron-compo-3" src="@/assets/home/compo-3.png" />
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt/lib/vanilla-tilt.js";
export default {
  data() {
    return {
      a: {
        reverse: false, //反转倾斜方向
        max: 35, //最大倾斜旋转（度）
        perspective: 1000, //变换透视图,越低,倾斜越极端。
        scale: 1, // 2 = 200％,1.5 = 150％,等等。
        speed: 300, //的进入/退出过渡速度
        transition: true, //设置对进入/退出的过渡。
        axis: null, //应禁用哪个轴。可以是X或Y.
        reset: true, //如果必须在退出时重置倾斜效果。
        easing: "cubic-bezier（.03,.98,.52,.99", //在进入/退出时缓和。
        glare: false, //如果它应该有“眩光"效果
        "max-glare": 1, //最大"眩光"不透明度（1 = 100％,0.5 = 50％）
        "glare-prerender": false, //false = VanillaTilt为你创建眩光元素,否则你需要自己添加.js-tilt-glare> .js-tilt-glare-inner
        "mouse-event-element": null, // css-selector或link HTML元素将监听鼠标事件
        gyroscope: true, //布尔值启用/禁用设备方向检测,
        gyroscopeMinAngleX: -45, //这是X轴上设备角度的下限,意味着设备在此旋转如果鼠标位于元素的左边界,则会使元素倾斜;
        gyroscopeMaxAngleX: 45, //这是X轴上设备角度的上限,这意味着以此角度旋转的设备会使元素倾斜,就像鼠标位于元素的右边界一样;
        gyroscopeMinAngleY: -45, //这是Y轴上设备角度的下限,这意味着以这个角度旋转的设备会使元素倾斜,就像鼠标位于元素的顶部边界一样;
        gyroscopeMaxAngleY: 45 //这是Y轴上设备角度的上限,这意味着以这个角度旋转的设备会使元素倾斜,就像鼠标位于元素的下边界一样;
      }
    };
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".box1"));
    VanillaTilt.init(document.querySelectorAll(".box2"), {
      glare: true, //炫光
      "max-glare": 0.8 //炫光值
    });
    VanillaTilt.init(document.querySelectorAll(".box3"));
    VanillaTilt.init(document.querySelectorAll(".box4"), {
      reverse: true //反向倾斜
    });
    VanillaTilt.init(document.querySelectorAll(".jumbotron"),{
      max:3,
      perspective: 700
    });
    // VanillaTilt.init(document.querySelectorAll(".layer1"),{
    //   reverse: true //反向倾斜
    // });
    // VanillaTilt.init(document.querySelectorAll(".layer2"),{
    //   reverse: true //反向倾斜
    // });
  }
};
</script>
<style scoped>
.box {
  height: 100px;
  width: 100px;
  margin: 0 auto 20px auto;
}
.box1 {
  background-color: rgb(157, 190, 235);
}
.box2 {
  background-color: rgb(174, 157, 235);
}
.box3 {
  background-color: rgb(58, 164, 226);
  transform: perspective(1000px);
  transform-style: preserve-3d;
}
.inner {
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: #fff;
  margin: 25px 25px;
  transform: translateZ(20px);
}
.box4 {
  background-color: rgb(157, 235, 222);
}
</style>
<style lang="scss" scoped>
.layer1{
  transform: translateZ(20px);
}
.layer2{
  transform: translateZ(30px);
}
.jumbotron {
  width: 890px;
  height: 465px;
  margin: 30px auto;
  position: relative;
  transform: perspective(1000px);
  transform-style: preserve-3d;

  div {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    position: absolute;
  }

  .jumbotron-cloud-1 {
    right: 0;
    top: 0;
    height: 55px;
  }

  .jumbotron-plant-2 {
    left: 60px;
    top: 200px;
  }

  .jumbotron-web {
    height: 385px;
    top: 35px;
    left: 110px;
  }

  .jumbotron-cloud-2 {
    left: 0;
    top: 50px;
    height: 55px;
  }

  .jumbotron-compo-1 {
    left: 94px;
    height: 90px;
    top: 220px;
  }

  .jumbotron-compo-2 {
    right: 73px;
    top: 60px;
    height: 124px;
  }

  .jumbotron-compo-3 {
    right: 42px;
    top: 200px;
    height: 120px;
  }

  .jumbotron-plant-1 {
    bottom: 0;
    left: 30px;
    height: 185px;
  }

  .jumbotron-figure-1 {
    bottom: 0;
    right: 180px;
    height: 140px;
  }

  .jumbotron-figure-2 {
    bottom: 0;
    right: 10px;
    height: 68px;
  }
}
</style>

