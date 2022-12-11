/**
 * @name React相关页面
 * @user ly
 * @date 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoad from '../suspenseLoad';
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
	{ index: true, element: <Navigate to="MyUseReducer" /> },
	{
		path: 'MyUseState',
		element: SuspenseLoad(<MyUseState />)
	},
	{
		path: 'MyUseEffect',
		element: SuspenseLoad(<MyUseEffect />)
	},
	{
		path: 'MyUseLayoutEffect',
		element: SuspenseLoad(<MyUseLayoutEffect />)
	},
	{
		path: 'MyUseReducer',
		element: SuspenseLoad(<MyUseReducer />)
	},
	{
		path: 'MyUseContext',
		element: SuspenseLoad(<MyUseContext />)
	},
	{
		path: 'MyUseMemo',
		element: SuspenseLoad(<MyUseMemo />)
	},
	{
		path: 'MyUseCallback',
		element: SuspenseLoad(<MyUseCallback />)
	},
	{
		path: 'MyUseRef',
		element: SuspenseLoad(<MyUseRef />)
	},
	{
		path: 'MySuspense',
		element: SuspenseLoad(<MySuspense />)
	},
	{
		path: 'MyForwardRef',
		element: SuspenseLoad(<MyForwardRef />)
	},

	{ path: 'Rtk', element: SuspenseLoad(<Rtk />) }
];

export default reactCom;
