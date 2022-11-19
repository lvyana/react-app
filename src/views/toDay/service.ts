import request from '@/api/request';

// 查询表格数据
export const tabelData = () => {
	return request<never, never>({
		url: '/expenses/tabelData',
		method: 'get'
	});
};
