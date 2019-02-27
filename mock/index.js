// 使用 Mock
var Mock = require("mockjs");
import userAPI from "./user";

Mock.mock("/user/login", "post", userAPI.login);