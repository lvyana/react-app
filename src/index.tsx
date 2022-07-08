import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import ErrorBoundary from '@/components/errorBoundary';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
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

function render() {
	ReactDOM.render(
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<BrowserRouter basename={'/'}>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</BrowserRouter>
			</Provider>
		</ConfigProvider>,
		document.querySelector('#root')
	);
}

render();
