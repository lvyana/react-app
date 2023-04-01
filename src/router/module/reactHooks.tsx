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
