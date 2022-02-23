import { message } from 'antd';

export const errorCode = (code: number | string) => {
	let codeMsg;
	if (code === 401) {
		codeMsg = '认证失败，无法访问系统资源';
	} else if (code === 401) {
		codeMsg = '当前操作没有权限';
	} else if (code === 404) {
		codeMsg = '当前操作没有权限';
	} else if (code === 'default') {
		codeMsg = '系统正在打盹，请稍后重试';
	}
	return codeMsg;
};

export const Message = (type: string, msg: string) => {
	if (type === 'error') {
		return message.error(msg);
	}
};
