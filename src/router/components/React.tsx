/**
 * @file React相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// react一些钩子函数用法
const MyUseState = lazy(() => import(/* webpackChunkName: "MyUseState" */ '@/views/reactCom/useHooksCom/myUseState'));
const MyUseEffect = lazy(() => import(/* webpackChunkName: "MyUseEffect" */ '@/views/reactCom/useHooksCom/myUseEffect'));
const MyUseLayoutEffect = lazy(() => import(/* webpackChunkName: "MyUseLayoutEffect" */ '@/views/reactCom/useHooksCom/myUseLayoutEffect'));
const MyUseReducer = lazy(() => import(/* webpackChunkName: "MyUseReducer" */ '@/views/reactCom/useHooksCom/myUseReducer'));
const MyUseContext = lazy(() => import(/* webpackChunkName: "MyUseContext" */ '@/views/reactCom/useHooksCom/myUseContext'));
const MyUseMemo = lazy(() => import(/* webpackChunkName: "MyUseMemo" */ '@/views/reactCom/useHooksCom/myUseMemo'));
const MyUseCallback = lazy(() => import(/* webpackChunkName: "MyUseCallback" */ '@/views/reactCom/useHooksCom/myUseCallback'));
const MyUseRef = lazy(() => import(/* webpackChunkName: "MyUseRef" */ '@/views/reactCom/useHooksCom/myUseRef'));
const MySuspense = lazy(() => import(/* webpackChunkName: "MySuspense" */ '@/views/reactCom/useHooksCom/mySuspense'));
const MyForwardRef = lazy(() => import(/* webpackChunkName: "MyForwardRef" */ '@/views/reactCom/useHooksCom/myForwardRef'));
const Rtk = lazy(() => import(/* webpackChunkName: "Rtk" */ '@/views/reactCom/rtk')); // RTK

// react API Rtk 相关等
const reactCom = [
	{ index: true, element: <Navigate to="myUseReducer" /> },
	{
		path: 'myUseState',
		element: suspenseLoad(<MyUseState />)
	},
	{
		path: 'myUseEffect',
		element: suspenseLoad(<MyUseEffect />)
	},
	{
		path: 'myUseLayoutEffect',
		element: suspenseLoad(<MyUseLayoutEffect />)
	},
	{
		path: 'myUseReducer',
		element: suspenseLoad(<MyUseReducer />)
	},
	{
		path: 'myUseContext',
		element: suspenseLoad(<MyUseContext />)
	},
	{
		path: 'myUseMemo',
		element: suspenseLoad(<MyUseMemo />)
	},
	{
		path: 'myUseCallback',
		element: suspenseLoad(<MyUseCallback />)
	},
	{
		path: 'myUseRef',
		element: suspenseLoad(<MyUseRef />)
	},
	{
		path: 'mySuspense',
		element: suspenseLoad(<MySuspense />)
	},
	{
		path: 'myForwardRef',
		element: suspenseLoad(<MyForwardRef />)
	},

	{ path: 'rtk', element: suspenseLoad(<Rtk />) }
];

export default reactCom;
