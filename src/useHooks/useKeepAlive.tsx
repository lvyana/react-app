/**
 * @file 实现缓存
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, useState, useEffect, useMemo } from 'react';
import { message } from 'antd';
import { useAppSelector, useAppDispatch } from '@/store';
import { GET_ANT_EXPENSES, SET_ANT_EXPENSES, GET_DEFAULT } from '@/store/reducers/keepAlive';
import { useLocation } from 'react-router-dom';
import type { TabelDataParams } from '@/views/antdCom/expenses/service';
/**
 * @param 路径或者自定义别名
 * @returns initKeepAliveData 获取缓存参数
 * @returns setKeepAliveData 修改缓存数据方法
 */
const useKeepAlive = (path?: string) => {
	const location = useLocation();
	// 获取对应url
	const PATH_URL = path || location.pathname;

	const dispatch = useAppDispatch();
	// 获取初始化数据 取出redux数据
	const initValue = useAppSelector(GET_ANT_EXPENSES);
	const initKeepAliveData = useMemo(() => initValue, []);

	// 白名单
	const routerData = ['/antd/expenses'];

	const setKeepAliveData = <T,>(value: T) => {
		// 白名单是否需要缓存
		if (routerData.indexOf(PATH_URL) > -1) {
			// 存入数据
			if (PATH_URL === '/antd/expenses') {
				dispatch(SET_ANT_EXPENSES(value as TabelDataParams));
			} else {
				message.error('没有匹配到缓存path');
			}
		}
	};

	return { initKeepAliveData, setKeepAliveData };
};

export default useKeepAlive;
