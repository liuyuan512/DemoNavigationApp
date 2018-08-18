import {  Card, Col, Row, Icon, Avatar, Rate } from 'antd';
import React, { Component } from 'react';
// import { login,getDemoWatchednumber,addDemoWatchednumber } from "../api";
// import { randomStr } from '../Function';
const { Meta }: Object = Card;

class Demo extends Component{

  constructor(): void{
    super(...arguments);
    this.state = {};
  }

  componentWillMount(): void{
    // console.log('demo的props',this.props);
  }

  render(): Object{
    const {props} = this;
    return (
      <div>
        <Row gutter={24}>
          <Col span={18} offset={6}>
            <Row gutter={16}>
              <Col span={8}>
                <Card bordered={false}
                  cover={
                    <video loop={true}
                      src={props.videoLink}
                      controls="controls"
                      poster={props.imageLink}
                    >
                    </video>}
                >
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ width: 400 }}
                  bordered={false}
                  title={props.title}
                  bodyStyle={{ padding: '2px 24px' }}
                  headStyle={{ }}
                >
                  <div style={{ padding: '10px 0' }}>
                    <Icon type="eye" />
                    <span>12</span>
                    <Rate count={1}
                      style={{ paddingLeft: '50px' }}
                      character={<Icon type="heart" />}
                    />
                  </div>
                  <Meta description={props.description} />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo;
