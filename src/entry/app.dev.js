import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HotLoaderModule from './HotLoaderModule';

/**
 * app
 * 开发环境入口
 */
ReactDOM.render(
  <HotLoaderModule />,
  document.getElementById('react-app')
);

if(module.hot){
  module.hot.accept();
}