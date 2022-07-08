import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; //开发者工具
import layout from './reducers/layout';
import user from './reducers/user';
import log from './reducers/log';

// const store = createStore(allreducer, composeWithDevTools(applyMiddleware(thunk, logger)));
// export default store;

const store = configureStore({
	reducer: {
		layout,
		user,
		log
	}
});

/**
 *
 * useState 参数类型
 */
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
