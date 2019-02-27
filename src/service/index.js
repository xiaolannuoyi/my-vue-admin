import axios from "axios";

class serviceManger {
  //登录
  login(username, password) {
    return new Promise((resolve, reject) => {
      return axios
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
