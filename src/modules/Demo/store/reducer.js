import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { request, headers } from '../../../function';

const initData: Object = {
  demoListInformation: []
};

/* Action */
// 登录
export const loginRequest: Function = request({
  url: window.config.login,
  method: 'POST'
});

/* Action */
export const demoListInformation: Function = createAction('demo信息列表');
// 获取demo的详细信息
export const demoListInformationRequest: Function = request({
  url: window.config.query + 'uodemoWatchedNumber?noRelation=true',
  method: 'POST',
  defaultData: {
    'condition': [{
      'field': 'bosclass',
      'operator': 'like',
      'value': 'uodemoWatchedNumber',
      'number': 'false',
      'logic': 'or'
    }],
    'select': []
  },
  successAction: demoListInformation
});

export const addVideoPlayTimes: Function = createAction('更新视频播放次数');
// 更新视频播放次数
export const addVideoPlayTimesRequest: Function = request({
  url: window.config.prototype + 'uodemoWatchedNumber/{{ code }}',
  method: 'PUT'
  // successAction: demoListInformation
});

/* reducer */
const reducer: Function = handleActions({
  [demoListInformation]: ($$state: Immutable.Map, action: Object): Immutable.Map=>{
    const data: Array = 'data' in action.payload ? action.payload.data : action.payload;
    return $$state.set('demoListInformation', data);
  }
}, fromJS(initData));

export default {
  demoList: reducer
};