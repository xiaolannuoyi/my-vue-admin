<template>
    <a href>
      <svg>
        <rect></rect>
      </svg>
      Button
    </a>
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
  color: #fff;
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
    stroke: #fff;
    stroke-width: 4;
    transition: 1s;
    stroke-dasharray: 500,500;//500 大于周长 所以是实线
    stroke-dashoffset: 0;//dash模式到路径开始的距离
  }
}
a:hover svg rect{
  stroke-dashoffset: 220;//dash模式到路径开始的距离
  stroke-dasharray: 100,400;//虚线
  stroke: #00bcd4;
}
</style>
