import request from '@/api/request';
import { IsearchFormType } from './components/SearchForm';
import { checkInterviewerExistForm } from './components/EidtInterviewer';
// 获取项目组
export function projectList() {
	return request({
		url: '/system/project/list',
		method: 'get'
	});
}

// 获取所有面试官
export function interviewerList(data: IsearchFormType) {
	return request({
		url: '/system/interviewer/pageList',
		method: 'post',
		data
	});
}

// 查询所有用户
export function findAllInterviewer() {
	return request({
		url: '/system/interviewer/findAllInterviewer',
		method: 'get'
	});
}

// 用户昵称转登录账号
export function pinyin(data: { nickName: string }) {
	return request({
		url: '/system/interviewer/pinyin',
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
