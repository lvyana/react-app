import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; //开发者工具
import layout from './reducers/layout';
import user from './reducers/user';
import configureInterviewers from './reducers/configureInterviewers';
import log from './reducers/log';

const allreducer = combineReducers({
	layout,
	user,
	configureInterviewers,
	log
});

const store = createStore(allreducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;

/**
 *
 * useState 参数类型
 */
export type RootState = ReturnType<typeof store.getState>;
