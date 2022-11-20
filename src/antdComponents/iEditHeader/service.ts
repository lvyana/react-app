import { Key } from 'react';
import axios from '@/api/request';

interface updateHeaderParams {
	type: string;
	headerField: Key[];
}
// 更新表头配置
export function updateHeader(data: updateHeaderParams) {
	return axios({
		url: '/updateHeader',
		method: 'post',
		data
	});
}
