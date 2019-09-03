<template>
  <div class="svg-line">
    <div class="box">
      <div class="content"></div>
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
  padding: 10px;
}
.content {
  height: 96px;
  width: 128px;
  background-color: #fff;
  color:#fff;
}
.box::before {
    content: '';
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
    border: 2px solid #cd0000;
    animation: borderAround 1.5s infinite linear;    
}
@keyframes borderAround {
    0%, 100% { clip: rect(0 148px 2px 0); }
    25% { clip: rect(0 148px 116px 146px); }
    50% { clip: rect(114px 148px 116px 0); }
    75% { clip: rect(0 2px 116px 0); }
}
</style>
