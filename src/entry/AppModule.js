import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from '../store/store';
// import './common.sass';
import Layout from '../assembly/Layout/index';
import Login from '../modules/Login/index.js';

import Demolist from '../modules/Demo/index';

/**
 * 项目入口
 */
class AppModule extends Component{
  render(): Object{
    return (
      <Provider store={ store }>
        <LocaleProvider locale={ zhCN }>
          <BrowserRouter>
            <Switch>
              <Route path="/Login" component={ Login } exact={ true } />
              <Route component={ Layout } />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default AppModule;