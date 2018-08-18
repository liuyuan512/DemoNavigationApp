import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { request } from '../../../function';

const initData: Object = {};

/* Action */
// 登录
export const loginRequest: Function = request({
  url: window.config.login,
  method: 'POST'
});

/* reducer */
const reducer: Function = handleActions({}, fromJS(initData));

export default {
  login: reducer
};