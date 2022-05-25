import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeepAlive } from '@/redux/actions/user';
import { useLocation } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { reSetKeepAliveValue } from '@/redux/constant/user';

const useKeepAlive = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	// 取出redux数据
	const getData = useSelector((state: RootState) => state.user.keepAlive);

	// 获取初始化数据
	const [initValue, setInitValue] = useState(getData.find((value) => value.path === location.pathname)?.data);

	// 更新数据
	const [value, setValue] = useState(getData.find((value) => value.path === location.pathname)?.data);

	// 白名单
	let routerData = ['/interviewer', '/configureInterviewers', '/project'];

	// 去到即将要做缓存的页面
	let lastRouter = ['/contacts'];

	useEffect(() => {
		// 存入数据
		if (routerData.indexOf(location.pathname) > -1) {
			let isAdd = getData.findIndex((item) => item.path === location.pathname) > -1;
			if (isAdd) {
				let newData = getData.map((item) => {
					if (item.path === location.pathname) {
						return { path: location.pathname, data: value };
					} else {
						return item;
					}
				});
				dispatch(setKeepAlive(newData));
			} else {
				dispatch(setKeepAlive([...getData, { path: location.pathname, data: value }]));
			}
		}
	}, [value]);
	1;
	return [initValue, setValue];
};

export default useKeepAlive;

// 获取对应页面数据
export const getDataItem = (value: reSetKeepAliveValue[], pathname: string) => {
	return value.find((item) => {
		return item.path === pathname;
	});
};
