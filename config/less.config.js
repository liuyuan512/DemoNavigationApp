/* less-loader 配置 (for antd) */

// 换肤
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
const modifyVars = {
  // -------- Colors -----------
  '@primary-color': '#287af3',
  // Layout
  '@layout-body-background': 'transparent',
  '@layout-header-background': '@primary-color'
};

module.exports = {
  loader: 'less-loader',
  options: {
    modifyVars
  }
};