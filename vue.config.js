module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/mock': {
                target: 'https://easy-mock.com',
                changeOrigin: false
            }
        }
    }
}