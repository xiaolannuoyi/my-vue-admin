// 使用 Mock
// var Mock = require("mockjs");
import Mock from "mockjs";
import userAPI from "./user";
import testAPI from "./test";

Mock.mock("/user/login", "post", userAPI.login);
Mock.mock(/\/user\/getInfo\.*/, "get", userAPI.getInfo);
Mock.mock("/user/logout", "post", userAPI.logout);


Mock.mock(/\/test\/getTest\.*/, "get", testAPI.getTest);
export default Mock;