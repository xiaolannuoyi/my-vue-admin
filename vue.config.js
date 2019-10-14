const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    },
    outputDir:'my-vue-admin',
    // publicPath: process.env.NODE_ENV === "production" ? '/my-vue-admin/' : "/",
};