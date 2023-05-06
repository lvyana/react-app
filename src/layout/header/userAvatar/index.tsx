/**
 * @file 头像
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { useAppSelector } from '@/store';
import { GET_SELECTOR_PHOTO } from '@/store/reducers/user';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Dropdown } from 'antd';
import { IresponsiveMin } from '@/pluginComponents/iResponsive';
import style from './index.module.scss';

const UserAvatar = () => {
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
					arrow={{ pointAtCenter: true }}
					getPopupContainer={() => document.getElementById('header-icon-function') as HTMLElement}
					menu={{ items: menu, onClick: handleMenuClick }}
					placement="bottom"
					trigger={['click']}
					overlayClassName={style['layout-dropdown-widht']}>
					<div>
						<Avatar className="unctionality" alt="头像" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>
						<IresponsiveMin MinWidth={890}>
							<span className="mr5 ml5">admin</span>
						</IresponsiveMin>
					</div>
				</Dropdown>
			</Button>
		</>
	);
};

export default UserAvatar;
