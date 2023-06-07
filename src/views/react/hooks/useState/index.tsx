/**
 * @file useState
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';
import IcodeEditor from '@/pluginComponents/iCodeEditor';
import { IuseSyncExternalStoreItem } from '../useSyncExternalStore';
import Imarkdown from '@/pluginComponents/iMarkdown';

const initCode = `
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
};`;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseState = () => {
	const init = 0;

	const [value, setValue] = useState(init);

	const [first, setfirst] = useState(() => init);
	// console.log('reader');

	const add = () => {
		// setValue(value + 1);
		// setfirst((value) => value + 1);
		// setfirst((value) => {
		// 	// console.log(value);
		// 	return value + 1;
		// });
		// 17 异步更新会render两次
		// 18 异步更新会render1次
		setTimeout(() => setValue(value + 1), 1000);
		setTimeout(() => setValue(value + 1), 1000);
		setTimeout(() => setfirst(first + 1), 2000);
		// setValue((value) => value + 1);
		// setTimeout(() => setValue((value) => value + 1), 1000);
		// setTimeout(() => setValue((value) => value + 1), 1000);
		// setTimeout(() => setfirst((first) => first + 1), 1000);
		// console.log(value);
		// console.log(first);
	};

	const list = [
		{
			label: 'useState在组件式编程里的基本用处',
			children: <div>useState 是一个组件定义状态信息,所谓“状态”,就是该组件任意时刻都存放的各种数据</div>,
			key: '0'
		},
		{
			label: 'useState更新',
			children: (
				<>
					<div>1、当组件更新state时,会触发组件的重新渲染,可以认为发生了局部刷新</div>
					<div>2、在函数内多次更新,会合并处理</div>
					<div>3、18之前手动合并处理unstable_batchedUpdates,18之后自动合并处理就不需要了</div>
				</>
			),
			key: '1'
		},
		{
			label: '代码示例',
			children: (
				<>
					<IcodeEditor initCode={initCode}></IcodeEditor>
				</>
			),
			key: '2'
		}
	];

	return (
		<Icard>
			<Button type="link" onClick={add}>
				+1
			</Button>
			{value}
			{first}
			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
			<IuseSyncExternalStoreItem></IuseSyncExternalStoreItem>
			<Imarkdown url={'useState.md'}></Imarkdown>
		</Icard>
	);
};

export default IuseState;
