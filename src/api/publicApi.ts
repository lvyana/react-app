/**
 * 公共模块接口列表
 */

import axios from '@/api/request'; // 导入http中创建的axios实例
import { headerConfigListType } from '@/store/reducers/globalConfig';

/**
 * 获取状态数据api
 */
export interface statusDataProps {
	status: '1' | '2';
	name: string;
}

export const status = () => {
	return axios<statusDataProps[]>({
		url: `/status`,
		method: 'get'
	});
};

/**
 * 获取表头配置
 */
export const headerConfig = () => {
	return axios<headerConfigListType[]>({
		url: `/getHeader`,
		method: 'get'
	});
};
