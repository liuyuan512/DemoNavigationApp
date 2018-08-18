import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncModule from './asyncModule';
import Page404 from '../assembly/Page404/index';
// import Index from '../modules/Index/Layout';
// import ProjectBaseData from 'bundle-loader?lazy&name=project_base_data!../modules/ProjectBaseData/Layout';
// import EquipmentAndFacilities from 'bundle-loader?lazy&name=equipment_and_facilities!../modules/EquipmentAndFacilities/Layout';
// import SpatialInformation from 'bundle-loader?lazy&name=spatial_information!../modules/SpatialInformation/Layout';
// import ModelCenter from 'bundle-loader?lazy&name=model_center!../modules/ModelCenter/Layout';
// import EnergyConsumption from 'bundle-loader?lazy&name=energy_consumption!../modules/EnergyConsumption/Layout';
// import System from 'bundle-loader?lazy&name=system!../modules/System/Layout';
// import AlarmSystem from 'bundle-loader?lazy&name=alarmSystem!../modules/AlarmSystem/Layout';
// import RunningMonitoring from 'bundle-loader?lazy&name=runningMonitoring!../modules/RunningMonitoring/Layout';
import Demo from 'bundle-loader?lazy&name=Demo!../modules/Demo/index';
// import Demo from '../modules/Demo/index';

// 路由
const routers: {
  id: string,
  path: string,
  component: Object
}[] = [
  { // 首页
    id: 'demo',
    path: '/demo',
    component: asyncModule(Demo)
  },
  { // 首页
    id: 'root',
    path: '/',
    component: asyncModule(Demo)
  }
  // { // 项目基础数据管理
  //   id: 'projectBaseData',
  //   path: '/projectBaseData',
  //   component: asyncModule(ProjectBaseData)
  // },
  // { // 设备设施管理
  //   id: 'equipmentAndFacilities',
  //   path: '/EquipmentAndFacilities',
  //   component: asyncModule(EquipmentAndFacilities)
  // },
  // { // 空间信息管理
  //   id: 'spatialInformation',
  //   path: '/SpatialInformation',
  //   component: asyncModule(SpatialInformation)
  // },
  // { // 模型中心
  //   id: 'modelCenter',
  //   path: '/ModelCenter',
  //   component: asyncModule(ModelCenter)
  // },
  // { // 能耗管理
  //   id: 'energyConsumption',
  //   path: '/EnergyConsumption',
  //   component: asyncModule(EnergyConsumption)
  // },
  // { // 报警系统
  //   id: 'alarmSystem',
  //   path: '/AlarmSystem',
  //   component: asyncModule(AlarmSystem)
  // },
  // { // 运行监控
  //   id: 'runningMonitoring',
  //   path: '/RunningMonitoring',
  //   component: asyncModule(RunningMonitoring)
  // },
  // { // 系统管理
  //   id: 'system',
  //   path: '/System',
  //   component: asyncModule(System)
  // }
];

/**
 * 路由模块
 */
class Router extends Component{
  // 根据权限判断是否配置router
  power(): Array{
    const role: string[] = JSON.parse(sessionStorage.getItem('role')) || [];  // 判断权限
    const render: Array = [];
    let first: ?Object = null;
    routers.map((item: Object, index: number): void=>{
      // if(role.includes(item.id) && item.component){
      render.push(
        <Route key={ item.id } path={ item.path } component={ item.component } />
      );
      // if(!first){
      //   first = <Route key="__FIRST_ROUTE__" path="/" component={ item.component } exact={ true } />;
      //   render.unshift(first);
      // }
      // }
    });
    return render;
  }
  render(): Object{
    return (
      <Switch>
        { this.power() }
        {/* 404 */}
        <Route component={ Page404 } />
      </Switch>
    );
  }
}

export default Router;