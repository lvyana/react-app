import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeepAlive } from '@/redux/actions/user';
import { useLocation } from 'react-router-dom';
import { RootState } from '@/redux/store';

const useKeepAlive = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	console.log(location.pathname, '10');
	// 取出redux数据
	const getData = useSelector((state: RootState) => state.user.keepAlive.data);

	// 存取数据
	const [value, setValue] = useState(getData);

	// 白名单
	let routerData = ['/configureInterviewers'];
	// 去到即将要做缓存的页面
	let lastRouter = ['/dynamicform'];
	useEffect(() => {
		// 存入数据
		if (routerData.indexOf(location.pathname) > -1) {
			dispatch(setKeepAlive({ path: location.pathname, data: value }));
		} else if (lastRouter.indexOf(location.pathname) > -1) {
		} else {
			dispatch(setKeepAlive({ path: location.pathname, data: undefined }));
		}
	}, [value]);
	return [value, setValue];
};

export default useKeepAlive;
