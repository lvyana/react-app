/**
 * 公共模块接口列表
 */

import axios from '@/api/request'; // 导入http中创建的axios实例

/**
 * 获取状态数据api
 * @returns /status
 */
export const status = () => {
	return axios({
		url: `/status`,
		method: 'get'
	});
};
