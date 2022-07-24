/**
 * 消息中心
 */
import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Row, Tabs } from 'antd';
import Icard from '@/components/iCard';
import styles from './index.module.less';

const { TabPane } = Tabs;

const MessageCenter = () => {
	const onChange = (key: string) => {
		console.log(key);
	};

	const list = () => {
		return (
			<Icard className={`${styles['Layout-Tabs-center']} Box-Shadow`}>
				<Tabs defaultActiveKey="1" onChange={onChange}>
					<TabPane tab="通知" key="1">
						<div style={{ width: '100%' }}>Content of Tab Pane SEGSAFDSF阿斯顿发送到发送到阿斯顿发送到发送到</div>
					</TabPane>
					<TabPane tab="消息" key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="待办" key="3">
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
				<Row>
					<Col span={12}>
						<Button>Default Button</Button>
					</Col>
					<Col span={12}>
						<Button>Default Button</Button>
					</Col>
				</Row>
			</Icard>
		);
	};

	return (
		<>
			<Dropdown
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
