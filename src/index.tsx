import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import actions from './actions';
import { Provider } from 'react-redux';

import store from './redux/store';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');

interface Window {
	__POWERED_BY_QIANKUN__?: boolean;
}

function render(props: any) {
	const { container } = props;

	ReactDOM.render(
		<ConfigProvider locale={zhCN}>
			<BrowserRouter basename={(window as Window).__POWERED_BY_QIANKUN__ ? '/qiankun/react' : '/'}>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ConfigProvider>,
		container ? container.querySelector('#root') : document.querySelector('#root')
	);
}

if (!(window as Window).__POWERED_BY_QIANKUN__) {
	render({});
}

export async function bootstrap() {
	console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
	console.log('[react16] props from main framework', props);
	actions.setActions(props); //注入actions实例

	render(props);
}

export async function unmount(props: any) {
	const { container } = props;
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
