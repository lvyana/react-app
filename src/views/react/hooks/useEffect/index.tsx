/**
 * @file useEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import dayjs from 'dayjs';

type SonProps = {
	value: number;
};

const getTime = () => {
	return dayjs().valueOf().toString();
};

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
			<div className="text-red-600">无参数: 每次reader都会执行</div>
			<div className="text-red-600">空数组: 组件初始化执行一次</div>
			<div className="text-red-600">数组并且有参数: 数组内数据变化就会执行</div>
			<Button type="link" onClick={add}>
				+1
			</Button>
			<Son value={value}></Son>
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
