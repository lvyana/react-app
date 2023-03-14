/**
 * @file EasyTyper
 * @author ly
 * @createDate 2023年3月11日
 */
import React, { useLayoutEffect, useState } from 'react';
import EasyTyper from 'easy-typer-js';

/**
 * easy-typer-js是一个轻量级的插件, 用于实现页面文字的打字机效果.
 * 它使用起来非常简单, 只需要几行代码就能实现高大上的打字机效果.而且对MVVM框架支持完美，还兼容原生JS.
 */
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const useEasyTyper = (str: string) => {
	const [output, setOutput] = useState('');

	const [typer, setTyper] = useState<EasyTyper | null>(null);

	useLayoutEffect(() => {
		initTyper();
		return () => {
			typer?.close();
		};
	}, []);

	const initTyper = () => {
		// 配置对象
		const obj = {
			output: '',
			isEnd: false,
			speed: 80,
			singleBack: false,
			sleep: 0,
			type: 'normal',
			backSpeed: 40,
			sentencePause: false
		};
		// 实例化
		const typer = new EasyTyper(obj, str, completeAsentence, changeOutput);
		setTyper(typer);
	};

	// 输出完毕后的回调函数
	const completeAsentence = () => {
		// console.log('输出完毕！长官！');
	};

	// 钩子函数和setState结合
	const changeOutput = (output: string) => {
		setOutput(output);
	};

	return { output };
};

export default useEasyTyper;
