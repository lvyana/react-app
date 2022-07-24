import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Row, Col, Dropdown, Menu } from 'antd';
import styles from './index.module.less';

const Head = () => {
	const navigate = useNavigate();
	const photo = useAppSelector(GET_SELECTOR_PHOTO);
	// 头像功能
	const menu = () => (
		<Menu
			onClick={handleMenuClick}
			items={[
				{ key: '1', label: '个人中心' },
				{ key: '2', label: '退出登录' }
			]}></Menu>
	);
	const handleMenuClick = (e: { key: string }) => {
		if (e.key === '1') {
			navigate('/mycenter');
		} else if (e.key === '2') {
			navigate('/login');
		}
	};

	return (
		<>
			<Button type="link" style={{ padding: '4px 5px' }}>
				<Dropdown overlay={menu} placement="bottom" trigger={['click']} overlayClassName={styles['Layout-Dropdown']}>
					<div>
						<Avatar className="unctionality" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>
						<span className="mr5 ml5">admin</span>
					</div>
				</Dropdown>
			</Button>
		</>
	);
};

export default Head;
