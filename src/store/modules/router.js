import { asyncRouterMap, commontRouterMap } from "@/router";

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0);
  } else {
    return true;
  }
}

const router = {
  state: {
    routers: commontRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = commontRouterMap.concat(routers);
    }
  },
  getters: {
    getaddRouters: state => state.addRouters,
    getrouters: state => state.routers
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;

        const accessedRouters = asyncRouterMap.filter(v => {
          if (roles.indexOf("admin") >= 0) return true; //admin 返回asyncRouterMap 全部路由
          if (hasPermission(roles, v)) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter(child => {
                if (hasPermission(roles, child)) {
                  return child;
                }
                return false;
              });
              return v;
            } else {
              return v;
            }
          }
          return false;
        });
        console.log("accessedRouters", accessedRouters);

        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    }
  }
};

export default router;
