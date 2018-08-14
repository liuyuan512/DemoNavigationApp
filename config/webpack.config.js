const path = require('path');
const process = require('process');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const exclude = require('./exclude');
const manifest = require('../.dll/manifest.json');
const webpack = require('webpack');
const babelConfig = require('./babel.config');



const lessConfig = require('./less.config');


const copyWebpackPlugin  = new CopyWebpackPlugin([
  {
    from: 'src/webConfig.js',
    to: 'webConfig.js',
    // toType:'template'
  }, // 顾名思义，from 配置来源，to 配置目标路径
  // 可以配置很多项复制规则
])

const extractTextPlugin = new ExtractTextPlugin('[name].css')

const dllReferencePlugin = new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: manifest
})

function config(options) {
  const conf = {
    mode:process.env.NODE_ENV,
    externals: {
      jquery: 'window.jQuery',
      BIMWINNER: 'window.BIMWINNER'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: exclude.js,
          // exclude: /webConfig.js/,
          // use: {
          //   loader: "babel-loader"
          // }
          use:[babelConfig]
        },
        {
          test: exclude.jsFile,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]_[hash].[ext]',
                outputPath: 'script/'
              }
            }
          ]
        },
        {
          // test: exclude.cssFile,
          test: /\.css$/,
          // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          })
        },
        { // 图标
          test: /^.*\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        { // pug
          test: /^.*\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: process.env.NODE_ENV === 'development',
                name: '[name].html'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // copyWebpackPlugin,
      // extractTextPlugin
      dllReferencePlugin
    ]
  }

  /* 合并 */
  conf.entry = options.entry;                                               // 合并入口文件
  conf.module.rules = conf.module.rules.concat(options.module.rules);       // 合并rules
  conf.plugins = conf.plugins.concat(options.plugins);                      // 合并插件
  conf.output = options.output;                                             // 合并输出目录
  if('devtool' in options) conf.devtool = options.devtool;                  // 合并source-map配置

  return conf;

}

module.exports = config;

