import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';

const RichTextEdit = lazy(() => import('@/views/funCom/richTextEdit')); //富文本编辑
const MyCenter = lazy(() => import('@/views/myCenter')); //个人中心
const Dynamicform = lazy(() => import('@/views/antdCom/dynamicform')); //动态表单
const Layout = lazy(() => import('@/layout')); // Layout
const Expenses = lazy(() => import('@/views/antdCom/expenses'));
const Login = lazy(() => import('@/views/login'));
const Error404 = lazy(() => import('@/views/Error404'));

// react一些钩子函数用法
const MyUseState = lazy(() => import('@/views/reactCom/useHooksCom/myUseState'));
const MyUseEffect = lazy(() => import('@/views/reactCom/useHooksCom/myUseEffect'));
const MyUseLayoutEffect = lazy(() => import('@/views/reactCom/useHooksCom/myUseLayoutEffect'));
const MyUseReducer = lazy(() => import('@/views/reactCom/useHooksCom/myUseReducer'));
const MyUseContext = lazy(() => import('@/views/reactCom/useHooksCom/myUseContext'));
const MyUseMemo = lazy(() => import('@/views/reactCom/useHooksCom/myUseMemo'));
const MyUseCallback = lazy(() => import('@/views/reactCom/useHooksCom/myUseCallback'));
const MyUseRef = lazy(() => import('@/views/reactCom/useHooksCom/myUseRef'));
const MyUseRouter = lazy(() => import('@/views/routerCom/myUseRouter'));

// react-router-dom
const RouterDemo = lazy(() => import('@/views/routerCom/routerDemo'));
const Test = lazy(() => import('@/views/routerCom/routerDemo/Test'));
const List = lazy(() => import('@/views/routerCom/routerDemo/List'));

// pdf
const Pdf = lazy(() => import('@/views/funCom/pdf'));
// RTK
const Rtk = lazy(() => import('@/views/reactCom/rtk'));
//ReactPlayer
const Player = lazy(() => import('@/views/funCom/player'));
//GridLayout
const DemoGridLayout = lazy(() => import('@/views/funCom/gridLayout'));
// Responsive响应式
const Responsive = lazy(() => import('@/views/funCom/responsive'));

// antd组件封装
const antdCom = [
	{ index: true, element: <Navigate to="expenses" /> },
	{
		path: 'expenses',
		element: <Auth element={SuspenseLoad(<Expenses />)} />
	},
	{
		path: 'dynamicform',
		element: <Auth element={SuspenseLoad(<Dynamicform />)} />
	}
];

// react API Rtk 相关等
const reactCom = [
	{ index: true, element: <Navigate to="MyUseReducer" /> },
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

	{ path: 'Rtk', element: <Auth element={SuspenseLoad(<Rtk />)} /> }
];

// react-router-dom
const RouterCom = [
	{ index: true, element: <Navigate to="RouterDemo" /> },
	{
		path: 'RouterDemo',
		element: <Auth element={SuspenseLoad(<RouterDemo />)} />,
		children: [
			{ path: ':id', element: <Auth element={SuspenseLoad(<Test />)} /> },
			{ path: 'list', element: <Auth element={SuspenseLoad(<List />)} /> }
		]
	},
	{
		path: 'MyUseRouter',
		element: <Auth element={SuspenseLoad(<MyUseRouter />)} />
	}
];

// 插件的使用
const funCom = [
	{ index: true, element: <Navigate to="Player" /> },
	{ path: 'Player', element: <Auth element={SuspenseLoad(<Player />)} /> },
	{ path: 'DemoGridLayout', element: <Auth element={SuspenseLoad(<DemoGridLayout />)} /> },
	{ path: 'richtextedit', element: <Auth element={SuspenseLoad(<RichTextEdit />)} /> },
	{ path: 'pdf', element: <Auth element={SuspenseLoad(<Pdf />)} /> },
	{ path: 'Responsive', element: <Auth element={SuspenseLoad(<Responsive />)} /> }
];

const router: RouteObject[] = [
	{ path: '/login', element: SuspenseLoad(<Login />) },
	{
		path: '/',
		element: <Auth element={SuspenseLoad(<Layout />)} />,
		children: [
			{ index: true, element: <Navigate to="expenses" /> },
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
				path: 'funCom',
				children: [...funCom]
			},
			{ path: 'mycenter', element: <Auth element={SuspenseLoad(<MyCenter />)} /> },
			{ path: '*', element: <Error404 /> }
		]
	}
];

export default router;
