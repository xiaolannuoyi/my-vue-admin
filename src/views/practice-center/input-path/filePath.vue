<template>
  <div class="path" v-if="FilePath.length > 0">
    <span>
      <router-link :to="`/project/code/look`" class="root-link ld-link">{{ getprojectname }}</router-link>
      <span class="separator">/</span>
    </span>

    <span v-for="(item, index) in FilePath" :key="index">
      <span v-if="index" class="separator">/</span>
      <router-link :to="`/project/code/look/${item.path}`" class="ld-link" v-if="index !== FilePath.length - 1">{{
        item.name
      }}</router-link>
    </span>
    <span>
      <strong>{{ FilePath[FilePath.length - 1].name }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["FilePath", "getprojectname"],
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.path {
  display: inline-flex;
  margin-left: 5px;
  font-size: 16px;
  line-height: 30px;
  color: #586069;
  .root-link {
    font-weight: 600;
  }
  .ld-link {
    color: #0052cc;
  }
  .separator {
    margin: 0 4px;
  }
}
</style>
