/**
 * @file useLayoutEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Icard from '@/antdComponents/iCard';

const IuseLayoutEffect = () => {
	const [first, setfirst] = useState(0);

	// useEffect(() => {
	// 	// console.log('useEffect');
	// 	// 浏览器渲染之后执行
	// 	let i = 0;
	// 	while (i <= 100000000) {
	// 		i++;
	// 	}
	// 	setfirst(2);
	// }, []);

	useLayoutEffect(() => {
		// console.log('useLayoutEffect', '我比useEffect先执行');
		// 浏览器渲染页面之前 dom修改之后 执行
		let i = 0;
		while (i <= 100000000) {
			i++;
		}
		setfirst(4);
	}, []);
	return <Icard>{first}</Icard>;
};

export default IuseLayoutEffect;
