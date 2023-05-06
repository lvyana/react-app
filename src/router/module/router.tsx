/**
 * @file ReactDom相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// react-router-dom
const RouterDemo = lazy(() => import(/* webpackChunkName: "RouterDemo" */ '@/views/routerDom/routerDemo'));
const Test = lazy(() => import(/* webpackChunkName: "Test" */ '@/views/routerDom/routerDemo/Test'));
const List = lazy(() => import(/* webpackChunkName: "List" */ '@/views/routerDom/routerDemo/List'));
const RouterInfo = lazy(() => import(/* webpackChunkName: "RouterInfo" */ '@/views/routerDom/routerInfo'));

// react-router-dom
const routerCom = [
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
		path: 'routerInfo',
		element: suspenseLoad(<RouterInfo />)
	}
];

export default routerCom;
