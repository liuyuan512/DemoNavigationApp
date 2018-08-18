/* 开发环境 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');
const lessConfig = require('./less.config');
const cssConfig = require('./css.config');



// html模板
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname,"../src/index.pug"),
  filename: "index.html",
  inject: true,
  hash: true,
});

const extractTextPlugin = new ExtractTextPlugin('[name].css')


// 热更新
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()



module.exports = config({
  entry: './src/entry/app.dev.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    // filename: 'script/[name]_[chunkhash].js',
    chunkFilename: 'script/[name]_[chunkhash]_chunk.js',
    publicPath: "/"
  },
  module:{
    rules:[
      { // less(for antd)
        test: /^.*\.less$/,
        use: ['style-loader', cssConfig, lessConfig],
        // include: /^.*\.less$|node_modules/
        // include: /node_modules/
      }
    ]
  },
  plugins:[
    // 热更新
    hotModuleReplacementPlugin,
    // html模板
    htmlPlugin,
    // 分离css
    extractTextPlugin
  ]
});
