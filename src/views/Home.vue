<template>
  <div>
    <img src="../assets/logo.png" alt="" />
    <a v-for="item in getrouters" :key="item.id" @click="goto(item.path)">{{
      item.name
    }}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getrouters"])
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style></style>
