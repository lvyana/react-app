import request from '@/api/request';

// 查询码龙首页数据
export function pageData() {
	return request({
		url: 'xunlong/home/page/data',
		method: 'get'
	});
}
