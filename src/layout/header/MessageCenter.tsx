/**
 *	@name 实现消息中心
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Popover, Row, Tabs } from 'antd';
import Icard from '@/components/iCard';
import Lists from './compoment/Lists';
import styles from './index.module.scss';

const MessageCenter = () => {
	const onChange = (key: string) => {};

	const TabsList = () => {
		const items = [
			{ label: '通知', key: 'item-1', children: <Lists></Lists> },
			{ label: '消息', key: 'item-2', children: <Lists></Lists> }
		];

		return (
			<div className={`${styles['Layout-Tabs-center']}`}>
				<Tabs defaultActiveKey="1" onChange={onChange} items={items}></Tabs>
				<Row className="mt-1">
					<Col span={12}>
						<Button style={{ width: '100%' }} className={`${styles['Layout-Tabs-btn-left']}`}>
							全部已读
						</Button>
					</Col>
					<Col span={12}>
						<Button style={{ width: '100%' }} className={`${styles['Layout-Tabs-btn-Right']}`}>
							查看更多
						</Button>
					</Col>
				</Row>
			</div>
		);
	};

	const [open, setOpen] = useState(false);

	const handleOpenChange = (flag: boolean) => {
		setOpen(flag);
	};

	return (
		<>
			<Popover placement="topLeft" content={<TabsList></TabsList>} trigger="click">
				<Button type="link" icon={<BellOutlined />}></Button>
			</Popover>
		</>
	);
};

export default MessageCenter;
