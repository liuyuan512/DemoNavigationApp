import { Layout, Button, Card, Col, Row, Avatar, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content }: Object = Layout;
import React, { Component } from 'react';
import Demo from './demo';
import style from './demo.less';
import MyLayout from '../../assembly/Layout/index';
import MyContent from '../../assembly/Content/index';
import Login from '../Login';
import { createSelector, createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { demoListInformationRequest, addVideoPlayTimesRequest } from './store/reducer';
import { connect } from 'react-redux';
import { headers } from '../../function';
import { Route, Switch } from 'react-router-dom';



/* state */
const getDemoList: Function = ($$state: Immutable.Map): ?Immutable.Map => {
  return $$state.has('demoList') ? $$state.get('demoList') : null;
};

const state: Function = createStructuredSelector({
  demoListInformation: createSelector(
    getDemoList,
    ($$data: ?Immutable.Map): Array=>{
      const demoListInformation: Immutable.List | Array = $$data !== null ? $$data.get('demoListInformation') : [];
      return demoListInformation instanceof Array ? demoListInformation : demoListInformation.toJS();
    }
  )
});

/* dispatch */
const dispatch: Function = (dispatch: Function): Object=>({
  action: bindActionCreators({
    demoListInformationRequest,
    addVideoPlayTimesRequest
  }, dispatch)
});

@connect(state, dispatch)
class DemoList extends Component{

  constructor(): void{
    super(...arguments);
    this.state = {
      demoList: []
    };
    this.updateVideoPlayTimes = this.updateVideoPlayTimes.bind(this);
  }

  componentWillMount(): void{
    // login().then(response => response.json())
    //   .then(responseJson=>{
    //     console.log('登录成功返回的额值=========',responseJson);// 拿到返回的accessToken
    //     let access=responseJson.data.access_token;
    //     sessionStorage.setItem('access_token', access);
    //   })
    //   .catch((reason: void)=>{
    //     console.log('失败:' + reason);
    //   });
    const accessToken: string = sessionStorage.getItem('access_token');
    if(accessToken === null){
      this.props.history.push('/Login');
    }else {
      this.props.action.demoListInformationRequest({
        headers: headers()
      });
    }
  }

  componentDidMount(): void{
    // getDemoWatchednumber('test001',sessionStorage.getItem('access_token')).then(response => response.json())
    //   .then(responseJson=>{
    //     console.log("responseJson",responseJson);
    //     this.setState({
    //       timeOfALable:parseInt(responseJson.parameter.timeOfALable),
    //       timeOfVideo:parseInt(responseJson.parameter.timeOfVideo)
    //     });
    //   });
    // console.log('this.props:', this.props);
    // const accessToken: string = sessionStorage.getItem('access_token');
    // if(accessToken !== null){
    //   getDemoLists(accessToken).then(response => response.json())
    //     .then(responseJson=> {
    //       this.setState({
    //         demoList:responseJson.data
    //       });
    //       console.log('this.state:', this.state);
    //     });
    // }

  }

  componentDidUpdate(): void{
    window.scroll(0, 0);
    console.log('----');
  }

  updateVideoPlayTimes(data: Object): Function{
    return this.props.action.addVideoPlayTimesRequest(data);
  }
  render(): Object{
    console.log('demolist的props:',this.props);
    const { props } = this;
    if(props.demoListInformation === null || props.demoListInformation.length === 0){
      return(
        <div> 没有数据 </div>
      );
    }
    return (
      <MyContent>
        <div style={{ background: '#fff', padding: 24, minHeight: 880 }}>
          {
            props.demoListInformation.map((item: Object)=>
              <Demo key={item.code}
                title={item.nameOfDemo}
                description={item.description}
                videoLink={item.videoLink}
                imageLink={item.imageLink}
                timeOfSupport={parseInt(item.timeOfSupport)}
                timeOfALable={parseInt(item.timeOfALable)}
                aLink={item.aLink}
                code={item.code}
                timeOfVideo={parseInt(item.timeOfVideo)}
                updateVideoPlayTimes={this.updateVideoPlayTimes}
              />
            )
          }
        </div>
      </MyContent>
    );
  }
}

export default DemoList;
export reducer from './store/reducer';
