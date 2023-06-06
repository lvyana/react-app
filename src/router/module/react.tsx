/**
 * @file React相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// react use
const IuseState = lazy(() => import(/* webpackChunkName: "useState" */ '@/views/react/hooks/useState'));
const IuseEffect = lazy(() => import(/* webpackChunkName: "useEffect" */ '@/views/react/hooks/useEffect'));
const IuseLayoutEffect = lazy(() => import(/* webpackChunkName: "useLayoutEffect" */ '@/views/react/hooks/useLayoutEffect'));
const IuseInsertionEffect = lazy(() => import(/* webpackChunkName: "useInsertionEffect" */ '@/views/react/hooks/useInsertionEffect'));
const IuseReducer = lazy(() => import(/* webpackChunkName: "useReducer" */ '@/views/react/hooks/useReducer'));
const IuseContext = lazy(() => import(/* webpackChunkName: "useContext" */ '@/views/react/hooks/useContext'));
const IuseMemo = lazy(() => import(/* webpackChunkName: "useMemo" */ '@/views/react/hooks/useMemo'));
const IuseCallback = lazy(() => import(/* webpackChunkName: "useCallback" */ '@/views/react/hooks/useCallback'));
const IuseRef = lazy(() => import(/* webpackChunkName: "useRef" */ '@/views/react/hooks/useRef'));
const Isuspense = lazy(() => import(/* webpackChunkName: "suspense" */ '@/views/react/reactDom/suspense'));
const IforwardRef = lazy(() => import(/* webpackChunkName: "forwardRef" */ '@/views/react/hooks/forwardRef'));
const IuseImperativeHandle = lazy(() => import(/* webpackChunkName: "useImperativeHandle" */ '@/views/react/hooks/useImperativeHandle'));
const IuseTransition = lazy(() => import(/* webpackChunkName: "useTransition" */ '@/views/react/hooks/useTransition'));
const IuseDeferredValue = lazy(() => import(/* webpackChunkName: "useDeferredValue" */ '@/views/react/hooks/useDeferredValue'));
const IuseSyncExternalStore = lazy(
	() => import(/* webpackChunkName: "IuseSyncExternalStore" */ '@/views/react/hooks/useSyncExternalStore')
);

// reactDom
const IcreatePortal = lazy(() => import(/* webpackChunkName: "MyCreatePortal" */ '@/views/react/reactDom/createPortal'));
const IflushSync = lazy(() => import(/* webpackChunkName: "IflushSync" */ '@/views/react/reactDom/flushSync'));

const Ireduxtoolkit = lazy(() => import(/* webpackChunkName: "Ireduxtoolkit" */ '@/views/react/reduxtoolkit')); // RTK

// hooks
const reactHooks = [
	{ index: true, element: <Navigate to="useReducer" /> },
	{
		path: 'useState',
		element: suspenseLoad(<IuseState />)
	},
	{
		path: 'useInsertionEffect',
		element: suspenseLoad(<IuseInsertionEffect />)
	},
	{
		path: 'useLayoutEffect',
		element: suspenseLoad(<IuseLayoutEffect />)
	},
	{
		path: 'useEffect',
		element: suspenseLoad(<IuseEffect />)
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
		path: 'useImperativeHandle',
		element: suspenseLoad(<IuseImperativeHandle />)
	},
	{
		path: 'useTransition',
		element: suspenseLoad(<IuseTransition />)
	},
	{
		path: 'useDeferredValue',
		element: suspenseLoad(<IuseDeferredValue />)
	},
	{
		path: 'useSyncExternalStore',
		element: suspenseLoad(<IuseSyncExternalStore />)
	}
];

// dom
const reactDom = [
	{ index: true, element: <Navigate to="createPortal" /> },
	{
		path: 'createPortal',
		element: suspenseLoad(<IcreatePortal />)
	},
	{
		path: 'flushSync',
		element: suspenseLoad(<IflushSync />)
	},
	{
		path: 'suspense',
		element: suspenseLoad(<Isuspense />)
	}
];

const reactCom = [
	{ index: true, element: <Navigate to="hooks" /> },
	{
		path: 'hooks',
		children: [...reactHooks]
	},
	{
		path: 'reactDom',
		children: [...reactDom]
	},
	{ path: 'reduxtoolkit', element: suspenseLoad(<Ireduxtoolkit />) }
];

export default reactCom;
