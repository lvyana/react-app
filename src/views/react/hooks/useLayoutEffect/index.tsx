/**
 * @file useLayoutEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseLayoutEffect = () => {
	const navigate = useNavigate();

	const [first, setfirst] = useState(0);
	const [first1, setfirst1] = useState(0);
	// console.log('reader', first, first1);

	useEffect(() => {
		// console.log('useEffect');
		// 浏览器渲染之后执行
		// let i = 0;
		// while (i <= 1000000000) {
		// 	i++;
		// }
		// setfirst(3);
		setfirst1(11);
	}, []);

	useLayoutEffect(() => {
		// console.log('useLayoutEffect', '我比useEffect先执行');
		// 浏览器渲染页面之前 dom修改之后 执行
		// let i = 0;
		// while (i <= 1000000000) {
		// 	i++;
		// }
		setfirst(1);
		setfirst(2);
		setfirst1(10);
	}, []);

	const onToUseEffect = () => {
		navigate('/react/hooks/useEffect');
	};

	const list = [
		{
			label: '执行机制',
			children: (
				<div>
					<div>1、浏览器渲染页面之前 DOM 更新之后同步执行,会阻塞渲染</div>
					<div>2、建议修改 DOM 在useLayoutEffect执行</div>
				</div>
			),
			key: '0'
		},
		{
			label: 'reader机制',
			children: (
				<div>
					<div>1、useLayoutEffect 内更新数据,会进行合并处理,只会 reader 一次</div>
					<div>2、useLayoutEffect 内更新数据,会 reader 一次,不会和 useEffect 合并处理</div>
					<div>
						{'3、useEffect 执行在渲染之后,更新数据会导致页面看到 0 -> 1,而 useLayoutEffect 在渲染之前更新,页面只会看到更新后的数据'}
					</div>
				</div>
			),
			key: '1'
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
		},
		{
			label: '测试是否阻塞',
			children: <div>useEffect 内执行1000000000循环,我认为 useEffect 也阻塞了渲染</div>,
			key: '3'
		}
	];

	return (
		<Icard>
			<div>useLayoutEffect不会闪烁:{first}</div>
			<div>useEffect会闪烁:{first1}</div>

			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
		</Icard>
	);
};

export default IuseLayoutEffect;
