<template>
  <div class="img"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.img {
  background: url(/static/css-animation/jd.png);
  width: 100px;
  height: 105px;
  background-size: 100px;
  animation: jd 1.5s steps(3, end) infinite; /* infinite无限循环播放动画. */
}
@keyframes jd {
  100% {
    background-position: 0 -314px;
  }
}
</style>
