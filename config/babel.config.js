/* babel-loader 配置 */
const path = require('path');
const process = require('process');

function output(env){
  switch(env){
    case 'development': // 开发环境
      return true;
    case 'production':  // 生产环境
      return false;
  }
}

// 根据当前环境配置debug
const env = process.env.NODE_ENV;
const debug = output(env);

const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11,
        edge: 12,
        chrome: 40,
        firefox: 40
      },
      debug: debug,
      modules: false,
      useBuiltIns: 'usage',
      // uglify: false
    }
  ],
  // "@babel/preset-stage-0",
  '@babel/preset-flow',
  '@babel/preset-react',
];

const plugins = [
  [
    '@babel/plugin-proposal-decorators',  //修饰器
    {
      legacy: true
    }
  ],
  '@babel/plugin-proposal-export-default-from',
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }
  ],
  '@babel/plugin-proposal-function-bind'
];

// 热替换插件
if(debug) plugins.unshift('react-hot-loader/babel');

module.exports = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: path.join(__dirname, '../.babelCache'),
    presets,
    plugins,
  }
};