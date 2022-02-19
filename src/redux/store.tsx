import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; //开发者工具
import layout from './reducers/layout';
import user from './reducers/user';

const allreducer = combineReducers({
	layout,
	user
});

const store = createStore(allreducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

/**
 *
 * useState 参数类型
 */
export type RootState = ReturnType<typeof store.getState>;
