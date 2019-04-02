import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";

//如首页和登录页和一些不用权限的公用页面
export const commontRouterMap = [{
        path: "/login",
        hidden: true, //不在slider显示
        component: () =>
            import ("@/views/login/index")
    },
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        name: "Home",
        hidden: true,
        children: [{
            path: "home",
            component: () =>
                import ("@/views/Home")
        }]
    }
];

//实例化vue的时候只挂载constantRouter
export default new Router({
    // mode: "history",
    routes: commontRouterMap
});

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [{
        path: "/home",
        component: Layout,
        meta: { title: "Home", icon: "el-icon-menu" }
    },
    {
        path: "/css",
        component: Layout,
        redirect: "/css/cssAnimation",
        name: "css",
        meta: { title: "css", icon: "el-icon-info" },
        children: [{
                path: "cssAnimation",
                name: "cssAnimation",
                component: () =>
                    import ("@/views/cssAnimation/index"),
                meta: { title: "cssAnimation", icon: "el-icon-info" }
            },
            {
                path: "tree",
                name: "Tree",
                component: () =>
                    import ("@/views/tree/index"),
                meta: { title: "Tree", icon: "el-icon-info" }
            }
        ]
    }
];