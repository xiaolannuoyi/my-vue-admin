<template>
<div class="svg-line">
    <a href>
      <svg>
        <rect></rect>
      </svg>
      Button
    </a>
</div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
a{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 180px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-family: sans-serif;
  text-transform: uppercase;//所有字符转成大写 
  font-size: 24px;
  letter-spacing: 2px;
  color: #000;
  text-decoration: none;
  
  svg,svg rect{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  svg rect{
    stroke: #000;
    stroke-width: 4;
    // transition: 1.5s;
    stroke-dasharray: 480;//500 大于周长 所以是实线
    stroke-dashoffset: 480;//dash模式 到 路径开始的距离
    animation: animate 1.5s linear infinite;
  }
  
}
@keyframes animate {
  0% {
    stroke-dashoffset: 480; //可以指定绘制虚线时的起始位置偏移
  }
  100% {
    stroke-dashoffset: 0;
  }
}
// a:hover svg rect{
//   stroke-dashoffset: 0;//dash模式到路径开始的距离
// }
// a:hover{
//     background: #ff0;
//     transition-delay: 1.5s;
// }
</style>
