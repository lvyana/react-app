/**
 * @file antd组件相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from '../suspenseLoad';
import Auth from '../auth';
const Expenses = lazy(() => import('@/views/antdCom/expenses'));
const Dynamicform = lazy(() => import('@/views/antdCom/dynamicform')); //动态表单

// antd组件封装
const antdCom = [
	{ index: true, element: <Navigate to="expenses" /> },
	{
		path: 'expenses',
		element: SuspenseLoad(<Expenses />)
	},
	{
		path: 'dynamicform',
		element: SuspenseLoad(<Dynamicform />)
	}
];

export default antdCom;
