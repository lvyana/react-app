import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_KEEP_ALIVE, GET_SELECTOR_KEEP_ALIVE } from '@/store/reducers/user';
import { useLocation } from 'react-router-dom';
import { reSetKeepAliveValue } from '@/store/reducers/user';

/**
 *
 * @returns 缓存hooks
 */
const useKeepAlive = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	// 取出redux数据
	const getData = useSelector(GET_SELECTOR_KEEP_ALIVE);

	// 获取初始化数据
	const [initValue, setInitValue] = useState(getData.find((value) => value.path === location.pathname)?.data);

	// 更新数据
	const [value, setValue] = useState(getData.find((value) => value.path === location.pathname)?.data);

	// 白名单
	const routerData = ['/expenses'];

	// 去到即将要做缓存的页面
	// const lastRouter = ['/contacts'];

	useEffect(() => {
		// 存入数据
		if (routerData.indexOf(location.pathname) > -1) {
			const isAdd = getData.findIndex((item) => item.path === location.pathname) > -1;
			if (isAdd) {
				const newData = getData.map((item) => {
					if (item.path === location.pathname) {
						return { path: location.pathname, data: value };
					} else {
						return item;
					}
				});
				dispatch(SET_KEEP_ALIVE(newData));
			} else {
				dispatch(SET_KEEP_ALIVE([...getData, { path: location.pathname, data: value }]));
			}
		}
	}, [value]);

	return { initValue, setValue };
};

export default useKeepAlive;

// 获取对应页面数据
export const getDataItem = (value: reSetKeepAliveValue[], pathname: string) => {
	return value.find((item) => {
		return item.path === pathname;
	});
};
