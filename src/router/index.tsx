import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';
import Login from '@/views/login';
import Error404 from '@/views/Error404';
import Layout from '@/layout';
import Expenses from '@/views/expenses';
import Dynamicform from '@/views/dynamicform';
// const Dynamicform = lazy(() => import('@/views/dynamicform')); //动态表单
// const Layout = lazy(() => import('@/layout')); // Layout
// const Expenses = lazy(() => import('@/views/expenses'));

const router: RouteObject[] = [
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
		path: 'dynamicform',
		element: <Auth element={SuspenseLoad(<Dynamicform />)} title="Dynamicform" />
	},
	{ path: '*', element: <Error404 /> }
];
export default router;
