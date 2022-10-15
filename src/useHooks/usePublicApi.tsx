import React, { useState, useEffect } from 'react';

import { status, statusDataProps } from '../api/publicApi';

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

	// 状态
	const getStatus = async () => {
		const res = await status();
		const { data } = res;
		setStatusData(data);
	};

	return { statusData };
};

export { useHooksStatus };
