import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";

//如首页和登录页和一些不用权限的公用页面
export const commontRouterMap = [
    {
        path: "/login",
        hidden: true, //不在slider显示
        component: () =>
            import("@/views/login/index")
    },
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        hidden: true,
        children: [{
            path: "home",
            component: () =>
                import("@/views/Home")
        }]
    },
    {
        path: "/home",
        component: Layout,
        redirect: "/home/guide",
        hidden: true,
        children: [{
            path: "guide",
            component: () =>
                import("@/views/guide/index"),
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
export const asyncRouterMap = [
    {
        path: "/home",
        component: Layout,
        meta: { title: "Home", icon: "el-icon-menu",role:['admin','editor']}
    },
    {
        path: "/home/guide",
        component: Layout,
        meta: { title: "引导页", icon: "el-icon-menu",role:['admin'] }
    },
    {
        path: "/css-center",
        component: Layout,
        redirect: "/css-center/css-animation-step",
        name: "css",
        meta: { title: "css-center", icon: "el-icon-info",role:['admin','editor'] },
        children: [
            {
                path: "vanilla-tilt",
                name: "vanilla-tilt",
                component: () =>
                    import("@/views/css-center/vanilla-tilt/index"),
                meta: { title: "vanilla-tilt",role:['admin']}
            }, {
                path: "css-animation-step",
                name: "css-animation-step",
                component: () =>
                    import("@/views/css-center/css-animation-step/index"),
                meta: { title: "css逐帧动画", role:['editor']}
            },
            {
                path: "css-svg",
                name: "css-svg",
                component: () =>
                    import("@/views/css-center/css-svg/index"),
                meta: { title: "css-svg", role:['editor']}
            },
            {
                path: "css-animation-hover",
                name: "css-animation-hover",
                component: () =>
                    import("@/views/css-center/css-animation-hover/index"),
                meta: { title: "css-animation-hover", role:['editor']}
            }
        ]
    },
    {
        path: "/component",
        component: Layout,
        meta: { title: "组件", icon: "el-icon-info" ,role:['admin']},
        children: [{
            path: "tinymce",
            name: "tinymce",
            component: () =>
                import("@/views/components-demo/tinymce"),
            meta: { title: "富文本编辑器",role:['admin']}
        },
        ]
    },
    {
        path: "/practice-center",
        component: Layout,
        redirect: "/practice-center/dialog",
        meta: { title: "实践", icon: "el-icon-info",role:['editor'] },
        children: [{
            path: "dialog",
            name: "dialog",
            component: () =>
                import("@/views/practice-center/dialog/index"),
            meta: { title: "公共dialog子组件",  role:['editor']}
        },
        {
            path: "path1",
            name: "path1",
            component: () =>
                import("@/views/practice-center/commonrouter/index"),
            meta: { title: "调用同一组件",  role:['editor']}
        },
        {
            path: "path2",
            name: "path2",
            component: () =>
                import("@/views/practice-center/commonrouter/index"),
            meta: { title: "调用同一组件",  role:['editor']}
        },
        {
            path: "exportfile",
            name: "exportfile",
            component: () =>
                import("@/views/practice-center/exportfile/index"),
            meta: { title: "批量导入数据",  role:['editor']}
        },
        ]
    }
];