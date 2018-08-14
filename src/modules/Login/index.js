import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content }: Object = Layout;
import React, { Component } from 'react';
import { Card, Col, Row, Icon, Avatar } from 'antd';
// import { login,getDemoWatchednumber,addDemoWatchednumber } from "../api";
// import { randomStr } from '../Function';
// const { Meta }: Object = Card;

class Demo extends Component{
  render(): Object{
    return (
      <div>
        <Button type="primary">Danger</Button>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Demo;
