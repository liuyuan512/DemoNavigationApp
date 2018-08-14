/* 生产环境 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');
const lessConfig = require('./less.config');
const cssConfig = require('./css.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');


// html模板
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../src/index.pug'),
  filename: "index.html",
  inject: true,
  hash: true,
  minify: {
    minifyCSS: true,
    minifyJS: true
  }
});
// 分离css
const extractTextPlugin = new ExtractTextPlugin('[name].css')


const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'style/[name]_[chunkhash].css',
  chunkFilename: 'style/[name]_[chunkhash]_chunk.css'
})

module.exports = config({
  entry: './src/entry/app.js',
  output: {
    path: path.resolve('build'),
    // filename: 'bundle.js',
    filename: 'script/[name]_[chunkhash].js',
    chunkFilename: 'script/[name]_[chunkhash]_chunk.js',
    publicPath: "/"
  },
  module:{
    rules:[
      { // less(for antd)
        test: /^.*\.less$/,
        use: ['style-loader', cssConfig, lessConfig]
        // include: /node_modules/
      }
    ]
  },
  plugins:[
    // html模板
    htmlPlugin,
    // 分离css
    extractTextPlugin,

    new OptimizeCssAssets()
  ]
});
