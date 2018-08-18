import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import AppModule from './AppModule';

/* 配置热替换模块 */
@hot(module)
class HotLoaderModule extends Component{
  render(): Object{
    return (
      <AppModule />
    );
  }
}

export default HotLoaderModule;