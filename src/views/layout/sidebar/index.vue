<template>
  <div>
    <el-menu
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      router
      :collapse="isCollapse"
    >
      <sidebar-item :menu="getrouters" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["getrouters", "getsidebar"]),
    isCollapse() {
      return !this.getsidebar.opened;
    }
  }
};
</script>
<style></style>
