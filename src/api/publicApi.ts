/**
 * 公共模块接口列表
 */

import axios from '@/api/request'; // 导入http中创建的axios实例

// 状态
export const getStatus = () => {
	return axios({
		url: `/status`,
		method: 'get'
	});
};
