<template>
<div>
    <div class="people"></div>
    <div class="happy"></div>
</div>
  
</template>

<script>
export default {};
</script>

<style scoped>
.people {
  background: url('../../../assets/css-animation/people.jpg');
  width: 130px;
  height: 200px;
  background-size: 520px;
  background-position: 0 0;
  animation: run 2s steps(4, start) infinite; /* infinite无限循环播放动画. */
}
@keyframes run {
  100% {
    background-position: -520px 0;
  }
}

.happy {
  background: url(../../../assets/css-animation/happy.jpg);
  width: 127.5px;
  height: 240px;
  background-size: 510px;
  background-position: 0 0;
  animation: up 2s steps(4, start) infinite; /* infinite无限循环播放动画. */
}
@keyframes up {
  100% {
    background-position: -510px 0;
  }
}
</style>
