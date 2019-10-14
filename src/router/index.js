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


//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
    {
        path: "/home",
        component: Layout,
        meta: { title: "Home", icon: "my-icon-home-fill", role: ['admin', 'editor'] }
    },
    {
        path: "/home/guide",
        component: Layout,
        meta: { title: "引导页", icon: "el-icon-menu", role: ['admin'] }
    },
    {
        path: "/css-center",
        component: Layout,
        redirect: "/css-center/css-animation-step",
        name: "css",
        meta: { title: "css-center", icon: "el-icon-info", role: ['admin', 'editor'] },
        children: [
            {
                path: "vanilla-tilt",
                name: "vanilla-tilt",
                component: () =>
                    import("@/views/css-center/vanilla-tilt/index"),
                meta: { title: "vanilla-tilt", role: ['admin'] }
            }, {
                path: "css-animation-step",
                name: "css-animation-step",
                component: () =>
                    import("@/views/css-center/css-animation-step/index"),
                meta: { title: "css逐帧动画", role: ['editor'] }
            },
            {
                path: "css-svg",
                name: "css-svg",
                component: () =>
                    import("@/views/css-center/css-svg/index"),
                meta: { title: "css-svg动画", role: ['editor'] }
            },
            {
                path: "css-animation",
                name: "css-animation",
                component: () =>
                    import("@/views/css-center/css-animation/index"),
                meta: { title: "css动画", role: ['editor'] }
            },
            {
                path: "css-animation-hover",
                name: "css-animation-hover",
                component: () =>
                    import("@/views/css-center/css-animation-hover/index"),
                meta: { title: "css-animation-hover", role: ['editor'] }
            }
        ]
    },
    {
        path: "/text",
        component: Layout,
        meta: { title: "文本", icon: "el-icon-info", role: ['admin'] },
        children: [
            {
                path: "vue-code-diff",
                name: "vue-code-diff",
                component: () =>
                    import("@/views/components-demo/vue-code-diff/index"),
                meta: { title: "vue-code-diff", role: ['admin'] }
            },
        ]
    },
    {
        path: "/component",
        component: Layout,
        meta: { title: "组件", icon: "el-icon-info", role: ['admin'] },
        children: [{
            path: "tinymce",
            name: "tinymce",
            component: () =>
                import("@/views/components-demo/tinymce"),
            meta: { title: "富文本编辑器", role: ['admin'] }
        },
        {
            path: "json",
            name: "json",
            component: () =>
                import("@/views/components-demo/jsonEditor"),
            meta: { title: "JSON", role: ['admin'] }
        },
        {
            path: "jsoneditor",
            name: "jsoneditor",
            component: () =>
                import("@/views/components-demo/jsoneditor/index"),
            meta: { title: "jsoneditor", role: ['admin'] }
        },
        {
            path: "hanzi-writer",
            name: "hanzi-writer",
            component: () =>
                import("@/views/components-demo/hanzi-writer/index"),
            meta: { title: "hanzi-writer", role: ['admin'] }
        },
        {
            path: "excel-export",
            name: "excel-export",
            component: () =>
                import("@/views/components-demo/Excel/excel-export"),
            meta: { title: "excel-export", role: ['admin'] }
        },
        {
            path: "excel-import",
            name: "excel-import",
            component: () =>
                import("@/views/components-demo/Excel/excel-import"),
            meta: { title: "excel-import", role: ['admin'] }
        },
        {
            path: "moment",
            name: "moment",
            component: () =>
                import("@/views/components-demo/moment/index"),
            meta: { title: "moment", role: ['admin'] }
        },
        ]
    },
    {
        path: "/shape",
        component: Layout,
        meta: { title: "图形", icon: "el-icon-info", role: ['admin'] },
        children: [{
            path: "pipline",
            name: "pipline",
            component: () =>
                import("@/views/shape-center/pipline/index"),
            meta: { title: "管道图", role: ['admin'] }
        }
        ]
    },
    {
        path: "/practice-center",
        component: Layout,
        redirect: "/practice-center/dialog",
        meta: { title: "实践", icon: "el-icon-info", role: ['editor'] },
        children: [{
            path: "dialog",
            name: "dialog",
            component: () =>
                import("@/views/practice-center/dialog/index"),
            meta: { title: "公共dialog子组件", role: ['editor'] }
        },
        {
            path: "dialog2",
            name: "dialog2",
            component: () =>
                import("@/views/practice-center/dialog2/index"),
            meta: { title: "dialog开关", role: ['editor'] }
        },
        {
            path: "path1",
            name: "path1",
            component: () =>
                import("@/views/practice-center/commonrouter/index"),
            meta: { title: "调用同一组件", role: ['editor'] }
        },
        {
            path: "path2",
            name: "path2",
            component: () =>
                import("@/views/practice-center/commonrouter/index"),
            meta: { title: "调用同一组件", role: ['editor'] }
        },
        {
            path: "exportfile",
            name: "exportfile",
            component: () =>
                import("@/views/practice-center/exportfile/index"),
            meta: { title: "批量导入数据", role: ['editor'] }
        },
        {
            path: "table",
            name: "table",
            component: () =>
                import("@/views/practice-center/table/index"),
            meta: { title: "table", role: ['editor'] }
        },
        {
            path: "step",
            name: "step",
            component: () =>
                import("@/views/practice-center/step/index"),
            meta: { title: "step", role: ['editor'] }
        },
        {
            path: "table-form",
            name: "table-form",
            component: () =>
                import("@/views/practice-center/table-form/index"),
            meta: { title: "表格内表单", role: ['editor'] }
        },
        {
            path: "test",
            name: "test",
            component: () =>
                import("@/views/practice-center/test/index"),
            meta: { title: "test", role: ['editor'] }
        },
        ]
    }
];

//实例化vue的时候只挂载commontRouterMap
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: commontRouterMap
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router;