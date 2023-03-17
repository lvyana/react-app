/**
 * @file 实现useEffect第一次不执行
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useEffect, useRef } from 'react';

type effectProps = (fn: () => void, deps: (string | number | string[] | number[])[]) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const useNoFirstMount: effectProps = (fn, deps) => {
	const ref = useRef(false);
	useEffect(() => {
		if (ref.current) {
			fn();
		} else {
			ref.current = true;
		}
	}, deps);
};
