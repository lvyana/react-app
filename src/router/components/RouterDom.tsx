/**
 * @file ReactDom相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';
import Auth from '../auth';

// react-router-dom
const RouterDemo = lazy(() => import('@/views/routerCom/routerDemo'));
const Test = lazy(() => import('@/views/routerCom/routerDemo/Test'));
const List = lazy(() => import('@/views/routerCom/routerDemo/List'));
const MyUseRouter = lazy(() => import('@/views/routerCom/myUseRouter'));

// react-router-dom
const Plugin = [
	{ index: true, element: <Navigate to="routerDemo" /> },
	{
		path: 'routerDemo',
		element: suspenseLoad(<RouterDemo />),
		children: [
			{ path: ':id', element: suspenseLoad(<Test />) },
			{ path: 'list', element: suspenseLoad(<List />) }
		]
	},
	{
		path: 'myUseRouter',
		element: suspenseLoad(<MyUseRouter />)
	}
];

export default Plugin;
