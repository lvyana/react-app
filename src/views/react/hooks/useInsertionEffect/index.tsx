/**
 * @file useImperativeHandle
 * @author ly
 * @createDate
 */
import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseInsertionEffect = () => {
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

	return <div className="css-in-js"> useInsertionEffect使用场景 </div>;
};

export default IuseInsertionEffect;
