/**
 * @name 一些插件相关页面
 * @user ly
 * @date 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoad from '../suspenseLoad';
import Auth from '../auth';

//ReactPlayer
const Player = lazy(() => import('@/views/funCom/player'));
//GridLayout
const DemoGridLayout = lazy(() => import('@/views/funCom/gridLayout'));
// Responsive响应式
const Responsive = lazy(() => import('@/views/funCom/responsive'));
//富文本编辑
const RichTextEdit = lazy(() => import('@/views/funCom/richTextEdit'));
// pdf
const Pdf = lazy(() => import('@/views/funCom/pdf'));
// i18n
const I18n = lazy(() => import('@/views/funCom/i18n'));

// 插件的使用
const funCom = [
	{ index: true, element: <Navigate to="Player" /> },
	{ path: 'Player', element: SuspenseLoad(<Player />) },
	{ path: 'DemoGridLayout', element: SuspenseLoad(<DemoGridLayout />) },
	{ path: 'richtextedit', element: SuspenseLoad(<RichTextEdit />) },
	{ path: 'pdf', element: SuspenseLoad(<Pdf />) },
	{ path: 'Responsive', element: SuspenseLoad(<Responsive />) },
	{ path: 'I18n', element: SuspenseLoad(<I18n />) }
];

export default funCom;
