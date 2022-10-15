/**
 * 登录模块接口列表
 */

import axios from '@/api/request'; // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块
import { FromType } from './index';
// 登录
export const login = (data: FromType) => {
	return axios<FromType>({
		url: `/login`,
		method: 'post',
		data
	});
};
