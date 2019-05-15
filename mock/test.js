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
const info ={
    admin:'admin',
    student:'student'
}
export default {
    getTest: res => {
        const {name} = param2Obj(res.url);
        
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
    }
};