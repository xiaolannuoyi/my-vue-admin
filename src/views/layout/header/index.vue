<template>
  <div class="header">
    <i
      :class="[
        getsidebar.opened ? 'el-icon-caret-right' : 'el-icon-caret-left',
        'icon'
      ]"
      @click="toggleSideBar"
    ></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  },
  computed: {
    ...mapGetters(["getsidebar"])
  }
};
</script>

<style>
.header {
  width: 100%;
  background-color: #ccc;
  height: 60px;
}
.icon {
  font-size: 40px;
  margin-top: 10px;
}
</style>
