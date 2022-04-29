import request from '@/api/request';
import { tableProps } from './components/headerTable';

// 查询表格数据
export function tabelData(data: tableProps) {
	return request({
		url: '/expenses/tabelData',
		method: 'post',
		data
	});
}
