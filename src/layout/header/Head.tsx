/**
 *	@name 实现头像
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Row, Col, Dropdown, Menu } from 'antd';
import { clearPassword, clearRemember, clearToken, clearUserName } from '@/utils/storage';
import styles from './index.module.scss';

const Head = () => {
	const navigate = useNavigate();
	const photo = useAppSelector(GET_SELECTOR_PHOTO);
	// 头像功能
	const menu = [
		{ key: '1', label: '个人中心' },
		{ key: '2', label: '退出登录' }
	];

	const handleMenuClick = (e: { key: string }) => {
		if (e.key === '1') {
			navigate('/mycenter');
		} else if (e.key === '2') {
			// clearToken();
			// clearUserName();
			// clearPassword();
			// clearRemember();
			navigate('/login');
		}
	};

	return (
		<>
			<Button type="link" style={{ padding: '4px 5px' }}>
				<Dropdown
					menu={{ items: menu, onClick: handleMenuClick }}
					placement="bottom"
					trigger={['click']}
					overlayClassName={styles['Layout-Dropdown']}>
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
