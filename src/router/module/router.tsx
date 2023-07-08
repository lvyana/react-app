/**
 * @file ReactDom相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';
import Test from '@/views/routerDom/routerDemo/Test';
import List from '@/views/routerDom/routerDemo/List';

import { Routes } from '../index';

// react-router-dom
const RouterDemo = lazy(() => import(/* webpackChunkName: "routerDemo" */ '@/views/routerDom/routerDemo'));
// const Test = lazy(() => import(/* webpackChunkName: "Test" */ '@/views/routerDom/routerDemo/Test'));
// const List = lazy(() => import(/* webpackChunkName: "List" */ '@/views/routerDom/routerDemo/List'));
const RouterInfo = lazy(() => import(/* webpackChunkName: "routerInfo" */ '@/views/routerDom/routerInfo'));

// react-router-dom
const routerCom: Routes[] = [
	{ index: true, element: <Navigate to="routerDemo" /> },
	{
		path: 'routerDemo',
		element: suspenseLoad(<RouterDemo />),
		// 如果一下使用懒加载会导致路由无法使用
		children: [
			{
				path: ':id',
				element: <Test />,
				loader: ({ params, request }) => {
					return new Promise((res, rej) => {
						setTimeout(() => {
							res(1);
						}, 2000);
					});
				},
				action: ({ params, request }) => {
					return new Promise((res, rej) => {
						setTimeout(() => {
							console.log('action');
							res(1);
						}, 5000);
					});
				}
				// errorElement: <ErrorView></ErrorView>
			},
			{ path: 'list', element: <List /> }
		]
	},
	{
		path: 'routerInfo',
		element: suspenseLoad(<RouterInfo />)
	}
];

export default routerCom;
