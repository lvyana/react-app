/**
 * @file 实现router
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import Layouts from '@/layout';
import Login from '@/views/login';
import ToDay from '@/views/toDay';
import suspenseLoad from './suspenseLoad';
import { setRouterAuth } from './auth';
import antdCom from './module/antd';
import reactCom from './module/react';
import routerCom from './module/router';
import pluginCom from './module/plugin';

/**
 * lazy Suspense 有嵌套情况 且有接口请求或者模拟请求,时间小于400 会导致重复渲染
 */

// login
// const Login = lazy(() => import(/* webpackChunkName: "Login" */ '@/views/login'));
// Layouts
// const Layouts = lazy(() => import(/* webpackChunkName: "Layouts" */ '@/layout'));
// 首页
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@/views/home'));
// 404
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '@/antdComponents/NotFound'));
// 个人中心
const MyCenter = lazy(() => import(/* webpackChunkName: "MyCenter" */ '@/views/myCenter'));
// 消息中心
const MessgeCenter = lazy(() => import(/* webpackChunkName: "MessgeCenter" */ '@/views/messageCenter'));
// today
// const ToDay = lazy(() => import(/* webpackChunkName: "ToDay" */ '@/views/toDay'));

type Route = { auth?: boolean };

export type Routes = Route & RouteObject;

const router: Routes[] = setRouterAuth([
	{ path: '/login', element: <Login />, auth: false },
	{
		path: '/',
		element: <Layouts />,
		children: [
			{ index: true, element: <Navigate to="home" /> },
			{
				path: 'home',
				element: suspenseLoad(<Home />)
			},
			{
				path: 'antd',
				children: [...antdCom]
			},
			{
				path: 'react',
				children: [...reactCom]
			},
			{
				path: 'router',
				children: [...routerCom]
			},
			{
				path: 'plugin',
				children: [...pluginCom]
			},
			{ path: 'mycenter', element: suspenseLoad(<MyCenter />) },
			{ path: 'messgeCenter', element: suspenseLoad(<MessgeCenter />) }
			// { path: '*', element: suspenseLoad(<NotFound />) }
		]
	},
	{ path: '/today', element: suspenseLoad(<ToDay />), auth: false },
	{ path: '*', element: suspenseLoad(<NotFound />), auth: false }
]);
export default router;
