/**
 * @file React相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// react use
const IuseState = lazy(() => import(/* webpackChunkName: "IuseState" */ '@/views/react/hooks/useState'));
const IuseEffect = lazy(() => import(/* webpackChunkName: "IuseEffect" */ '@/views/react/hooks/useEffect'));
const IuseLayoutEffect = lazy(() => import(/* webpackChunkName: "IuseLayoutEffect" */ '@/views/react/hooks/useLayoutEffect'));
const IuseReducer = lazy(() => import(/* webpackChunkName: "IuseReducer" */ '@/views/react/hooks/useReducer'));
const IuseContext = lazy(() => import(/* webpackChunkName: "IuseContext" */ '@/views/react/hooks/useContext'));
const IuseMemo = lazy(() => import(/* webpackChunkName: "IuseMemo" */ '@/views/react/hooks/useMemo'));
const IuseCallback = lazy(() => import(/* webpackChunkName: "IuseCallback" */ '@/views/react/hooks/useCallback'));
const IuseRef = lazy(() => import(/* webpackChunkName: "IuseRef" */ '@/views/react/hooks/useRef'));
const Isuspense = lazy(() => import(/* webpackChunkName: "MySuspense" */ '@/views/react/reactDom/suspense'));
const IforwardRef = lazy(() => import(/* webpackChunkName: "MyForwardRef" */ '@/views/react/hooks/forwardRef'));
const IuseTransition = lazy(() => import(/* webpackChunkName: "IuseTransition" */ '@/views/react/hooks/useTransition'));

// reactDom
const MyCreatePortal = lazy(() => import(/* webpackChunkName: "MyCreatePortal" */ '@/views/react/reactDom/createPortal'));
const MyFlushSync = lazy(() => import(/* webpackChunkName: "MyFlushSync" */ '@/views/react/reactDom/flushSync'));

const Rtk = lazy(() => import(/* webpackChunkName: "Rtk" */ '@/views/react/rtk')); // RTK

// hooks
const reactHooks = [
	{ index: true, element: <Navigate to="useReducer" /> },
	{
		path: 'useState',
		element: suspenseLoad(<IuseState />)
	},
	{
		path: 'useEffect',
		element: suspenseLoad(<IuseEffect />)
	},
	{
		path: 'useLayoutEffect',
		element: suspenseLoad(<IuseLayoutEffect />)
	},
	{
		path: 'useReducer',
		element: suspenseLoad(<IuseReducer />)
	},
	{
		path: 'useContext',
		element: suspenseLoad(<IuseContext />)
	},
	{
		path: 'useMemo',
		element: suspenseLoad(<IuseMemo />)
	},
	{
		path: 'useCallback',
		element: suspenseLoad(<IuseCallback />)
	},
	{
		path: 'useRef',
		element: suspenseLoad(<IuseRef />)
	},

	{
		path: 'forwardRef',
		element: suspenseLoad(<IforwardRef />)
	},
	{
		path: 'useTransition',
		element: suspenseLoad(<IuseTransition />)
	}
];

// dom
const reactDom = [
	{ index: true, element: <Navigate to="createPortal" /> },
	{
		path: 'createPortal',
		element: suspenseLoad(<MyCreatePortal />)
	},
	{
		path: 'flushSync',
		element: suspenseLoad(<MyFlushSync />)
	},
	{
		path: 'suspense',
		element: suspenseLoad(<Isuspense />)
	}
];

const react = [
	{ index: true, element: <Navigate to="hooks" /> },
	{
		path: 'hooks',
		children: [...reactHooks]
	},
	{
		path: 'reactDom',
		children: [...reactDom]
	},
	{ path: 'rtk', element: suspenseLoad(<Rtk />) }
];

export default react;
