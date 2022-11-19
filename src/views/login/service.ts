/**
 * 登录模块接口列表
 */

import request from '@/api/request'; // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块
import { FromType } from './index';

interface LoginResponse {
	token: string;
}
// 登录
export const login = (data: FromType) => {
	return request<FromType, LoginResponse>({
		url: `/login`,
		method: 'post',
		data
	});
};
