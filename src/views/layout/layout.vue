<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar"></sidebar>
    <div class="main">
      <my-header></my-header>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar/";
import MyHeader from "./header/";
import { mapGetters } from "vuex";

export default {
  components: { sidebar, MyHeader },
  computed: {
    ...mapGetters(["getsidebar"]),
    classObj() {
      return {
        hideSidebar: !this.getsidebar.opened,
        openSidebar: this.getsidebar.opened
      };
    }
  },
  methods: {}
};
</script>
<style>
.view {
  min-height: calc(100vh - 60px);
}
</style>

<style lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.main {
  min-height: 100%;
  margin-left: 200px;
  transition: margin-left 0.28s;
  position: relative;
  overflow: hidden;
}
.sidebar {
  transition: width 0.28s;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
}
.hideSidebar {
  .main {
    margin-left: 64px;
  }
  .sidebar {
    width: 64px;
  }
  .el-menu--collapse {
    .el-submenu {
      & > .el-submenu__title {
        & > span {
          height: 0;
          width: 0;
          overflow: hidden;
          visibility: hidden;
          display: inline-block;
        }
      }
    }
  }
}
</style>
