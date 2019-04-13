<template>
  <div>
    <h1>默认模式</h1>
    <tinymce-default></tinymce-default>
    <h1>内联模式</h1>
    <tinymce-inline></tinymce-inline>
  </div>
</template>

<script>
import TinymceDefault from '@/components/tinymce/tinymce-default'
import TinymceInline from '@/components/tinymce/tinymce-inline'

export default {
  components: {
    TinymceDefault,TinymceInline
  },
}
</script>

<style>

</style>
