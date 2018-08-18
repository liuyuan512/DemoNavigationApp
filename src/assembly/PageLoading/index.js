/* 页面加载，防止闪烁 */
import React, { Component } from 'react';
import { Spin } from 'antd';
import Main from '../Main/index';
import style from './style.less';

class PageLoading extends Component{
  render(): Object{
    return (
      <Main>
        <div className={ style.pageLoading }>
          <Spin size="large" tip="Loading..." />
        </div>
      </Main>
    );
  }
}

export default PageLoading;