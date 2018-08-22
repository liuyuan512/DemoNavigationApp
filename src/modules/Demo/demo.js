import {  Card, Col, Row, Icon, Avatar, Rate } from 'antd';
import React, { Component } from 'react';
// import { login,getDemoWatchednumber,addDemoWatchednumber } from "../api";
// import { randomStr } from '../Function';
import style from './demo.less';
import { headers } from '../../function';

const { Meta }: Object = Card;

class Demo extends Component{

  constructor(): void{
    super(...arguments);
    this.onVideoPlay = this.onVideoPlay.bind(this);
    this.onSupportClick = this.onSupportClick.bind(this);
    this.state = {
      number: 0,
      supportNumber: 0,
      timeOfSupport: null,
      timeOfVideo:null,
      code: null
    };
  }

  componentWillMount(): void{
    // console.log('demo的props',this.props);

  }

  componentDidMount(): void{
    this.setState({
      timeOfVideo: this.props.timeOfVideo,
      timeOfSupport: this.props.timeOfSupport,
      code: this.props.code
    });
  }

  async onVideoPlay(): void{
    if(this.state.number === 0){
      const t = this.state.timeOfVideo + 1;
      console.log('JSON.stringify----', JSON.stringify({
        timeOfVideo: t
      }));
      const data1 = await this.props.updateVideoPlayTimes({
        pathname: {
          code: this.state.code
        },
        headers: headers(),
        data: {
          timeOfVideo: t.toString()
        }
      });
      if(data1){
        this.setState((preState: Object)=>({
          timeOfVideo: preState.timeOfVideo + 1,
          number: preState.number + 1
        }));
      }
    }
  }

  async onSupportClick(): void{
    const t = this.state.timeOfSupport + 1;
    if(this.state.supportNumber === 0){
      const data1 = await this.props.updateVideoPlayTimes({
        pathname: {
          code: this.state.code
        },
        headers: headers(),
        data: {
          timeOfSupport: t.toString()
        }
      });
      if(data1){
        this.setState((preState: Object)=>({
          timeOfSupport: preState.timeOfSupport + 1,
          supportNumber: preState.supportNumber + 1
        }));
      }
    }
  }

  render(): Object{
    const { props, state } = this;
    return (
      <div className={ style.singleDemo }>
        <Row gutter={24}>
          <Col span={18} offset={3}>
            <Row gutter={24}>
              <Col span={12}>
                <Card bordered={false}
                  className={ 'coverVideo' }
                  headStyle={{ margin: '60px' }}
                  cover={
                    <video loop={true}
                      src={props.videoLink}
                      controls="controls"
                      controlslist="nodownload"
                      poster={props.imageLink}
                      onPlaying={this.onVideoPlay}
                    >
                    </video>}
                >
                </Card>
              </Col>
              <Col span={8} style={{ top: '12px' }}>
                <Card className={ 'textCard' }
                  bordered={false}
                  title={props.title}
                  headStyle={{ fontSize: '55px', borderBottom: '0px' }}
                >
                  <Meta description={
                    <div>
                      {props.description}
                      <div style={{ padding: '10px 0', marginTop: '20px' }}>
                        <Rate disabled count={1} character={<Icon type="eye"  />} />
                        <span>{state.timeOfVideo}</span>
                        <Rate count={1}
                          style={{ paddingLeft: '20px', outline: 'none', color: '#fa1414' }}
                          character={<Icon type="heart" />}
                          autoFocus={true}
                          allowClear={false}
                          onChange={this.onSupportClick}
                        />
                        <span>{state.timeOfSupport}</span>
                      </div>
                    </div>
                  } />
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
