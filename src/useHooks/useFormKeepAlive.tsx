import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFormKeepAlive } from '@/redux/actions/user';
import { useLocation } from 'react-router-dom';
import { FormInstance } from 'antd';

const useFormKeepAlive = (form: FormInstance, keepAliveValue: any) => {
	const location = useLocation();
	const dispatch = useDispatch();
	console.log(location.pathname, '10');
	const [formData, setFormData] = useState(keepAliveValue);

	// 白名单
	let routerData = ['/screenResumes'];
	// 去到即将要做缓存的页面
	let lastRouter = ['/configureInterviewers'];
	useEffect(() => {
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
