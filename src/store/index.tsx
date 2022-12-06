/**
 *	@name 实现RTK数据管理
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { layout, user, log, globalConfig } from './reducers';

import type { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 数据持久化
// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage
// 	// reducer里不持久化的数据,除此外均为持久化数据,[]表示都持久化
// 	// blacklist: ['log'],
// 	// reducer里持久化的数据,除此外均为不持久化数据
// 	// whitelist: ['layout']
// };
const persistedReducer = combineReducers({
	layout: persistReducer(
		{
			key: 'layout',
			storage,
			// whitelist: [] // reducer里持久化的数据,除此外均为不持久化数据
			blacklist: [] // reducer里不持久化的数据,除此外均为持久化数据,[]表示都持久化
		},
		layout
	),
	user: persistReducer(
		{
			key: 'user',
			storage,
			whitelist: []
			// blacklist: []
		},
		user
	),
	log: persistReducer(
		{
			key: 'log',
			storage,
			whitelist: []
			// blacklist: []
		},
		log
	),
	globalConfig: persistReducer(
		{
			key: 'globalConfig',
			storage,
			whitelist: []
			// blacklist: []
		},
		globalConfig
	)
});

// 环境区分中间件
const ENV = process.env.NODE_ENV === 'production';
const middlewareConfig = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
	if (ENV) {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		});
	} else {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		});
		// .concat(logger);
	}
};

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => middlewareConfig(getDefaultMiddleware),
	devTools: !ENV
});

export * from './hooks';

// useState 参数类型
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
