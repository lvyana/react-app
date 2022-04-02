import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useNavigate } from 'react-router-dom';
import Fullscreen from './Fullscreen';
import ModuleSize from './ModuleSize';
import Crumb from './Crumb';
import HeaderSearch from './HeaderSearch';
import { Avatar, Button, Row, Col, Dropdown, Menu } from 'antd';

const Headerregion = () => {
	const photo = useSelector((state: RootState) => state.user.photo);
	const navigate = useNavigate();

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
			<Row justify="space-around" align="middle">
				<Col flex="auto">
					{/* 菜单 */}
					<Crumb></Crumb>
				</Col>
				<Col flex="350px">
					{/* 搜索 */}
					<HeaderSearch></HeaderSearch>
					{/* 全屏 */}
					<Fullscreen></Fullscreen>
					{/* 组件大小 */}
					<ModuleSize></ModuleSize>
					{/* 用户头像 */}
					<Dropdown overlay={menu} placement="bottomCenter" trigger={['click']} arrow>
						<Button type="link">
							<Avatar className="unctionality" src={photo as string} style={{ backgroundColor: '#fde3cf' }}></Avatar>
						</Button>
					</Dropdown>
				</Col>
			</Row>
		</>
	);
};
export default memo(Headerregion);
