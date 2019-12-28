<template>
<div>
    <router-link to='https://github.com/markedjs/marked'>marked</router-link>
    <div id='content'></div>
    <hr>
    <router-link to='https://github.com/markedjs/marked'>marked</router-link>
   <VueShowdown markdown="# hello"/>
</div>
  
</template>

<script>
import marked from 'marked/marked.min.js'
import {VueShowdown} from 'vue-showdown'
export default {
    components:{
        VueShowdown
    },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
      document.getElementById('content').innerHTML =
      marked('# Marked in the browser\n\nRendered by **marked**.');
  }
}

</script>
<style scoped>
</style>