/* exclude配置 */
const js = [
  'dll',
  'webConfig',
  'BIMWINNER'
];

const css = [
  'BIMWINNER'
];

module.exports = {
  js: new RegExp(`(${ js.join('|') }|node_modules)`),
  css: new RegExp(`(${ css.join('|') })`),
  jsFile: new RegExp(`(${ js.join('|') }).*\\.js$`),
  cssFile: new RegExp(`(${ css.join('|') }).*\\.css$`)
};