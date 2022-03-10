import React, { useEffect } from 'react';
import 'animate.css';
import { useRoutes } from 'react-router-dom';
import router from '@/router';
import actions from '@/actions'; //导入实例
import { setToken } from '@/utils/storage';
import { useDispatch } from 'react-redux';
import { setPermiss } from '@/redux/actions/user';
import '@/styles/index.scss';

function App() {
	const dispatch = useDispatch();
	actions.onGlobalStateChange((state: any) => {
		//监听全局状态
		console.log(state);
		// 设置token
		setToken(state.token);
		// 设置按钮权限
		dispatch(setPermiss(state.permissions));
	}, true);
	useEffect(() => {}, []);

	return useRoutes(router);
}

export default App;
