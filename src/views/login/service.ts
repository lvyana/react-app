/**
 * @file 登录模块接口列表
 * @author ly
 * @createDate 2023年1月3日
 */
import request from '@/api/request'; // 导入http中创建的axios实例
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
