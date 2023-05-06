/**
 * @file 文档
 * @author ly
 * @createDate 2023年5月7日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

const Volta = lazy(() => import(/* webpackChunkName: "Volta" */ '@/views/document/volta'));

// 文档组件
const documentCom = [
	{ index: true, element: <Navigate to="volta" /> },
	{
		path: 'volta',
		element: suspenseLoad(<Volta />)
	}
];

export default documentCom;
