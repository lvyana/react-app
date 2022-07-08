import React from 'react';
import { useSelector } from 'react-redux';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Row, Col, Dropdown, Menu } from 'antd';

const Head = () => {
	const navigate = useNavigate();
	const photo = useSelector(GET_SELECTOR_PHOTO);
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
			<Dropdown overlay={menu} placement="bottom" trigger={['click']} arrow>
				<Button type="link">
					<Avatar className="unctionality" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>
				</Button>
			</Dropdown>
		</>
	);
};

export default Head;
