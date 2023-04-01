/**
 * @file useTransition 返回一个状态值表示过渡任务的等待状态，以及一个启动该过渡任务的函数。
 * @author ly
 * @createDate 2023年3月9日
 */
import React, { useState, useTransition, useCallback } from 'react';
import { debounce } from 'lodash';
import Icard from '@/antdComponents/iCard';
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseTransition = () => {
	const [isPending, startTransition] = useTransition();
	const [input, setInput] = useState('');
	const [list, setList] = useState<string[]>([]);

	const a = useCallback(
		debounce((value) => {
			startTransition(() => {
				const res = [];
				for (let i = 0; i < 15000; i++) {
					res.push(value);
				}
				setList(res);
			});
		}, 500),
		[]
	);
	return (
		<Icard>
			<span>
				优化后输入框：
				<input
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						a(e.target.value);
					}}
				/>
			</span>
			<span>
				输入框：
				<input
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						const res = [];
						for (let i = 0; i < 15000; i++) {
							res.push(e.target.value);
						}
						setList(res);
					}}
				/>
			</span>
			{isPending ? <div>加载中...</div> : list.map((item, index) => <div key={index}>{item}</div>)}
		</Icard>
	);
};

export default IuseTransition;
