const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.20.10.3:7001',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}