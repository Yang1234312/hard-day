const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.2.30:8888',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}