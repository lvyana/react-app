/**
 * @file antd组件相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

const Expenses = lazy(() => import(/* webpackChunkName: "Expenses" */ '@/views/antd/expenses'));
const Dynamicform = lazy(() => import(/* webpackChunkName: "Dynamicform" */ '@/views/antd/dynamicform')); //动态表单

// antd组件封装
const antdCom = [
	{ index: true, element: <Navigate to="expenses" /> },
	{
		path: 'expenses',
		element: suspenseLoad(<Expenses />)
	},
	{
		path: 'dynamicform',
		element: suspenseLoad(<Dynamicform />)
	}
];

export default antdCom;
