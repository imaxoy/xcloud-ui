// const path = require('path');

module.exports = {
    // 基本路径
    // publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 输出文件目录
    // outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // ESlint-loader 是否在保存时加载
    lintOnSave: false,

    /**
     * webpack配置  
     */
    // chainWebpack: (config) => {

    // },
    // configureWebpack: (config) => {
    //     config.resolve = { //配置解析别名
    //         extensions: ['.js', '.json', '.vue'],
    //         alias: {
    //             '@': path.resolve(__dirname, './src')
    //         }
    //     }
    // },
    // // 生产环境是否生成 sourceMap 文件
    // productionSourceMap: false,

    // css配置
    /**
     * 
     
    css: {
        // 是否使用css分离插件，ExtractTextPlugin
        extract: true,
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                data: '@import "./src/styles/main.scss";'
            }
        },
        // 启用CSS modules for all css / pre-processor files.
        modules: false
    },
    */
}