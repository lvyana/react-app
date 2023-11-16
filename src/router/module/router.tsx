/**
 * @file ReactDom相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';
import Test from '@/views/routerDom/routerDemo/Test';
import List from '@/views/routerDom/routerDemo/List';

import { Routes } from '../index';

// react-router-dom
const RouterDemo = () => import(/* webpackChunkName: "routerDemo" */ '@/views/routerDom/routerDemo');
// const Test = () => import(/* webpackChunkName: "Test" */ '@/views/routerDom/routerDemo/Test');
// const List = () => import(/* webpackChunkName: "List" */ '@/views/routerDom/routerDemo/List');
const RouterInfo = () => import(/* webpackChunkName: "routerInfo" */ '@/views/routerDom/routerInfo');

// react-router-dom
const routerCom: Routes[] = [
	{ index: true, element: <Navigate to="routerDemo" /> },
	{
		path: 'routerDemo',
		element: suspenseLoad(RouterDemo),
		// 如果一下使用懒加载会导致路由无法使用

		children: [
			{
				path: ':id',
				element: <Test />,
				// 渲染前执行
				loader: ({ params, request }) => {
					return new Promise((res, rej) => {
						setTimeout(() => {
							res(1000);
						}, 2000);
					});
				},
				// 当提交表单后(如POST、PUT请求)，会触发
				action: async ({ params, request }) => {
					try {
						console.log('Before action');
						let formData = await request.formData();
						console.log(formData);

						const username = formData.get('username');
						const password = formData.get('password');
						console.log('loginAction: ', username, password);
						// TODO；这里省略掉username和password的校验、登录接口API调用，直接认为登录成功
						return redirect('/');
					} catch (error) {
						console.error('Action error:', error);
					}
				}
				// errorElement: <ErrorView></ErrorView>
			},
			{ path: 'list', element: <List /> }
		]
	},
	{
		path: 'routerInfo',
		element: suspenseLoad(RouterInfo)
	}
];

export default routerCom;
