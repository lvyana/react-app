import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';
// 组件
// import Login from '@/views/login';
// import Error404 from '@/views/Error404';
// import Layout from '@/layout/index'; // Layout
// import Expenses from '@/views/expenses';
// import Dynamicform from '@/views/dynamicform'; //动态表单
// import ConfigureInterviewers from '@/views/configureInterviewers';
// import MyCenter from '@/views/myCenter'; //个人中心
// import RichTextEdit from '@/views/richTextEdit'; //富文本编辑

const RichTextEdit = lazy(() => import('@/views/richTextEdit')); //富文本编辑
const MyCenter = lazy(() => import('@/views/myCenter')); //个人中心
const Dynamicform = lazy(() => import('@/views/dynamicform')); //动态表单
const Layout = lazy(() => import('@/layout')); // Layout
const Expenses = lazy(() => import('@/views/expenses'));
const Login = lazy(() => import('@/views/login'));
const ConfigureInterviewers = lazy(() => import('@/views/configureInterviewers'));
const Error404 = lazy(() => import('@/views/Error404'));

interface Window {
	__POWERED_BY_QIANKUN__?: boolean;
}

// 判断是不是子应用
const router: RouteObject[] = (window as Window).__POWERED_BY_QIANKUN__
	? [
			{ path: '/login', element: SuspenseLoad(<Login />) },
			{
				path: '/',
				element: <Auth element={SuspenseLoad(<Layout />)} title="系统" />,
				children: [
					// { index: true, element: <Navigate to="home" /> },
				]
			},
			{
				path: 'expenses',
				element: <Auth element={SuspenseLoad(<Expenses />)} title="Expenses" />
			},
			{
				path: 'configureInterviewers',
				element: <Auth element={SuspenseLoad(<ConfigureInterviewers />)} title="configureInterviewers" />
			},
			{ path: 'richtextedit', element: <Auth element={SuspenseLoad(<RichTextEdit />)} title="富文本" /> },
			{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} title="个人中心" /> },
			{ path: '*', element: <Error404 /> }
	  ]
	: [
			{ path: '/login', element: SuspenseLoad(<Login />) },
			{
				path: '/',
				element: <Auth element={SuspenseLoad(<Layout />)} title="系统" />,
				children: [
					// { index: true, element: <Navigate to="home" /> },
					{
						path: 'expenses',
						element: <Auth element={SuspenseLoad(<Expenses />)} title="Expenses" />
					},
					{
						path: 'dynamicform',
						element: <Auth element={SuspenseLoad(<Dynamicform />)} title="Dynamicform" />
					},
					{
						path: 'dynamicform',
						element: <Auth element={SuspenseLoad(<Dynamicform />)} title="Dynamicform" />
					},
					{
						path: 'configureInterviewers',
						element: <Auth element={SuspenseLoad(<ConfigureInterviewers />)} title="configureInterviewers" />
					},
					{ path: 'richtextedit', element: <Auth element={SuspenseLoad(<RichTextEdit />)} title="富文本" /> },
					{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} title="个人中心" /> },
					{ path: '*', element: <Error404 /> }
				]
			}
	  ];
export default router;
