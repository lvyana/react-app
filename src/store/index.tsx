import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import layout, { InitLayoutParams } from './reducers/layout';
import user, { InitUserParams } from './reducers/user';
import log, { InitLogParams } from './reducers/log';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

// 环境区分中间件
const ENV = process.env.NODE_ENV === 'production';
const middlewareConfig = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
	if (ENV) {
		return getDefaultMiddleware();
	} else {
		return getDefaultMiddleware().concat(logger);
	}
};

const store = configureStore({
	reducer: {
		layout,
		user,
		log
	},
	middleware: (getDefaultMiddleware) => middlewareConfig(getDefaultMiddleware),
	devTools: !ENV
});

/**
 *
 * useState 参数类型
 */
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
