module.exports = {
    devServer: {
        //本地
        proxy: {
            '/api':{
                target: 'http://192.168.137.30:80',
                changeOrigin: true,
                pathRewrite:{'^/api':''}
            }
        }
        //服务器
        // proxy: 'http://deal.kooriookami.top'
    },
    publicPath: './'
}