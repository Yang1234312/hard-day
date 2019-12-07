const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.36.146:7001',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}