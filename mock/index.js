// 使用 Mock
// var Mock = require("mockjs");
import Mock from "mockjs";
import userAPI from "./user";

Mock.mock("/user/login", "post", userAPI.login);
Mock.mock(/\/user\/getInfo\.*/, "get", userAPI.getInfo);

export default Mock;
