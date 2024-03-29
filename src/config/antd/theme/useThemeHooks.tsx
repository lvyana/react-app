/**
 * @file 封装theme hooks实例参数
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { Tabs, theme } from 'antd';

const { useToken } = theme;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useThemeHooks = () => {
	const { token } = useToken();
	// console.log(token);
	return { token };
};

export default useThemeHooks;
