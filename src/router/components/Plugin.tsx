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
const Player = lazy(() => import('@/views/plugin/player'));
//GridLayout
const DemoGridLayout = lazy(() => import('@/views/plugin/gridLayout'));
// Responsive响应式
const Responsive = lazy(() => import('@/views/plugin/responsive'));
//富文本编辑
const RichTextEdit = lazy(() => import('@/views/plugin/richTextEdit'));
// pdf
const Pdf = lazy(() => import('@/views/plugin/pdf'));
// i18n
const I18n = lazy(() => import('@/views/plugin/i18n'));
// dnd
const Dnd = lazy(() => import('@/views/plugin/dnd'));

// 插件的使用
const plugin = [
	{ index: true, element: <Navigate to="Player" /> },
	{ path: 'player', element: SuspenseLoad(<Player />) },
	{ path: 'demoGridLayout', element: SuspenseLoad(<DemoGridLayout />) },
	{ path: 'richtextedit', element: SuspenseLoad(<RichTextEdit />) },
	{ path: 'pdf', element: SuspenseLoad(<Pdf />) },
	{ path: 'responsive', element: SuspenseLoad(<Responsive />) },
	{ path: 'i18n', element: SuspenseLoad(<I18n />) },
	{ path: 'dnd', element: SuspenseLoad(<Dnd />) }
];

export default plugin;
