<template>
  <!-- symbol元素用来定义一个图形模板对象，它可以用一个<use>元素实例化。
    symbol元素对图形的作用是在同一文档中多次使用，添加结构和语义。
    结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了可访问性。
  注意，一个symbol元素本身是不呈现的。只有symbol元素的实例（亦即，一个引用了symbol的 <use>元素）才能呈现。-->
  <div class="svg-line">
    <div class="box">
      <svg>
        <symbol id="text">
          <text text-anchor="middle" x="50%" y="50%">SVG TEXT</text>
        </symbol>
        <use xlink:href="#text"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
/* cyrillic-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gTD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3g3D_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gbD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gfD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gnD_vx3rCs.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>

<style scoped>
/* @import url("https://fonts.googleapis.com/css?family=Montserrat:900"); */
.box {
  min-height: calc(100vh - 99px);
  width: 100%;
  /* background-color: #fff; */
  font-family: "Montserrat", sans-serif;
  position: absolute;
}
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 350px;
}
svg text {
  font-size: 100px;
  fill: rgba(0, 0, 0, 0.1);
  stroke: #fff;
  stroke-width: 1px;
  stroke-dasharray: 30;
  stroke-linejoin: round; /*属性指明路径的转角处使用的形状或者绘制的基础形状。*/
  animation: animate 1s linear infinite;
}
@keyframes animate {
  100% {
    stroke-dashoffset: 60; /*dash模式 到 路径开始的距离*/
  }
}
</style>
