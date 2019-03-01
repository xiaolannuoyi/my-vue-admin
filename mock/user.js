const tokens = {
  admin: {
    pas: "admin",
    token: "admin-token"
  },
  editor: {
    pas: "editor",
    token: "editor-token"
  }
};
export default {
  login: res => {
    const { username, password } = JSON.parse(res.body); //解构 username

    if (username in tokens && tokens[username].pas == password) {
      return {
        code: 200,
        result: tokens[username].token,
        message: ""
      };
    }
    return {
      code: 90001,
      message: "Account and password are incorrect."
    };
  }
};
