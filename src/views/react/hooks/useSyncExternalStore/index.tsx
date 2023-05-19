/**
 * @file useSyncExternalStore
 * @author ly
 * @createDate 2023年5月19日
 */
import React, { useSyncExternalStore } from 'react';
import todosStore from './todosStore';
import Icard from '@/antdComponents/iCard';
import { IbuttonItem } from '@/antdComponents/iButton/IbuttonItem';
import type { ButtonItemParams } from '@/antdComponents/iButton/type';

const BUTTON_ITEM: ButtonItemParams<'key'> = {
	name: 'Add todo',
	type: 'key',
	btnType: 'primary'
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseSyncExternalStore = () => {
	const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

	return (
		<Icard>
			<IbuttonItem buttonItem={BUTTON_ITEM} onClick={() => todosStore.addTodo()}></IbuttonItem>
			<hr />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
			<IuseSyncExternalStoreItem></IuseSyncExternalStoreItem>
		</Icard>
	);
};

const IuseSyncExternalStoreItem = () => {
	const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

	return (
		<div>
			<IbuttonItem buttonItem={BUTTON_ITEM} onClick={() => todosStore.addTodo()}></IbuttonItem>
			<IbuttonItem buttonItem={{ ...BUTTON_ITEM, name: 'delete todo' }} onClick={() => todosStore.deleteTodo()}></IbuttonItem>

			<hr />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
};

export default IuseSyncExternalStore;

// https://juejin.cn/post/7217743118324858938
// useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
// 这个hook会返回store里一个数据的快照。你需要传入两个函数作为入参

// subscribe函数得订阅这个store, 并且返回一个可以取消订阅的函数。
// getSnapshot函数得可以从store里读取数据快照。

// subscribe: 是一个函数，只有一个回调函数作为入参，并且使其订阅这个store. 当store发生改变的时候，这个回调函数应该得到执行，而且这会触发组件的重新渲染。subscribe函数应该返回一个可以取消订阅的方法。

// getSnapshot: 是一个函数，返回一个组件中需要用到的store里的一个数据值的快照。当这个store没有改变的时候，重复调用getSnapshot必须返回同样的值。如果store发生改变并且返回的数据值不一样了（用Object.js做比较），那么Reacr重新渲染这个组件。

// getServerSnapshot（可选参数）: 是一个函数，返回store数据的初始快照。只会在服务端渲染的时候使用，并且是在服务端渲染好的内容往客户端灌水的时候。服务端的快照必须和客户端的一致。并且通常是序列化后被发送到客户端的，如果你不传这个参数，在服务端渲染的时候会报错

// 当前你在组件渲染中使用到的store数据的快照

// 警告
// 调用getSnapshot返回的这个store数据快照不能修改，如果所依赖的store有可以更改的数据，当数据发生改变返回新的不可修改的数据，否则返回上一次缓存的数据快照。
// 如果在重新渲染的时候传来一个不同的subscribe函数，React会用新的subscribe重新订阅这个store。你可以通过在组件外面声明subscribe的方式来避免
