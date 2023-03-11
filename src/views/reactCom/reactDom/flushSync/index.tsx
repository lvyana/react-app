/**
 * @file flushSync
 * @author ly
 * @createDate 2023年3月10日
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import { flushSync } from 'react-dom';

/**
 * flushSync：可以将回调函数中的更新任务，
 * 放到一个较高级的优先级中，适用于强制刷新，同时确保了DOM会被立即更新
 */
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const MyFlushSync = () => {
	const [count, setCount] = useState(0);

	const onCount = () => {
		setCount(1);
		flushSync(() => {
			setCount(2);
		});
		setCount(3);
	};
	// console.log(count);

	return (
		<div>
			<div> flushSync：可以将回调函数中的更新任务， 放到一个较高级的优先级中，适用于强制刷新，同时确保了DOM会被立即更新</div>

			<div style={{ padding: 20 }}>
				<div>数字: {count}</div>
				<Button color="primary" onClick={onCount}>
					点击
				</Button>
			</div>
		</div>
	);
};

export default MyFlushSync;
