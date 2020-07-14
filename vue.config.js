module.exports = {
    //proxy跨域设置
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite: {//将main.js中添加的默认的请求地址设为''
                    '/api':''
                }
            }
        }
    },
    productionSourceMap:false,//是否生成源程序映射, 没有源码     
    publicPath: './',//打包时候的公共路径
    chainWebpack:(config) => {//删除文件预加载
        config.plugins.delete('prefetch');
    }

}