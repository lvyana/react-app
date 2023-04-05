/**
 * @file useEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';

type SonProps = {
	value: number;
};

const list = [
	{
		header: '执行机制',
		content: '浏览器渲染之后执行,不会阻塞渲染',
		key: '0'
	},
	{
		header: '无参数',
		content: '每次 reader 都会执行',
		key: '1'
	},
	{
		header: '空数组 []',
		content: '组件初始化执行一次',
		key: '2'
	},
	{
		header: '数组并且有参数 [a,b]',
		content: '数组内数据变化就会执行',
		key: '3'
	},
	{
		header: '回调函数中 return 作用',
		content: (
			<div>
				<div>1、清理上一次事件绑定,不清理会导致事件多次绑定</div>
				<div>2、组件初始化不执行,组件销毁时执行,数据更新时先执行 return 函数</div>
			</div>
		),
		key: '4'
	}
];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseEffect = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		// console.log('我没有参数', value);
		return () => {
			// console.log('return我没有参数', value);
		};
	});

	useEffect(() => {
		// console.log('我的参数[]', value);
		return () => {
			// console.log('return我的参数[]', value);
		};
	}, []);

	useEffect(() => {
		// console.log('我的参数[value]', value);
		return () => {
			// console.log('return我的参数[value]', value);
		};
	}, [value]);

	const add = () => {
		setValue(value + 1);
	};

	return (
		<Icard>
			<Button type="link" onClick={add}>
				+1
			</Button>
			<Son value={value}></Son>
			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
		</Icard>
	);
};

export default IuseEffect;

const Son: FC<SonProps> = ({ value }) => {
	useEffect(() => {
		// console.log('son effect');
		return () => {
			// console.log('son effect return');
		};
	});
	return <>{value}</>;
};
