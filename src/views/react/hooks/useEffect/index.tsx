/**
 * @file useEffect
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, useState, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';
import IcodeEditor from '@/pluginComponents/iCodeEditor';

type SonProps = {
	value: number;
};

const initCode = `//闭包陷阱
function Counter() {
	const [count, setCount] = useState(0);
  
	useEffect(() => {
	  const id = setInterval(() => {
		setCount(count + 1);
	  }, 1000);
	  return () => clearInterval(id);
	}, []);
  
	return <h1>{count}</h1>;
  }

  // 解决方案1
  useEffect(() => {
	const id = setInterval(() => {
	  setCount(count + 1);
	}, 1000);
	return () => clearInterval(id);
  }, [count]);
  //缺陷
  // 计时器不准了，因为每次 count 变化时都会销毁并重新计时。
  // 频繁 生成/销毁 定时器带来了一定性能负担。

  // 完美解决方案
  useEffect(() => {
	const id = setInterval(() => {
	  setCount(c => c + 1);
	}, 1000);
	return () => clearInterval(id);
  }, []);
  
  `;

const list = [
	{
		label: '执行机制',
		children: '浏览器渲染之后执行,不会阻塞渲染',
		key: '0'
	},
	{
		label: '无参数',
		children: '每次 reader 都会执行',
		key: '1'
	},
	{
		label: '空数组 []',
		children: '组件初始化执行一次',
		key: '2'
	},
	{
		label: '数组并且有参数 [a,b]',
		children: '数组内数据变化就会执行',
		key: '3'
	},
	{
		label: '回调函数中 return 作用',
		children: (
			<div>
				<div>1、清理上一次事件绑定,不清理会导致事件多次绑定</div>
				<div>2、组件初始化不执行,组件销毁时执行,数据更新时先执行 return 函数</div>
			</div>
		),
		key: '4'
	},
	{
		label: '示例代码',
		children: (
			<>
				<IcodeEditor initCode={initCode}></IcodeEditor>
			</>
		),
		key: '5'
	}
];

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
			<Button type="link" onClick={add}>
				+1
			</Button>
			<Son value={value}></Son>
			<Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>
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
