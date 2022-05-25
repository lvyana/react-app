/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { message } from 'antd';
import { errorCode, Message, logonFailure } from '@/utils/errorCode';
import { getToken } from '@/utils/storage';

// 请求拦截器 引入加载圈
console.log(process.env.REACT_APP_BASE_API);

axios.defaults.baseURL = process.env.REACT_APP_BASE_API; //服务
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */

// 创建axios实例
var instance = axios.create({
	timeout: 1000 * 12
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 登录流程控制中，根据本地是否存在token判断用户的登录情况
		// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
		// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
		// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

		// 全局配置axios ，注冊token、
		const token = getToken();

		token && config.headers && (config.headers.Authorization = token);
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	(res: AxiosResponse) => {
		// 未设置状态码则默认成功状态
		const code = res.data.code || 200;
		const bizCode = res.data.bizCode || 20000;

		// 获取错误信息
		const msg = errorCode(code) || res.data.msg || errorCode('default');
		if (code === 401) {
			// 处理401
			logonFailure();
			return Promise.reject(new Error('登录失效'));
		} else if (code === 500) {
			message.error(msg);
			return Promise.reject(new Error(msg));
		} else if (code !== 200) {
			message.error(msg);
			return Promise.reject('error');
		} else {
			if (bizCode !== 20000) {
				message.error(msg);
				return Promise.reject('error');
			} else {
				return res;
			}
		}
	},
	// 请求失败
	(error: AxiosError) => {
		console.log('err', error.message);
		let { message } = error;
		if (message == 'Network Error') {
			message = '后端接口连接异常';
		} else if (message.includes('timeout')) {
			message = '系统接口请求超时';
		} else if (message.includes('Request failed with status code')) {
			message = '系统接口' + message.substr(message.length - 3) + '异常';
		}
		Message('error', message);
		return Promise.reject(error);
	}
);

// 通用下载方法get
export function downloadGet(url: string, filename: string) {
	return instance
		.get(url, {
			responseType: 'blob'
		})
		.then((data) => {
			const content: BlobPart = data as unknown as BlobPart;
			const blob = new Blob([content]);
			if ('download' in document.createElement('a')) {
				const elink = document.createElement('a');
				elink.download = filename;
				elink.style.display = 'none';
				elink.href = URL.createObjectURL(blob);
				document.body.appendChild(elink);
				elink.click();
				URL.revokeObjectURL(elink.href);
				document.body.removeChild(elink);
			} else {
				(navigator as unknown as { msSaveBlob: (blob: Blob, filename: string) => void }).msSaveBlob(blob, filename);
			}
		})
		.catch((r) => {
			console.error(r);
		});
}

export default instance;
