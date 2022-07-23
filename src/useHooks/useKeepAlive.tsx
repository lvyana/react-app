import React, { FC, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SET_KEEP_ALIVE, GET_SELECTOR_KEEP_ALIVE } from '@/store/reducers/user';
import { useLocation } from 'react-router-dom';
import type { KeepAliveParams } from '@/store/reducers/user';

/**
 * @param 路径或者自定义别名
 * @returns 缓存hooks
 */
const useKeepAlive = (path?: string) => {
	const location = useLocation();
	// 获取对应url
	const PATH_URL = path || location.pathname;

	const dispatch = useAppDispatch();
	// 取出redux数据
	const getData = useAppSelector(GET_SELECTOR_KEEP_ALIVE);

	// 获取初始化数据
	const [initValue, setInitValue] = useState(getData.find((value) => value.path === PATH_URL)?.data);

	// 更新数据
	const [value, setValue] = useState(getData.find((value) => value.path === PATH_URL)?.data);

	// 白名单
	const routerData = ['/antd/expenses'];

	// 去到即将要做缓存的页面
	// const lastRouter = ['/contacts'];

	useEffect(() => {
		// 存入数据
		if (routerData.indexOf(PATH_URL) > -1) {
			const isAdd = getData.findIndex((item) => item.path === PATH_URL) > -1;
			if (isAdd) {
				const newData = getData.map((item) => {
					if (item.path === PATH_URL) {
						return { path: PATH_URL, data: value };
					} else {
						return item;
					}
				});
				dispatch(SET_KEEP_ALIVE(newData));
			} else {
				dispatch(SET_KEEP_ALIVE([...getData, { path: PATH_URL, data: value }]));
			}
		}
	}, [value]);

	return { initValue, setValue };
};

export default useKeepAlive;

// 获取对应页面数据
export const getDataItem = (value: KeepAliveParams[], pathname: string) => {
	return value.find((item) => {
		return item.path === pathname;
	});
};
