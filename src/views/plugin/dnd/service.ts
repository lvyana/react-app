import request from '@/api/request';

export type OptionsPararms = {
	label: string;
	value: string;
	id: string;
};

// 查询表单option
export const anyOptions = (url: string) => {
	return request<never, OptionsPararms[]>({
		url: '/dnd/options',
		method: 'get'
	});
};
