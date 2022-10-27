/**
 *	@name 实现消息中心
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, MenuProps, Row, Tabs } from 'antd';
import Icard from '@/components/iCard';
import Lists from './compoment/Lists';
import styles from './index.module.less';

const MessageCenter = () => {
	const onChange = (key: string) => {};

	const tabsList = () => {
		const items = [
			{ label: '通知', key: 'item-1', children: '内容 1' },
			{ label: '消息', key: 'item-2', children: '内容 2' }
		];

		return (
			<Icard className={`${styles['Layout-Tabs-center']} Box-Shadow`} style={{ padding: 0 }}>
				<Tabs defaultActiveKey="1" onChange={onChange} items={items}></Tabs>
				<Row>
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
			</Icard>
		);
	};

	const [open, setOpen] = useState(false);

	const handleOpenChange = (flag: boolean) => {
		setOpen(flag);
	};

	return (
		<>
			<Dropdown
				open={open}
				onOpenChange={handleOpenChange}
				overlay={tabsList}
				overlayClassName={`${styles['Layout-Dropdown']} ${styles['Layout-Dropdown-Widht']}`}
				placement="bottomLeft"
				trigger={['click']}>
				<Button type="link" icon={<BellOutlined />}></Button>
			</Dropdown>
		</>
	);
};

export default MessageCenter;
