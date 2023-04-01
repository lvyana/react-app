/**
 * @file Suspense 实现异步渲染
 * @author ly
 * @createDate 2022年8月3日
 */
import React, { ComponentType, FC, Suspense } from 'react';
import Icard from '@/antdComponents/iCard';

interface TestProps {
	age: number;
	rdata: {
		name: string;
		say: string;
	};
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Isuspense = () => {
	/* 需要每一次在组件内部声明，保证每次父组件挂载，都会重新请求数据 ，防止内存泄漏。 */
	const LazyTest = AysncComponent(Test, getData);

	return (
		<Suspense fallback={<>loading....</>}>
			<LazyTest></LazyTest>
		</Suspense>
	);
};

/* 测试异步组件 */
const Test: FC<TestProps> = ({ rdata, age }) => {
	const { name, say } = rdata;
	// console.log('组件渲染');
	return (
		<Icard>
			<div> hello , my name is {name} </div>
			<div>age : {age} </div>
			<div> i want to say {say} </div>
		</Icard>
	);
};

const getData = (): Promise<TestProps['rdata']> => {
	return new Promise((resolve) => {
		//模拟异步
		setTimeout(() => {
			resolve({
				name: 'alien',
				say: 'let us learn React!'
			});
		}, 1000);
	});
};

/**
 *
 * @param {*} Component  需要异步数据的component
 * @param {*} api        请求数据接口,返回Promise，可以再then中获取与后端交互的数据
 * @returns
 */
const AysncComponent = (Component: React.FC<TestProps>, api: () => Promise<TestProps['rdata']>) => {
	const AysncComponentPromise = (): Promise<{ default: ComponentType }> =>
		new Promise(async (resolve) => {
			const data = await api();
			resolve({
				default: (props: JSX.IntrinsicAttributes) => <Component rdata={data} age={18} {...props} />
			});
		});
	return React.lazy(AysncComponentPromise);
};
export default Isuspense;
