/**
 * @name ReactDom相关页面
 * @user ly
 * @date 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoad from '../suspenseLoad';
import Auth from '../auth';

// react-router-dom
const RouterDemo = lazy(() => import('@/views/routerCom/routerDemo'));
const Test = lazy(() => import('@/views/routerCom/routerDemo/Test'));
const List = lazy(() => import('@/views/routerCom/routerDemo/List'));
const MyUseRouter = lazy(() => import('@/views/routerCom/myUseRouter'));

// react-router-dom
const Plugin = [
	{ index: true, element: <Navigate to="RouterDemo" /> },
	{
		path: 'RouterDemo',
		element: SuspenseLoad(<RouterDemo />),
		children: [
			{ path: ':id', element: SuspenseLoad(<Test />) },
			{ path: 'list', element: SuspenseLoad(<List />) }
		]
	},
	{
		path: 'MyUseRouter',
		element: SuspenseLoad(<MyUseRouter />)
	}
];

export default Plugin;
