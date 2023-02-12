/**
 * @file 消息中心列表
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { useRequest } from 'ahooks';
import { messgeCenter } from '../service';
import style from '../index.module.scss';

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
		<div className={`${style['layout-tabs-List']}`}>
			<List
				bordered
				dataSource={messgeCenterData}
				renderItem={(item) => <List.Item style={{ backgroundColor: item.isRead ? '#ccc' : '' }}>{item.title}</List.Item>}
			/>
		</div>
	);
};

export default Lists;
