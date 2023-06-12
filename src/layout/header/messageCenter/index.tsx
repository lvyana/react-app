/**
 * @file 实现消息中心
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Col, Popover, Row, Tabs, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import Lists from './compoment/Lists';
import style from './index.module.scss';

/**
 * @param hide 关闭TabsList
 */
interface TabsListProps {
	hide: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const MessageCenter = () => {
	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen: boolean) => {
		setOpen(newOpen);
	};

	return (
		<>
			<Popover
				overlayStyle={{ width: 300 }}
				getPopupContainer={() => document.getElementById('header-icon-function') as HTMLElement}
				open={open}
				onOpenChange={handleOpenChange}
				placement="bottom"
				content={<TabsList hide={hide}></TabsList>}
				trigger="click">
				<Badge count={5} offset={[-5, 5]} size="small">
					<Button type="link" icon={<BellOutlined />}></Button>
				</Badge>
			</Popover>
		</>
	);
};

const TabsList: FC<TabsListProps> = ({ hide }) => {
	const navigate = useNavigate();

	const items = [
		{ label: '通知', key: 'item-1', children: <Lists></Lists> },
		{ label: '消息', key: 'item-2', children: <Lists></Lists> }
	];

	const onChange = (key: string) => {};

	const onMore = () => {
		hide();
		navigate('messgeCenter');
	};
	return (
		<div className={`${style['layout-tabs-center']}`}>
			<Tabs defaultActiveKey="1" onChange={onChange} items={items}></Tabs>
			<Row className="mt-1" gutter={8}>
				<Col span={12}>
					<Button type="dashed" style={{ width: '100%' }}>
						全部已读
					</Button>
				</Col>
				<Col span={12}>
					<Button type="dashed" style={{ width: '100%' }} onClick={() => onMore()}>
						查看更多
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default MessageCenter;
