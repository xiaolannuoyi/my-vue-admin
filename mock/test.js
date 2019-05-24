import Mock from "mockjs";

//获取get请求  ? 后面的参数
function param2Obj(url) {
    const search = url.split("?")[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    );
}
const info = {
    admin: 'admin',
    student: 'student'
}
const tabledata = Mock.mock({
    "list|24": [
        {
            "name": '@cname',
            'date': '@date',
            "address": '@county(true)'
        }
    ]
})

export default {
    getTest: res => {
        const { name } = param2Obj(res.url);
        const data = info[name];

        if (data) {
            return {
                code: 200,
                result: data
            };
        }
        return {
            code: 50008,
            message: "Login failed, unable to get user details."
        };
    },
    //按页查询
    getTableByPage: (res) => {
        const { currentPage,pageSize } = param2Obj(res.url);
        const result = tabledata.list.slice((currentPage-1)*pageSize,currentPage*pageSize)
        if (currentPage) {
            return {
                code: 200,
                totalPage:5,
                currentPage:Number(currentPage),
                result: result
            };
        }
        return {
            code: 50008,
            message: "Login failed, unable to get user details."
        };
    },
    //查询所有
    getTableByAll: () => {
        const result = tabledata.list.slice(0)
        if (result) {
            return {
                code: 200,
                result: result
            };
        }
        return {
            code: 50008,
            message: "Login failed, unable to get user details."
        };
    }
};