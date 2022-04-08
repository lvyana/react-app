import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormKeepAlive } from '@/redux/actions/user';
import { useLocation } from 'react-router-dom';
import { RootState } from '@/redux/store';

const useFormKeepAlive = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	console.log(location.pathname, '10');
	// 取出redux数据
	const getFormData = useSelector((state: RootState) => state.user.formKeepAlive.data);

	// 存取数据
	const [formData, setFormData] = useState(getFormData);

	// 白名单
	let routerData = ['/configureInterviewers'];
	// 去到即将要做缓存的页面
	let lastRouter = ['/dynamicform'];
	useEffect(() => {
		// 存入数据
		if (routerData.indexOf(location.pathname) > -1) {
			dispatch(setFormKeepAlive({ path: location.pathname, data: formData }));
		} else if (lastRouter.indexOf(location.pathname) > -1) {
		} else {
			dispatch(setFormKeepAlive({ path: location.pathname, data: undefined }));
		}
	}, [formData]);
	return [formData, setFormData];
};

export default useFormKeepAlive;
