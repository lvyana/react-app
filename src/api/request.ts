/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { message } from 'antd';
type Type = 'error' | 'success' | 'info' | 'warn' | 'warning';
const openError = (msg: string, type: Type = 'error') => {
  if (msg) {
    if (type === 'error') {
      message.error(msg);
    } else if (type === 'success') {
      message.success(msg);
    } else if (type === 'info') {
      message.info(msg);
    } else if (type === 'warn') {
      message.warn(msg);
    } else if (type === 'warning') {
      message.warning(msg);
    }
  } else {
    message.error('系统异常');
  }
};
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */

// 全局配置axios ，注冊token、

// 请求拦截器 引入加载圈

axios.defaults.baseURL = process.env.REACT_APP_SERVE_URL; //服务
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number, other: string) => {
  let msg: string = '';
  // 状态码判断
  if (status === 401) {
    // 401: 未登录状态，跳转登录页
    msg = '请登录';
  } else if (status === 405) {
    msg = '请求被拒,联系管理员';
  } else if (status === 404) {
    msg = '请求的资源不存在';
  } else if (status === 500) {
    msg = '服务报错,联系管理员';
  }
  openError(msg);
};

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 12,
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

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
    const token = sessionStorage.getItem('token');
    token && config.headers && (config.headers.Authorization = token);
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res: AxiosResponse) => {
    let { data, code, message } = res.data;
    if (code === 200) {
      return Promise.resolve(res);
    } else {
      openError(code + '异常错误');
      return Promise.reject(res);
    }
  },
  // 请求失败
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false)
    }
  }
);

export default instance;
