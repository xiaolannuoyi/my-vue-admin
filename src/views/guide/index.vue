<template>
  <div class="main-page">
    <!-- HTML <aside> 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。 -->
    <aside>
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
      <a
        href="https://github.com/kamranahmedse/driver.js"
        target="_blank"
      >driver.js.</a>
    </aside>
    <br>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      打开向导
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'
export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      nextBtnText: '下一步',
      prevBtnText: '上一步',
      doneBtnText: '完成',       
      closeBtnText: '关闭',
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
<style scoped>
.main-page{
  padding: 20px;
}
</style>
