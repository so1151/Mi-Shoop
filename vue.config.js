module.exports = {
    //proxy跨域设置
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite: {
                    '/api':''
                }
            }
        }
    }
}