import { Layout, Button, Card, Col, Row, Avatar, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content }: Object = Layout;
import React, { Component } from 'react';
import { login, getDemoWatchednumber, addDemoWatchednumber, getDemoLists } from '../../function.js';
// import { randomStr } from '../Function';
import { withRouter } from 'react-router-dom';

@withRouter
class Login extends Component{

  constructor(): void{
    super(...arguments);
    this.loginSuceess = this.loginSuceess.bind(this);

  }

  componentWillMount(): void{
    this.loginSuceess();
  }

  componentDidMount(): void{

  }

  loginSuceess(): viod{
    login().then(response => response.json())
      .then(responseJson=>{
        console.log('登录成功返回的额值=========',responseJson);// 拿到返回的accessToken
        let access=responseJson.data.access_token;
        sessionStorage.setItem('access_token', access);
        this.props.history.push('/demo');
      })
      .catch((reason: void)=>{
        console.log('失败:' + reason);
      });
  }

  render(): Object{
    return (
      <Button type="primary" onClick={ this.loginSuceess }>
       登录
      </Button>
    );
  }
}

export default Login;
