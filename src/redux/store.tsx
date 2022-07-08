import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import layout from './reducers/layout';
import user from './reducers/user';
import log from './reducers/log';

const store = configureStore({
	reducer: {
		layout,
		user,
		log
	},
	middleware: [logger]
});

/**
 *
 * useState 参数类型
 */
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
