/**
 * @file 实现router
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import suspenseLoad from './suspenseLoad';
import { setRouterAuth } from './auth';
import antdCom from './components/Antd';
import reactCom from './components/React';
import RouterCom from './components/RouterDom';
import Plugin from './components/Plugin';

// login
const Login = lazy(() => import(/* webpackChunkName: "Login" */ '@/views/login'));
// Layouts
const Layouts = lazy(() => import(/* webpackChunkName: "Layouts" */ '@/layout'));
// 首页
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@/views/home'));
// 404
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '@/antdComponents/NotFound'));
// 个人中心
const MyCenter = lazy(() => import(/* webpackChunkName: "MyCenter" */ '@/views/myCenter'));
// 消息中心
const MessgeCenter = lazy(() => import(/* webpackChunkName: "MessgeCenter" */ '@/views/messageCenter'));
// today
const ToDay = lazy(() => import(/* webpackChunkName: "ToDay" */ '@/views/toDay'));

const router: RouteObject[] = [
	{ path: '/login', element: suspenseLoad(<Login />) },
	{
		path: '/',
		element: suspenseLoad(<Layouts />),
		children: setRouterAuth([
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
				children: [...RouterCom]
			},
			{
				path: 'plugin',
				children: [...Plugin]
			},
			{ path: 'mycenter', element: suspenseLoad(<MyCenter />) },
			{ path: 'messgeCenter', element: suspenseLoad(<MessgeCenter />) }
			// { path: '*', element: suspenseLoad(<NotFound />) }
		])
	},
	{ path: '/today', element: suspenseLoad(<ToDay />) },
	{ path: '*', element: suspenseLoad(<NotFound />) }
];
export default router;
