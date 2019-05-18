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
        console.log('123',roles);
        
        const accessedRouters = asyncRouterMap.filter(v => {
          if (v.meta.role.indexOf(roles) >= 0) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.map(child => {
                if (child.hidden && Object.prototype.toString.call(child.hidden) == '[object Array]') {
                  child.hidden = child.hidden.indexOf(roles) >= 0 ? true : false;
                }
                return child;
              }).filter(child1 => {
                if (child1.meta.role.indexOf(roles) >= 0) {
                  return child1;
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
