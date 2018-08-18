/**
 * layout
 * 页面整体布局
 * Header 显示页面header
 * Footer 显示版权信息
 * Routers 根据路由渲染页面
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import style from './style.less';
// import Header from '../Header/index';
import Routers from '../../router/routers';

const { Header, Footer, Sider, Content }: Object = Layout;


@withRouter
class MyLayout extends Component{
  componentWillMount(): void{
    // 判断账号是否登录
    const userInformation: string = sessionStorage.getItem('userInformation');
    const material: string = sessionStorage.getItem('material');
    const role: string = sessionStorage.getItem('role');
    if(!(userInformation && material && role)){
      // this.props.history.push('/Login');            { this.props.children }
    }

    const accessToken: string = sessionStorage.getItem('access_token');
    if(accessToken === null){
      this.props.history.push('/Login');
    }
  }

  render(): Object{
    return (
      <Layout className={ style.layout }>
        <Header style={{ background: '#fff', height: 20 }}>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 880 }}>
            <Routers />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          盈嘉互联(北京)科技有限公司    京ICP备15051988号-2   Copyright © 2016
        </Footer>
      </Layout>
    );
  }
}

export default MyLayout;
