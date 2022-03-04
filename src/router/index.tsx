import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';
import Login from '@/views/login';
import Error404 from '@/views/Error404';
import Layout from '@/layout/index';
import Expenses from '@/views/expenses';
import Dynamicform from '@/views/dynamicform';
import Interviewer from '@/views/interviewer';
import ConfigureInterviewers from '@/views/configureInterviewers';
import ScreenResumes from '@/views/screenResumes';
import MyCenter from '@/views/myCenter';
// const MyCenter = lazy(() => import('@/views/myCenter')); //个人中心
// const Dynamicform = lazy(() => import('@/views/dynamicform')); //动态表单
// const Layout = lazy(() => import('@/layout')); // Layout
// const Expenses = lazy(() => import('@/views/expenses'));

interface Window {
	__POWERED_BY_QIANKUN__?: boolean;
}

// 判断是不是子应用
const router: RouteObject[] = (window as Window).__POWERED_BY_QIANKUN__
	? [
			{ path: '/login', element: <Login /> },
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
				path: 'interviewer',
				element: <Auth element={SuspenseLoad(<Interviewer />)} title="Interviewer" />
			},
			{
				path: 'configureInterviewers',
				element: <Auth element={SuspenseLoad(<ConfigureInterviewers />)} title="configureInterviewers" />
			},
			{
				path: 'screenResumes',
				element: <Auth element={SuspenseLoad(<ScreenResumes />)} title="screenResumes" />
			},
			{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} title="个人中心" /> },
			{ path: '*', element: <Error404 /> }
	  ]
	: [
			{ path: '/login', element: <Login /> },
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
						path: 'interviewer',
						element: <Auth element={SuspenseLoad(<Interviewer />)} title="Interviewer" />
					},
					{
						path: 'configureInterviewers',
						element: <Auth element={SuspenseLoad(<ConfigureInterviewers />)} title="configureInterviewers" />
					},
					{
						path: 'screenResumes',
						element: <Auth element={SuspenseLoad(<ScreenResumes />)} title="screenResumes" />
					},
					{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} title="个人中心" /> },
					{ path: '*', element: <Error404 /> }
				]
			}
	  ];
export default router;
