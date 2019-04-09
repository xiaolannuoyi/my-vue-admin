<template>
  <div>
    <h1>使用<a href="https://github.com/Leopoldthecoder/Perspective" target='_blank'>perspective.js</a></h1>
    <div class="jumbotron">
      <div>
        <img class="jumbotron-plant-2" src="@/assets/home/plant-2.png" />
        <img class="jumbotron-web" src="@/assets/home/web.png" />
        <img class="jumbotron-plant-1" src="@/assets/home/plant-1.png" />
        <img class="jumbotron-figure-1" src="@/assets/home/figure-1.png" />
        <img class="jumbotron-figure-2" src="@/assets/home/figure-2.png" />
      </div>
      <div data-hover-layer="0">
        <img class="jumbotron-cloud-1" src="@/assets/home/cloud-1.png" />
        <img class="jumbotron-cloud-2" src="@/assets/home/cloud-2.png" />
      </div>
      <div data-hover-layer="1">
        <img class="jumbotron-compo-1" src="@/assets/home/compo-1.png" />
        <img class="jumbotron-compo-2" src="@/assets/home/compo-2.png" />
        <img class="jumbotron-compo-3" src="@/assets/home/compo-3.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { Hover } from "perspective.js";
export default {
  mounted() {
      new Hover('.jumbotron', { // eslint-disable-line
      max: 3,
      scale: 1,
      perspective: 700,
      layers: [
        {
          multiple: 0.01,
          reverseTranslate: true
        },
        {
          multiple: 0.02,
          reverseTranslate: true
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped>
.jumbotron {
  width: 890px;
  height: 465px;
  margin: 30px auto;
  position: relative;

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
