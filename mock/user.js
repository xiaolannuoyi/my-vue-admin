const tokens = {
  admin: {
    pas: "admin"
  },
  editor: {
    pas: "editor"
  }
};
export default {
  login: res => {
    const { username, password } = JSON.parse(res.body); //解构 username
    console.log(tokens[username].pas);
    console.log(password);

    if (username in tokens) {
      if (tokens[username].pas == password) {
        return {
          code: 200,
          result: true,
          message: ""
        };
      } else {
        return {
          code: 20000,
          result: false,
          message: "密码错误"
        };
      }
    }
    return {
      code: 60204,
      message: "Account and password are incorrect."
    };
  }
};
