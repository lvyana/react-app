/**
 *	@name 实现router
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';
import antdCom from './components/Antd';
import reactCom from './components/React';
import RouterCom from './components/RouterDom';
import Plugin from './components/Plugin';

// login
const Login = lazy(() => import('@/views/login'));
// Layouts
const Layouts = lazy(() => import('@/layout'));
// 首页
const Home = lazy(() => import('@/views/home'));
// 404
const NotFound = lazy(() => import('@/antdComponents/NotFound'));
// 个人中心
const MyCenter = lazy(() => import('@/views/myCenter'));
// 消息中心
const MessgeCenter = lazy(() => import('@/views/messageCenter'));
// today
const ToDay = lazy(() => import('@/views/toDay'));

const router: RouteObject[] = [
	{ path: '/login', element: SuspenseLoad(<Login />) },
	{
		path: '/',
		element: <Auth element={SuspenseLoad(<Layouts />)} />,
		children: [
			{ index: true, element: <Navigate to="home" /> },
			{ path: 'home', element: SuspenseLoad(<Home />) },
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
				children: [...RouterCom]
			},
			{
				path: 'plugin',
				children: [...Plugin]
			},
			{ path: 'mycenter', element: SuspenseLoad(<MyCenter />) },
			{ path: 'messgeCenter', element: SuspenseLoad(<MessgeCenter />) }
			// { path: '*', element: SuspenseLoad(<NotFound />) }
		]
	},
	{ path: '/today', element: SuspenseLoad(<ToDay />) },
	{ path: '*', element: SuspenseLoad(<NotFound />) }
];

export default router;
