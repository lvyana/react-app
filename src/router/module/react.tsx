/**
 * @file React相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// react use
const IuseState = () => import(/* webpackChunkName: "useState" */ '@/views/react/hooks/useState');
const IuseEffect = () => import(/* webpackChunkName: "useEffect" */ '@/views/react/hooks/useEffect');
const IuseLayoutEffect = () => import(/* webpackChunkName: "useLayoutEffect" */ '@/views/react/hooks/useLayoutEffect');
const IuseInsertionEffect = () => import(/* webpackChunkName: "useInsertionEffect" */ '@/views/react/hooks/useInsertionEffect');
const IuseReducer = () => import(/* webpackChunkName: "useReducer" */ '@/views/react/hooks/useReducer');
const IuseContext = () => import(/* webpackChunkName: "useContext" */ '@/views/react/hooks/useContext');
const IuseMemo = () => import(/* webpackChunkName: "useMemo" */ '@/views/react/hooks/useMemo');
const IuseCallback = () => import(/* webpackChunkName: "useCallback" */ '@/views/react/hooks/useCallback');
const IuseRef = () => import(/* webpackChunkName: "useRef" */ '@/views/react/hooks/useRef');
const Isuspense = () => import(/* webpackChunkName: "suspense" */ '@/views/react/reactDom/suspense');
const IforwardRef = () => import(/* webpackChunkName: "forwardRef" */ '@/views/react/hooks/forwardRef');
const IuseImperativeHandle = () => import(/* webpackChunkName: "useImperativeHandle" */ '@/views/react/hooks/useImperativeHandle');
const IuseTransition = () => import(/* webpackChunkName: "useTransition" */ '@/views/react/hooks/useTransition');
const IuseDeferredValue = () => import(/* webpackChunkName: "useDeferredValue" */ '@/views/react/hooks/useDeferredValue');
const IuseSyncExternalStore = () => import(/* webpackChunkName: "IuseSyncExternalStore" */ '@/views/react/hooks/useSyncExternalStore');
// reactDom
const IcreatePortal = () => import(/* webpackChunkName: "MyCreatePortal" */ '@/views/react/reactDom/createPortal');
const IflushSync = () => import(/* webpackChunkName: "IflushSync" */ '@/views/react/reactDom/flushSync');

const Ireduxtoolkit = () => import(/* webpackChunkName: "Ireduxtoolkit" */ '@/views/react/reduxtoolkit'); // RTK

// hooks
const reactHooks = [
	{ index: true, element: <Navigate to="useReducer" /> },
	{
		path: 'useState',
		element: suspenseLoad(IuseState)
	},
	{
		path: 'useInsertionEffect',
		element: suspenseLoad(IuseInsertionEffect)
	},
	{
		path: 'useLayoutEffect',
		element: suspenseLoad(IuseLayoutEffect)
	},
	{
		path: 'useEffect',
		element: suspenseLoad(IuseEffect)
	},

	{
		path: 'useReducer',
		element: suspenseLoad(IuseReducer)
	},
	{
		path: 'useContext',
		element: suspenseLoad(IuseContext)
	},
	{
		path: 'useMemo',
		element: suspenseLoad(IuseMemo)
	},
	{
		path: 'useCallback',
		element: suspenseLoad(IuseCallback)
	},
	{
		path: 'useRef',
		element: suspenseLoad(IuseRef)
	},
	{
		path: 'forwardRef',
		element: suspenseLoad(IforwardRef)
	},
	{
		path: 'useImperativeHandle',
		element: suspenseLoad(IuseImperativeHandle)
	},
	{
		path: 'useTransition',
		element: suspenseLoad(IuseTransition)
	},
	{
		path: 'useDeferredValue',
		element: suspenseLoad(IuseDeferredValue)
	},
	{
		path: 'useSyncExternalStore',
		element: suspenseLoad(IuseSyncExternalStore)
	}
];

// dom
const reactDom = [
	{ index: true, element: <Navigate to="createPortal" /> },
	{
		path: 'createPortal',
		element: suspenseLoad(IcreatePortal)
	},
	{
		path: 'flushSync',
		element: suspenseLoad(IflushSync)
	},
	{
		path: 'suspense',
		element: suspenseLoad(Isuspense)
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
	{ path: 'reduxtoolkit', element: suspenseLoad(Ireduxtoolkit) }
];

export default reactCom;
