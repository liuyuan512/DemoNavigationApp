# demo导航项目代码

* 输入命令 `$ npm start` 运行开发环境。
* 输入命令 `$ npm build` 编译到文件夹。
* 输入命令 `$ npm run devdll` 编译开发环境dll文件。
* 输入命令 `$ npm run prodll` 编译生产环境编译dll文件。
* 输入命令 `$ npm run npmi` 或 `$ yarn run yarni` 安装生产环境依赖。
* 输入命令 `$ npm run server` 运行一个小型服务器来查看生产环境。

### 关于dll

无论是开发环境还是生产环境，首先要**编译dll文件**，将公共模块提取出来。

### 关于node-sass

node-sass如果安装失败，可以先到[https://github.com/sass/node-sass/releases](https://github.com/sass/node-sass/releases)下载**binding.node**文件，然后将该文件添加到**SASS_BINARY_PATH**环境变量内。

### 目录结构

* src：项目源代码
  * assembly：布局组件
  * components：工程组件
  * entry：项目入口
  * modules：模块文件
  * router：路由配置
  * store：redux相关配置
  * function.js：常用函数
  * webConfig.js：服务器地址配置
* server：node服务
* config：webpack配置文件
* build：编译文件夹

### 开发环境
1、运行`$ npm run devdll`，编译开发环境的dll   
2、运行`$ npm start`，启动项目，进行开发   
3、运行`$ npm run eslint`，进行代码检查

### 生产环境
1、运行`$ npm run prodll`，编译生产环境的dll   
2、运行`$ npm run build`，编译项目
3、运行`$ npm run server`，可以启动服务器，展示项目