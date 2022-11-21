import request from '@/api/request';
import type { EditPersonnelSearchFormParmas } from './components/editPersonnel/EditPersonnelSearch';
import type { EditPersonnelTableDataParams } from './components/editPersonnel/EditPersonnelTable';

// 查询表格数据
export const editPersonnelTableDataApi = (data: EditPersonnelSearchFormParmas) => {
	return request<EditPersonnelSearchFormParmas, EditPersonnelTableDataParams[]>({
		url: '/team/editInfo',
		method: 'post',
		data
	});
};
