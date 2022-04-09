import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Row, Col, Dropdown, Menu } from 'antd';

const Head = () => {
	const navigate = useNavigate();
	const photo = useSelector((state: RootState) => state.user.photo);
	// 头像功能
	const menu = () => (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1">个人中心</Menu.Item>
			<Menu.Item key="2">退出登录</Menu.Item>
		</Menu>
	);
	const handleMenuClick = (e: { key: string }) => {
		console.log('click', e);
		if (e.key === '1') {
			navigate('/mycenter');
		} else if (e.key === '2') {
			navigate('/login');
		}
	};

	return (
		<>
			<Dropdown overlay={menu} placement="bottomCenter" trigger={['click']} arrow>
				<Button type="link">
					<Avatar className="unctionality" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>
				</Button>
			</Dropdown>
		</>
	);
};

export default Head;
