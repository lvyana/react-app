/**
 * @file useImperativeHandle
 * @author ly
 * @createDate
 */
import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseInsertionEffect = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// console.log('useEffect 执行');
	}, []);

	useLayoutEffect(() => {
		// console.log('useLayoutEffect 执行');
	}, []);

	useInsertionEffect(() => {
		/* 动态创建 style 标签插入到 head 中 */
		const style = document.createElement('style');
		style.innerHTML = `
			 .css-in-js{
			   color: pink;
			   font-size: 12px;
			 }
		   `;
		// console.log('style: ', style);
		document.head.appendChild(style);
	}, []);

	const onToUseEffect = () => {
		navigate('/react/hooks/useEffect');
	};

	const list = [
		{
			label: '执行机制',
			children: (
				<div>
					<div>
						1、可以看到 useInsertionEffect 的执行时机要比 useLayoutEffect 提前,useLayoutEffect 执行的时候 DOM 已经更新了，但是在
						useInsertionEffect 的执行的时候,DOM 还没有更新
					</div>
					<div>
						2、本质上 useInsertionEffect 主要是解决 CSS-in-JS 在渲染中注入样式的性能问题。这个 hooks 主要是应用于这个场景，在其他场景下
						React 不期望用这个hooks
					</div>
				</div>
			),
			key: '0'
		},
		{
			label: '参数执行机制',
			children: (
				<div>
					参照 useEffect
					<Button type="link" onClick={onToUseEffect}>
						跳转
					</Button>
				</div>
			),
			key: '2'
		}
	];
	return (
		<Icard>
			<div className="css-in-js"> useInsertionEffect使用场景 </div>
			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
		</Icard>
	);
};

export default IuseInsertionEffect;
