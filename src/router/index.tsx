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
const MyUseReduce = lazy(() => import('@/views/useHooksCom/myUseReduce'));
const MyUseContext = lazy(() => import('@/views/useHooksCom/myUseContext'));
const MyUseMemo = lazy(() => import('@/views/useHooksCom/myUseMemo'));
const MyUseCallback = lazy(() => import('@/views/useHooksCom/myUseCallback'));
const MyUseRef = lazy(() => import('@/views/useHooksCom/myUseRef'));
const MyUseRouter = lazy(() => import('@/views/useHooksCom/myUseRouter'));

const router: RouteObject[] = [
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
				path: 'use',
				children: [
					{
						path: 'MyUseReduce',
						element: <Auth element={SuspenseLoad(<MyUseReduce />)} title="MyUseReduce" />
					},
					{
						path: 'MyUseContext',
						element: <Auth element={SuspenseLoad(<MyUseContext />)} title="MyUseContext" />
					},
					{
						path: 'MyUseMemo',
						element: <Auth element={SuspenseLoad(<MyUseMemo />)} title="MyUseMemo" />
					},
					{
						path: 'MyUseCallback',
						element: <Auth element={SuspenseLoad(<MyUseCallback />)} title="MyUseCallback" />
					},
					{
						path: 'MyUseRef',
						element: <Auth element={SuspenseLoad(<MyUseRef />)} title="MyUseRef" />
					},
					{
						path: 'MyUseRouter',
						element: <Auth element={SuspenseLoad(<MyUseRouter />)} title="MyUseRouter" />
					}
				]
			},

			{ path: 'richtextedit', element: <Auth element={SuspenseLoad(<RichTextEdit />)} title="富文本" /> },
			{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} title="个人中心" /> },
			{ path: '*', element: <Error404 /> }
		]
	}
];
export default router;
