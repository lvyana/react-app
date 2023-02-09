/**
 * @file 顶部功能api
 * @author ly
 * @createDate 2022年12月9日
 */
import request from '@/api/request';
import type { messgeCenterParams } from './compoment/Lists';

// 消息中心列表
export const messgeCenter = () => {
	return request<never, messgeCenterParams[]>({
		url: '/messgeCenter',
		method: 'get'
	});
};
