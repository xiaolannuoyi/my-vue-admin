<template>
  <div>
      <a href="https://github.com/ddchef/vue-code-diff">vue-code-diff</a>
    <code-diff outputFormat='side-by-side' :old-string="oldStr" :new-string="newStr" :context="10" />
  </div>
</template>


<script>
import CodeDiff from 'vue-code-diff'
export default {
  components: {CodeDiff},
  data(){
    return {
      oldStr: 'old code\nhello',
      newStr: 'new code'
    }
  }
}
</script>

<style>

</style>