/**
 * @file 一些插件相关页面
 * @author ly
 * @createDate 2022年12月11日
 */
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import suspenseLoad from '../suspenseLoad';

// ReactPlayer
const Player = () => import(/* webpackChunkName: "player" */ '@/views/plugin/player');
// GridLayout
const GridLayout = () => import(/* webpackChunkName: "gridLayout" */ '@/views/plugin/gridLayout');
// Responsive响应式
const Responsive = () => import(/* webpackChunkName: "responsive" */ '@/views/plugin/responsive');
// 富文本编辑
const RichTextEdit = () => import(/* webpackChunkName: "richTextEdit" */ '@/views/plugin/richTextEdit');
// pdf
const Pdf = () => import(/* webpackChunkName: "pdf" */ '@/views/plugin/pdf');
// i18n
const I18n = () => import(/* webpackChunkName: "i18n" */ '@/views/plugin/i18n');
// dnd
const Dnd = () => import(/* webpackChunkName: "dnd" */ '@/views/plugin/dnd');
// Burst
const Burst = () => import(/* webpackChunkName: "burst" */ '@/views/plugin/burst');
// EasyTyper
const EasyTyper = () => import(/* webpackChunkName: "easyTyper" */ '@/views/plugin/easyTyper');
// VideoCall
const VideoCall = () => import(/* webpackChunkName: "videoCall" */ '@/views/plugin/videoCall');

// 插件的使用
const pluginCom = [
	{ index: true, element: <Navigate to="player" /> },
	{ path: 'player', element: suspenseLoad(Player) },
	{ path: 'gridLayout', element: suspenseLoad(GridLayout) },
	{ path: 'richtextedit', element: suspenseLoad(RichTextEdit) },
	{ path: 'pdf', element: suspenseLoad(Pdf) },
	{ path: 'responsive', element: suspenseLoad(Responsive) },
	{ path: 'i18n', element: suspenseLoad(I18n) },
	{ path: 'dnd', element: suspenseLoad(Dnd) },
	{ path: 'burst', element: suspenseLoad(Burst) },
	{ path: 'easyTyper', element: suspenseLoad(EasyTyper) },
	{ path: 'videoCall', element: suspenseLoad(VideoCall) }
];

export default pluginCom;
