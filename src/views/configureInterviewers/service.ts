import request from '@/api/request';
import { IsearchFormType } from './components/SearchForm';
import { checkInterviewerExistForm, IinterviewerProjectType } from './components/ModalInterviewer';
// 获取项目组
export function projectList() {
	return request({
		url: '/system',
		method: 'get'
	});
}

// 获取所有面试官
export function interviewerList(data: IsearchFormType) {
	return request({
		url: '/system',
		method: 'post',
		data
	});
}

// 查询所有用户
export function findAllInterviewer() {
	return request({
		url: '/system',
		method: 'get'
	});
}

// 校验登录账号
export function checkpinyin(data: { pinYinName: string }) {
	return request({
		url: '/system/interviewer/checkpinyin',
		method: 'post',
		data
	});
}

// 添加面试官
export function addInterviewerAccount(data: checkInterviewerExistForm) {
	return request({
		url: '/system/interviewer/addInterviewerAccount',
		method: 'post',
		data
	});
}

// 新增面试官关联项目
export function addInterviewerAndProject(data: IinterviewerProjectType) {
	return request({
		url: '/system/interviewer/addInterviewerAndProject',
		method: 'post',
		data
	});
}

// 修改面试官关联项目
export function updateInterviewerAndProject(data: IinterviewerProjectType) {
	return request({
		url: '/system/interviewer/updateInterviewerAndProject',
		method: 'post',
		data
	});
}

// 修改状态
export function updateInterviewerStatus(data: IinterviewerProjectType) {
	return request({
		url: '/system/interviewer/updateInterviewerStatus',
		method: 'post',
		data
	});
}
