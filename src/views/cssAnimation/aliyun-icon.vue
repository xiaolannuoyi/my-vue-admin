<template>
  <div>
    <ul id="img-box">
      <li class="img" style="background-image: url(static/css-animation/1.jpg);"></li>
      <li class="img" style="background-image: url(static/css-animation/2.jpg);"></li>
      <li class="img" style="background-image: url(static/css-animation/3.jpg);"></li>
      <li class="img" style="background-image: url(static/css-animation/4.jpg);"></li>
      <li class="img" style="background-image: url(static/css-animation/5.jpg);"></li>
      <li class="img" style="background-image: url(static/css-animation/6.jpg);"></li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    let imgbox = document.getElementById("img-box");
    imgbox.addEventListener("mouseover", function(ev) {
      ev = ev || event;
      //兼容处理
      var target = ev.target || ev.srcElement; //找到li元素
      if (target.nodeName.toLowerCase() == "li") {
        target.classList.remove('slide-market21')
        target.classList.add('slide-market20')
      }
    });

    imgbox.addEventListener("mouseout", function(ev) {
      ev = ev || event;
      //兼容处理
      var target = ev.target || ev.srcElement; //找到li元素
      if (target.nodeName.toLowerCase() == "li") {
        target.classList.remove('slide-market20')
        target.classList.add('slide-market21')
      }
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
ul,li{
  list-style: none;
}
li{
  float: left;
  margin-left: 20px;
}
#img-box{
  overflow: auto;
}
.img {
  position: relative;
  height: 75px;
  width: 75px;
  margin-left:20px;
  background-size: 75px;
  background-position: 0 0;
}
.slide-market20 {
  animation: slide-market20 1s steps(59, start) forwards; /* forwards目标保持动画最后一帧的样式 */
}
.slide-market21 {
  animation: slide-market21 1s steps(59, start) forwards;
}
@keyframes slide-market20 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -4425px;//动画须停在最后一张图上 而非末尾处
  }
}
@keyframes slide-market21 {
  0% {
    background-position: 0 -4425px;
  }
  100% {
    background-position: 0 0px;
  }
}
</style>

