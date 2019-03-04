import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//如首页和登录页和一些不用权限的公用页面
export const commontRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    component: () => import("@/views/Home")
  }
];

//实例化vue的时候只挂载constantRouter
export default new Router({
  // mode: "history",
  routes: commontRouterMap
});

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: "/admin",
    component: () => import("@/views/admin"),
    name: "admin--",
    meta: { role: ["admin"] } //页面需要的权限
  },
  {
    path: "/editor",
    component: () => import("@/views/editor"),
    name: "editor--",
    meta: { role: ["editor"] } //页面需要的权限
  }
];
