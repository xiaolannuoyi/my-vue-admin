<template>
  <div class="parent">
    <h1>我是父组件</h1>
    <child-a ></child-a>
    <child-b ></child-b>
  </div>
</template>

<script>
import childA from "./childA";
import childB from "./childB";
export default {
  components: {
    childA,
    childB
  },
};
</script>