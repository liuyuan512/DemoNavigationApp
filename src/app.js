import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppModule from './AppModule';

/**
 * app
 * 生产环境入口
 */
ReactDOM.render(
  <AppModule />,
  document.getElementById('react-app')
);