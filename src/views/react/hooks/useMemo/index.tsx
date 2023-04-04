/**
 * @file IuseMemo 优化任意组件计算 缓存变量
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from 'antd';
import Icard from '@/antdComponents/iCard';
import dayjs from 'dayjs';

const getTime = () => {
	return dayjs().valueOf().toString();
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IuseMemo = () => {
	const [value, setValue] = useState(0);

	const [num, setNum] = useState(0);

	const date = useMemo(() => getTime(), [num]);

	return (
		<Icard>
			<div>
				<Button type="link" onClick={() => setValue(value + 1)}>
					value
				</Button>
				{value}
			</div>
			<div>
				<Button type="link" onClick={() => setNum(num + 1)}>
					更新时间戳
				</Button>
				{date}
			</div>
		</Icard>
	);
};

export default IuseMemo;
