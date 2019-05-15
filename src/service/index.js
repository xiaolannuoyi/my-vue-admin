import service from "./axios-config";

class serviceManger {
    //登录
    login(username, password) {
            return new Promise((resolve, reject) => {
                return service
                    .post("/user/login", {
                        username,
                        password
                    })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
        //获取用户信息
    getInfo(token) {
            return new Promise((resolve, reject) => {
                return service({
                        url: "/user/getInfo",
                        method: "get",
                        params: { token }
                    })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
        //退出登录
    logout(token) {
        return new Promise((resolve, reject) => {
            return service({
                    url: "/user/logout",
                    method: "post"
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    //测试 调用同一组件
    getTest(name) {
        return new Promise((resolve, reject) => {
            return service({
                    url: "/test/getTest",
                    method: "get",
                    params: { name }
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
export default new serviceManger();