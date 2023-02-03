/**
 * @file 标准axios
 * @author ly
 * @createDate 2023年2月3日
 */
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
	baseURL: ''
});

export function requestMd(options: AxiosRequestConfig) {
	return instance(options);
}
