/**
 * @file 文档
 * @author ly
 * @createDate 2023年5月7日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// Volta 多node版本切换
const Volta = lazy(() => import(/* webpackChunkName: "Volta" */ '@/views/document/volta'));
// CreateReactApp 版本升级
const CreateReactApp = lazy(() => import(/* webpackChunkName: "Volta" */ '@/views/document/createReactApp'));
// Markdown 语法
const Markdown = lazy(() => import(/* webpackChunkName: "Markdown" */ '@/views/document/markdown'));

// 文档组件
const documentCom = [
	{ index: true, element: <Navigate to="volta" /> },
	{
		path: 'volta',
		element: suspenseLoad(<Volta />)
	},
	{
		path: 'createReactApp',
		element: suspenseLoad(<CreateReactApp />)
	},
	{ path: 'markdown', element: suspenseLoad(<Markdown />) }
];

export default documentCom;
