/**
 * 消息中心列表
 */
import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { useRequest } from 'ahooks';
import { messgeCenter } from '../service';
import styles from '../index.module.scss';

export interface messgeCenterParams {
	title: string;
	isRead: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Lists = () => {
	// const data = [
	// 	'Racing car sprays burning fuel into crowd.',
	// 	'Japanese princess to wed commoner.',
	// 	'Australian walks 100km after outback crash.',
	// 	'Man charged over missing wedding girl.',
	// 	'Los Angeles battles huge wildfires.'
	// ];
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

	return (
		<div className={`${styles['Layout-Tabs-List']}`}>
			<List
				bordered
				dataSource={messgeCenterData}
				renderItem={(item) => <List.Item style={{ backgroundColor: item.isRead ? '#ccc' : '' }}>{item.title}</List.Item>}
			/>
		</div>
	);
};

export default Lists;
