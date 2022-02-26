import React from 'react';
import 'animate.css';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import router from '@/router';
import actions from '@/actions'; //导入实例
import { setToken } from '@/utils/storage';
function App() {
	actions.onGlobalStateChange((state: any) => {
		//监听全局状态
		console.log(state);
		setToken(state.token);
		console.log(setToken(state.token));
	}, true);

	return useRoutes(router);
}

export default App;
