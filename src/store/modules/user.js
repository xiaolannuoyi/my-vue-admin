import serviceManger from "@/service/index";

function setCookie(name, value, m) {
  var d = new Date();
  d.setTime(d.getTime() + 1000 * m); //24 * 60 * 60 * 1000 * days
  window.document.cookie =
    name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
  var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

function deleteCookie(name) {
  this.set(name, "", -1);
}

const user = {
  state: {
    token: "",
    name: "",
    avatar: "",
    roles: []
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  getters: {
    gettoken: state => state.token,
    getroles: state => state.roles
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        serviceManger.login(username, userInfo.password).then(response => {
          if (response) {
            setCookie("my-vue-admin", response.result, 30);
            commit("SET_TOKEN", response.result);
            resolve(response);
          } else {
            reject(response);
          }
        });
      });
    },
    // // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        serviceManger.getInfo(state.token).then(response => {
          if (response) {
            const data = response.result;
            if (data.roles && data.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", data.roles);
            } else {
              reject("getInfo: roles must be a non-null array !");
            }
            commit("SET_NAME", data.name);
            commit("SET_AVATAR", data.avatar);

            resolve(response);
          } else {
            reject(response);
          }
        });
      });
    }
  }
};
export default user;
