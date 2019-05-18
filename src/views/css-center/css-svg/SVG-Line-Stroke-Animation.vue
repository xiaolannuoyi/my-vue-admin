<template>
  <div class="svg-line">
    <div class="box">
      <svg>
        <rect></rect>
      </svg>
      <div class="content">
        <h1>SVG Stroke Animation Effects</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 400px;
  background: #001e2d;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  .content {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 2px solid #ffeb3b;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    h1 {
      margin: 0 0 10px;
      padding: 0;
      font-size: 30px;
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  svg,
  svg rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  svg rect {
    stroke: #0093ff; //轮廓
    stroke-width: 4; //轮廓宽度
    stroke-dasharray: 400; //虚线
    animation: animate 3s linear infinite;
  }
}
@keyframes animate {
  0% {
    stroke-dashoffset: 800; //可以指定绘制虚线时的起始位置偏移
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
