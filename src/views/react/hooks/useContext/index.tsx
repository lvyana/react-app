/**
 * @file useContext + useResource
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState, useContext, useMemo, memo } from 'react';
import Icontext, { Context } from './Icontext';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import Icollapse from '@/antdComponents/iCollapse';
import IcodeEditor from '@/pluginComponents/iCodeEditor';

/**
 * tips: 可以结合useReduce实现redux
 */

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseContext = () => {
	const [parentValue, setParentValue] = useState(0);

	return (
		<Icard>
			{parentValue}

			<Button type="link" onClick={() => setParentValue(parentValue + 1)}>
				+1
			</Button>

			<Icontext>
				<ChildMemo></ChildMemo>
			</Icontext>

			<Code></Code>
		</Icard>
	);
};

export default IuseContext;

const ChildMemo = memo(() => {
	return (
		<>
			<UseContextComItem></UseContextComItem>
			<Child></Child>
		</>
	);
});
ChildMemo.displayName = 'childMemo';

const UseContextComItem = () => {
	const context = useContext(Context);
	// console.log('READER');

	return (
		<div>
			{'我是子组件: '}
			{context?.sum.count}
			<Button
				type="link"
				onClick={() => {
					context?.dispatch({ type: 'sub', value: 1 });
				}}>
				-1
			</Button>
		</div>
	);
};

const Child = () => {
	// console.log('Child');

	return <div>Child</div>;
};

const Code = () => {
	const initCode = `
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);
	
export default function MyApp() {
    return (
	    <ThemeContext.Provider value="dark">
		  <Form />
		</ThemeContext.Provider>
	)
}
	
function Form() {
	return (
		<Panel title="Welcome">
		  <Button>Sign up</Button>
		  <Button>Log in</Button>
		</Panel>
	);
}
	
function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = 'panel-' + theme;
	return (
		<section className={className}>
		  <h1>{title}</h1>
		  {children}
		</section>
	)
}
	
function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = 'button-' + theme;
	return (
		<button className={className}>
		  {children}
		</button>
	);
}
	`;

	const list = [
		{
			header: 'useContext 说明',
			content: (
				<>
					<div>useContext 是一个 React 钩子,可以让你从组件中读取和订阅上下文</div>
				</>
			),
			key: '0'
		},
		{
			header: '代码示例',
			content: (
				<>
					<IcodeEditor initCode={initCode}></IcodeEditor>
				</>
			),
			key: '2'
		}
	];

	return <Icollapse styleConfig="1" defaultActiveKey={['0']} list={list}></Icollapse>;
};
