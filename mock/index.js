// 使用 Mock
// var Mock = require("mockjs");
import Mock from "mockjs";
import userAPI from "./user";
import testAPI from "./test";

Mock.mock("/user/login", "post", userAPI.login);
Mock.mock(/\/user\/getInfo\.*/, "get", userAPI.getInfo);
Mock.mock("/user/logout", "post", userAPI.logout);


Mock.mock(/\/test\/getTest\.*/, "get", testAPI.getTest);
Mock.mock(/\/test\/getTableByPage\.*/, "get", testAPI.getTableByPage);
Mock.mock(/\/test\/getTableByAll/, "get", testAPI.getTableByAll);


Mock.setup({ timeout: '100-2000' });

export default Mock;