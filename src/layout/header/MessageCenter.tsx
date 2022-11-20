/**
 *	@name 实现消息中心
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Popover, Row, Tabs } from 'antd';
import Icard from '@/antdComponents/iCard';
import Lists from './compoment/Lists';
import style from './index.module.scss';

const MessageCenter = () => {
	return (
		<>
			<Popover placement="bottomRight" content={<TabsList></TabsList>} trigger="click">
				<Button type="link" icon={<BellOutlined />}></Button>
			</Popover>
		</>
	);
};

const TabsList = () => {
	const items = [
		{ label: '通知', key: 'item-1', children: <Lists></Lists> },
		{ label: '消息', key: 'item-2', children: <Lists></Lists> }
	];

	const onChange = (key: string) => {};

	return (
		<div className={`${style['Layout-Tabs-center']}`}>
			<Tabs defaultActiveKey="1" onChange={onChange} items={items}></Tabs>
			<Row className="mt-1">
				<Col span={12}>
					<Button style={{ width: '100%' }} className={`${style['Layout-Tabs-btn-left']}`}>
						全部已读
					</Button>
				</Col>
				<Col span={12}>
					<Button style={{ width: '100%' }} className={`${style['Layout-Tabs-btn-Right']}`}>
						查看更多
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default MessageCenter;
