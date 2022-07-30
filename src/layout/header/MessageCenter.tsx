/**
 *	@name 实现消息中心
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, MenuProps, Row, Tabs } from 'antd';
import Icard from '@/components/iCard';
import styles from './index.module.less';

const { TabPane } = Tabs;

const MessageCenter = () => {
	const onChange = (key: string) => {};

	const list = () => {
		return (
			<Icard className={`${styles['Layout-Tabs-center']} Box-Shadow`} style={{ padding: 0 }}>
				<Tabs defaultActiveKey="1" onChange={onChange}>
					<TabPane tab="通知" key="1" className={`${styles['Tabs-padding']}`}>
						<div style={{ width: '100%' }}>Content of Tab Pane SEGSAFDSF阿斯顿发送到发送到阿斯顿发送到发送到</div>
					</TabPane>
					<TabPane tab="消息" key="2" className={`${styles['Tabs-padding']}`}>
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="待办" key="3" className={`${styles['Tabs-padding']}`}>
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
				<Row>
					<Col span={12}>
						<Button style={{ width: '100%' }} className={`${styles['Tabs-btn-left']}`}>
							全部已读
						</Button>
					</Col>
					<Col span={12}>
						<Button style={{ width: '100%' }} className={`${styles['Tabs-btn-Right']}`}>
							查看更多
						</Button>
					</Col>
				</Row>
			</Icard>
		);
	};

	const [visible, setVisible] = useState(false);

	const handleVisibleChange = (flag: boolean) => {
		setVisible(flag);
	};

	return (
		<>
			<Dropdown
				visible={visible}
				onVisibleChange={handleVisibleChange}
				overlay={list}
				overlayClassName={`${styles['Layout-Dropdown']} ${styles['Layout-Dropdown-Widht']}`}
				placement="bottomLeft"
				trigger={['click']}>
				<Button type="link" icon={<BellOutlined />}></Button>
			</Dropdown>
		</>
	);
};

export default MessageCenter;
