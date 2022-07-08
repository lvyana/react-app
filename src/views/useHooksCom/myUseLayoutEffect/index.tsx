import React, { useState, useLayoutEffect, useEffect } from 'react';

const MyUseLayoutEffect = () => {
	const [first, setfirst] = useState(0);

	useEffect(() => {
		// console.log('useEffect');
		// 因为是异步操作 会初始化0->2会闪烁
		let i = 0;
		while (i <= 100000000) {
			i++;
		}
		setfirst(2);
	}, []);

	useLayoutEffect(() => {
		// console.log('useLayoutEffect', '我比useEffect先执行');
		// 同步操作 不会闪烁 但是会堵塞
		let i = 0;
		while (i <= 100000000) {
			i++;
		}
		setfirst(4);
	}, []);
	return <div>{first}</div>;
};

export default MyUseLayoutEffect;
