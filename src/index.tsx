import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/errorBoundary';
import App from './App';
// import 'antd/dist/antd.css';
import './index.scss';

// i18n
import '@/config/i18n';

// RTX
import store from './store';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import enUS from 'antd/lib/locale/en_US';
// 中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');

function render() {
	const container = document.querySelector('#root') as Element;

	const root = ReactDOM.createRoot(container);

	root.render(
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<BrowserRouter basename={'/'}>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</BrowserRouter>
			</Provider>
		</ConfigProvider>
	);
}

render();
