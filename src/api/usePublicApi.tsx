import React, { useState, useEffect } from 'react';
import { status } from './publicApi';

interface statusDataProps {
	status: '1' | '2';
	name: string;
}
/**
 * 获取状态数据
 * @param deep 能改变状态参数
 * @returns 状态数据
 */
const useHooksStatus = (deep = []) => {
	const [statusData, setStatusData] = useState<statusDataProps[]>([]);

	useEffect(() => {
		getStatus();
		return () => {
			setStatusData([]);
		};
	}, deep);

	const getStatus = async () => {
		const res = await status();
		const { data } = res.data;
		setStatusData(data);
	};
	return { statusData };
};

export { useHooksStatus };
