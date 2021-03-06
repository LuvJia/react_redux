const path=require('path');
let webpack=require('webpack');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        //添加hash可以防止文件缓存,每次都会生成4位hash串
        filename:'bundle.[hash:4].js',
        path:path.resolve('dist')
    },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true, //会在打包好的bundle.js后面加上hash串
        }),
        //热更新,不是刷新
        new webpack.HotModuleReplacementPlugin(),
        //打包前先清空
        new CleanWebpackPlugin('dist')
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,  //排除掉nod_modules,优化打包速度
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
};