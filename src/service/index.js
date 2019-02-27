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
}
export default new serviceManger();
