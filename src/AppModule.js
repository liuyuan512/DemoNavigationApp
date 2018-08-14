import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader';
// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import store from './store/store';
// import './common.sass';
// import Layout from './assembly/Layout/index';
// import Login from './modules/Login/Layout';
import Search from './components/Search/Search';
import Submit from './components/Submit/Submit';
/**
 * 项目入口
 */
// @hot(module)
class AppModule extends Component{
  render(): Object{
    return (
      <div>
        <Search />
        <Submit />
      </div>
    );
  }
}

export default AppModule;