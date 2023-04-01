/**
 * @file useDeferredValue
 * @author ly
 * @createDate
 */
import { Input } from 'antd';
import React, { FC, useDeferredValue, useMemo, useState } from 'react';

type ListProps = {
	query: string;
};
const numbers = [...new Array(20000).keys()];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseDeferredValue = () => {
	const [query, setQuery] = useState('');

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<Input type="number" onChange={handleChange} value={query} />
			<List query={query} />
		</div>
	);
};

const List: FC<ListProps> = ({ query }) => {
	const defQuery = useDeferredValue(query);

	const list = useMemo(
		() => defQuery && numbers.filter((i) => i.toString().indexOf(defQuery) > -1).map((i) => <div key={i}>{i}</div>),
		[defQuery]
	);

	return <div>{list}</div>;
};

export default IuseDeferredValue;
