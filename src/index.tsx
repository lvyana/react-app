import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/antdComponents/errorBoundary';

// 数据持久化
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store';

import App from './App';
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
import Theme from '@/theme';

function render() {
	const container = document.querySelector('#root') as Element;

	const root = ReactDOM.createRoot(container);

	root.render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Theme>
					<BrowserRouter basename={'/'}>
						<ErrorBoundary>
							<App />
						</ErrorBoundary>
					</BrowserRouter>
				</Theme>
			</PersistGate>
		</Provider>
	);
}

render();
