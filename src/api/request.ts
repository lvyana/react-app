/**
 * @file axios封装 请求拦截、响应拦截、错误统一处理
 * @author ly
 * @createDate 2023年2月3日
 */
import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig, AxiosError, Method } from 'axios';
import { message } from 'antd';
import { errorCode, Message, logonFailure } from '@/utils/errorCode';
import { getToken } from '@/utils/storage';

/**
 * AxiosConfig
 * @param timeout 超时
 * @param headers 请求头配置
 */
interface AxiosConfig {
	timeout: number;
	headers: {
		'Content-Type': string;
	};
}

// 请求拦截器 引入加载圈
axios.defaults.baseURL = process.env.REACT_APP_BASE_API; //服务

const config: AxiosConfig = {
	timeout: 1000 * 12,
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
};

// 创建axios实例
let instance = axios.create(config);

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
		if (token && config.headers) {
			config.headers.Authorization = token;
		}
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	(res: AxiosRequestConfig) => {
		// 未设置状态码则默认成功状态
		const code = res.data.code;

		// 获取错误信息
		const msg = errorCode(code) || res.data.msg || errorCode('default');
		if (code === 401) {
			// 处理401
			logonFailure();
			return Promise.reject(new Error('登录失效'));
		} else if (code === 500) {
			message.error(msg);
			return Promise.reject(new Error(msg));
		} else if (code === 200) {
			return res.data;
		}
		message.error(msg);
		return Promise.reject('error');
	},
	// 请求失败
	(error: AxiosError) => {
		let { message } = error;
		if (message === 'Network Error') {
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
		.catch((r) => {});
}

/**
 * 请求配置
 * @param url 路径
 * @param method 请求类型
 * @param data 请求参数
 * @param config 参数配置
 */
interface RequestParams<R> {
	url: string;
	method: Method;
	data?: R;
	config?: AxiosRequestConfig;
}
/**
 * 响应参数
 * @param code 状态码
 * @param message 提示语
 * @param data 响应数据
 * @param total 条数
 */
type Data<T> = {
	code: number;
	message: string;
	data: T;
	total: number;
};

/**
 * @method
 * @param RequestParams 请求配置
 * @returns instance 返回实例
 */
const request = <T, R>({ url, method, data, config }: RequestParams<T>) => {
	return instance.request<R, Data<R>>({
		url,
		method,
		[method.toLowerCase() === 'get' ? 'params' : 'data']: data,
		...config
	});
};

export default request;
