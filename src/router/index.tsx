import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';

const RichTextEdit = lazy(() => import('@/views/richTextEdit')); //富文本编辑
const MyCenter = lazy(() => import('@/views/myCenter')); //个人中心
const Dynamicform = lazy(() => import('@/views/dynamicform')); //动态表单
const Layout = lazy(() => import('@/layout')); // Layout
const Expenses = lazy(() => import('@/views/expenses'));
const Login = lazy(() => import('@/views/login'));
const Error404 = lazy(() => import('@/views/Error404'));

// react一些钩子函数用法
const MyUseState = lazy(() => import('@/views/useHooksCom/myUseState'));
const MyUseEffect = lazy(() => import('@/views/useHooksCom/myUseEffect'));
const MyUseLayoutEffect = lazy(() => import('@/views/useHooksCom/myUseLayoutEffect'));
const MyUseReducer = lazy(() => import('@/views/useHooksCom/myUseReducer'));
const MyUseContext = lazy(() => import('@/views/useHooksCom/myUseContext'));
const MyUseMemo = lazy(() => import('@/views/useHooksCom/myUseMemo'));
const MyUseCallback = lazy(() => import('@/views/useHooksCom/myUseCallback'));
const MyUseRef = lazy(() => import('@/views/useHooksCom/myUseRef'));
const MyUseRouter = lazy(() => import('@/views/useHooksCom/myUseRouter'));

// pdf
const Pdf = lazy(() => import('@/views/pdf'));

const Rtk = lazy(() => import('@/views/rtk'));

const router: RouteObject[] = [
	{ path: '/login', element: SuspenseLoad(<Login />) },
	{
		path: '/',
		element: <Auth element={SuspenseLoad(<Layout />)} />,
		children: [
			// { index: true, element: <Navigate to="home" /> },
			{
				path: 'expenses',
				element: <Auth element={SuspenseLoad(<Expenses />)} />
			},
			{
				path: 'dynamicform',
				element: <Auth element={SuspenseLoad(<Dynamicform />)} />
			},
			{
				path: 'use',
				children: [
					{ index: true, element: <Navigate to="MyUseReduce" /> },
					{
						path: 'MyUseState',
						element: <Auth element={SuspenseLoad(<MyUseState />)} />
					},
					{
						path: 'MyUseEffect',
						element: <Auth element={SuspenseLoad(<MyUseEffect />)} />
					},
					{
						path: 'MyUseLayoutEffect',
						element: <Auth element={SuspenseLoad(<MyUseLayoutEffect />)} />
					},
					{
						path: 'MyUseReducer',
						element: <Auth element={SuspenseLoad(<MyUseReducer />)} />
					},
					{
						path: 'MyUseContext',
						element: <Auth element={SuspenseLoad(<MyUseContext />)} />
					},
					{
						path: 'MyUseMemo',
						element: <Auth element={SuspenseLoad(<MyUseMemo />)} />
					},
					{
						path: 'MyUseCallback',
						element: <Auth element={SuspenseLoad(<MyUseCallback />)} />
					},
					{
						path: 'MyUseRef',
						element: <Auth element={SuspenseLoad(<MyUseRef />)} />
					},
					{
						path: 'MyUseRouter',
						element: <Auth element={SuspenseLoad(<MyUseRouter />)} />
					}
				]
			},
			{ path: 'Rtk', element: <Auth element={SuspenseLoad(<Rtk />)} /> },
			{ path: 'richtextedit', element: <Auth element={SuspenseLoad(<RichTextEdit />)} /> },
			{ path: 'pdf', element: <Auth element={SuspenseLoad(<Pdf />)} /> },
			{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} /> },
			{ path: '*', element: <Error404 /> }
		]
	}
];
export default router;
