/**
 *	@name 实现RTK数据管理
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import layout from './reducers/layout';
import user from './reducers/user';
import log from './reducers/log';
import globalConfig from './reducers/globalConfig';

import type { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
export * from './hooks';

// 环境区分中间件
const ENV = process.env.NODE_ENV === 'production';
const middlewareConfig = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
	if (ENV) {
		return getDefaultMiddleware();
	} else {
		return getDefaultMiddleware();
		// .concat(logger);
	}
};

const store = configureStore({
	reducer: {
		layout,
		user,
		log,
		globalConfig
	},
	middleware: (getDefaultMiddleware) => middlewareConfig(getDefaultMiddleware),
	devTools: !ENV
});

// useState 参数类型
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
