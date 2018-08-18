/* 公共的Action函数 */
import { request } from '../function';

// 删除权限
export const deleteGaclRequest: Function = request({
  url: window.config.gacl,
  method: 'DELETE'
});