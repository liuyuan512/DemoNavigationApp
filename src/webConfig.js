/**
 *  网站地址配置
 *  从“config”更名为“webConfig”
 *  因为配置exclude的config会和react-hot-loader的config冲突，导致报错
 */
(function(_window){
  // bos相关配置
  var bosUrl = 'http://demo.bimwinner.com:8086/';      // bos服务器地址
  var bosVersion = 'v1-2';                             // 版本
  var bosKey = 'fc70fa4dc9534bd8b21156eb5c8616bc';     // key
  var api = bosUrl + bosVersion + '/' + bosKey + '/';  // api接口地址
  var account = {
    code:'ly0512',
    password:'yjhl123456'
  };
  // 网站配置
  _window.config = {
    // 模型图片地址
    vizbimimage: 'http://vizbim.bimwinner.com/vizbimRepository/libs/viewerplus/3.0.0/css/img',
    // bos
    bosUrl: bosUrl,
    bosKey: bosKey,
    bosVersion: bosVersion,
    account:account,
    api: api,
    login: api + 'users/login',                                 // 登录
    single: api + 'users/single/register',                      // 注册
    changePassword: api + 'users/{{ key }}/auth',               // 修改密码
    validateCode: api + 'users/validateCode',                   // 发送验证码（手机）
    checkValidateCode: api + 'users/check/validateCode',        // 验证验证码
    resetPassword: api + 'auths/resetPassword',                 // 【一个具有严重安全问题的接口，不用说估计也知道是干什么的】
    prototype: api + 'prototype/',                              // prototype
    query: api + 'prototype/query/',                            // 多条件查询
    upload: bosUrl + bosVersion + '/' + bosKey + '/files',      // 文件上传
    ifc: 'http://binside-alpha.rickricks.com/binside-v1.5.2/ifc/parse?access_token={{ access_token }}&appKey=' + bosKey + '&i={{ i }}',  // 模型解析
    brava: 'http://vizcad00-alpha.rickricks.com/BWview-pj/show.html?fileid={{ fileid }}&token={{ token }}&appKey=' + bosKey ,// 文件预览
    uodemoWatchedNumber:api+'prototype/uodemoWatchedNumber/'
  };
})(window);
