/**
 * @file useEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';
import useThemeHooks from '@/config/theme/useThemeHooks';

type SonProps = {
	value: number;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseEffect = () => {
	const { token } = useThemeHooks();

	const list = [
		{
			header: '无参数',
			content: '每次reader都会执行',
			key: '1'
		},
		{
			header: '空数组[]',
			content: '组件初始化执行一次',
			key: '2'
		},
		{
			header: '数组并且有参数[a,b]',
			content: '数组内数据变化就会执行',
			key: '3'
		}
	];

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
			<Icollapse styleConfig="1" defaultActiveKey={['1']} list={list}></Icollapse>
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
