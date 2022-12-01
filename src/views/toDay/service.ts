import request from '@/api/request';
import type { EditPersonnelSearchFormParmas } from './components/editPersonnel/EditPersonnelSearch';
import type { EditPersonnelTableDataParams } from './components/editPersonnel/EditPersonnelTable';
import type { TeamMembersDataParams } from './components/dateAndPersonnel/TeamMembers';
import type { TaskListParams } from './components/taskList';
import type { DateListParams } from './components/dateAndPersonnel/Date';
// 查询表格数据
export const editPersonnelTableDataApi = (data: EditPersonnelSearchFormParmas) => {
	return request<EditPersonnelSearchFormParmas, EditPersonnelTableDataParams[]>({
		url: '/team/editInfo',
		method: 'post',
		data
	});
};

// 查询团队人员
export const teamMembers = () => {
	return request<never, TeamMembersDataParams[]>({
		url: '/team/members',
		method: 'get'
	});
};

// 查询所有任务
export const taskList = () => {
	return request<never, TaskListParams[]>({
		url: '/taskList',
		method: 'get'
	});
};

// 查询所有日期列表
export const dateList = (useId?: string) => {
	return request<never, DateListParams[]>({
		url: `/date/list/${useId}`,
		method: 'get'
	});
};
