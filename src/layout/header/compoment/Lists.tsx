/**
 * 消息中心列表
 */
import React from 'react';
import { List } from 'antd';
import styles from '../index.module.scss';

const Lists = () => {
	const data = [
		'Racing car sprays burning fuel into crowd.',
		'Japanese princess to wed commoner.',
		'Australian walks 100km after outback crash.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.'
	];

	return (
		<div className={`${styles['Layout-Tabs-List']}`}>
			<List bordered dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
		</div>
	);
};

export default Lists;
