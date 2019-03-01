import serviceManger from "@/service/index";
import { resolve } from "path";

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
  state: { token: "" },
  mutations: {
    SET_TOKEN(state, token) {
      return (state.token = token);
    }
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
    }
  }
};
export default user;
