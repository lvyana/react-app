/**
 * @file 一些插件相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

//ReactPlayer
const Player = lazy(() => import(/* webpackChunkName: "Player" */ '@/views/plugin/player'));
//GridLayout
const DemoGridLayout = lazy(() => import(/* webpackChunkName: "DemoGridLayout" */ '@/views/plugin/gridLayout'));
// Responsive响应式
const Responsive = lazy(() => import(/* webpackChunkName: "Responsive" */ '@/views/plugin/responsive'));
//富文本编辑
const RichTextEdit = lazy(() => import(/* webpackChunkName: "RichTextEdit" */ '@/views/plugin/richTextEdit'));
// pdf
const Pdf = lazy(() => import(/* webpackChunkName: "Pdf" */ '@/views/plugin/pdf'));
// i18n
const I18n = lazy(() => import(/* webpackChunkName: "I18n" */ '@/views/plugin/i18n'));
// dnd
const Dnd = lazy(() => import(/* webpackChunkName: "Dnd" */ '@/views/plugin/dnd'));

// 插件的使用
const plugin = [
	{ index: true, element: <Navigate to="player" /> },
	{ path: 'player', element: suspenseLoad(<Player />) },
	{ path: 'demoGridLayout', element: suspenseLoad(<DemoGridLayout />) },
	{ path: 'richtextedit', element: suspenseLoad(<RichTextEdit />) },
	{ path: 'pdf', element: suspenseLoad(<Pdf />) },
	{ path: 'responsive', element: suspenseLoad(<Responsive />) },
	{ path: 'i18n', element: suspenseLoad(<I18n />) },
	{ path: 'dnd', element: suspenseLoad(<Dnd />) }
];

export default plugin;
