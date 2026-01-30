module.exports = {
  // 👇 重点看这里：确保这一行是完整的，不要漏掉最后的 : '/'
  // 注意：如果你的 GitHub 仓库名是 vue-dial-tool，请把下面的 intro-vue-app 改成 vue-dial-tool
  publicPath: process.env.NODE_ENV === 'production' ? '/intro-vue-app/' : '/',
    devServer: {
        host: '0.0.0.0', // 允许任何IP地址访问
        port: 8080, // 你的项目端口号
        disableHostCheck: true, // 禁用主机检查
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域访问，根据需要设置
        }
    }
}