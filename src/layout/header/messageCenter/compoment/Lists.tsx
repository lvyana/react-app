/**
 * @file 消息中心列表
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { useRequest } from 'ahooks';
import { messgeCenter } from '../../service';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';

/**
 * @param title 标题
 * @param isRead 是否已读
 */
export interface messgeCenterParams {
	title: string;
	isRead: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Lists = () => {
	const { token } = useThemeHooks();

	useEffect(() => {
		run();
	}, []);

	const [messgeCenterData, setMessgeCenterData] = useState<messgeCenterParams[]>([]);
	const { run } = useRequest(messgeCenter, {
		manual: true,
		onSuccess: (res) => {
			const { data } = res;
			setMessgeCenterData(data);
		}
	});

	const getListItemClassName = (item: messgeCenterParams) => {
		if (item.isRead) {
			return 'bg-gray-400';
		}
		return 'cursor-pointer hover:text-blue-600';
	};

	return (
		<List
			bordered
			dataSource={messgeCenterData}
			renderItem={(item) => <List.Item className={getListItemClassName(item)}>{item.title}</List.Item>}
		/>
	);
};

export default Lists;
