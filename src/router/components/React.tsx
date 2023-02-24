/**
 * @file React相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';
import Auth from '../auth';

// react一些钩子函数用法
const MyUseState = lazy(() => import('@/views/reactCom/useHooksCom/myUseState'));
const MyUseEffect = lazy(() => import('@/views/reactCom/useHooksCom/myUseEffect'));
const MyUseLayoutEffect = lazy(() => import('@/views/reactCom/useHooksCom/myUseLayoutEffect'));
const MyUseReducer = lazy(() => import('@/views/reactCom/useHooksCom/myUseReducer'));
const MyUseContext = lazy(() => import('@/views/reactCom/useHooksCom/myUseContext'));
const MyUseMemo = lazy(() => import('@/views/reactCom/useHooksCom/myUseMemo'));
const MyUseCallback = lazy(() => import('@/views/reactCom/useHooksCom/myUseCallback'));
const MyUseRef = lazy(() => import('@/views/reactCom/useHooksCom/myUseRef'));
const MySuspense = lazy(() => import('@/views/reactCom/useHooksCom/mySuspense'));
const MyForwardRef = lazy(() => import('@/views/reactCom/useHooksCom/myForwardRef'));
const Rtk = lazy(() => import('@/views/reactCom/rtk')); // RTK

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
