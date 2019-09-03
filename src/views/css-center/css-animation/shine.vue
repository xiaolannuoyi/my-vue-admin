<template>
  <div class="svg-line">
    <div class="box">
      <div class="content"><a href="https://www.zhangxinxu.com/wordpress/2018/08/css-gradient-dashed-border/">参考链接</a></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  background: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 3px,
    #fff 3px,
    #fff 8px
  );
  animation: shine 1s infinite linear;
  overflow: hidden;
}
.content {
  height: 128px;
  margin: 1px;
  padding: 10px;
  background-color: #073146;
  color:#fff;
}
@keyframes shine {
  0% {
    background-position: -1px -1px;
  }
  100% {
    background-position: -12px -12px;
  }
}
a{
  color: #fff;
}
</style>
