/**
 * @file 实现顶部组件
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { memo } from 'react';
import { Row, Col, Popover } from 'antd';
import Fullscreen from './fullscreen';
import ComponentSize from './componentSize';
import Crumb from './crumb';
import Search from './search';
import UserAvatar from './userAvatar';
import MessageCenter from './messageCenter';
import ToggleTheme from './toggleTheme';
import Warehouse from './warehouse';
import menuLogo from '@/assets/images/menu.png';
import Menu from '@/layout/menu';
import { IresponsiveMin } from '@/pluginComponents/iResponsive';

const Headerregion = () => {
	const LayoutLogo: React.CSSProperties = {
		width: '64px',
		height: '64px',
		backgroundImage: `url(${menuLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		// background: `${token.colorBgBase} url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain'
	};

	return (
		<>
			<Row justify="space-around" align="middle">
				<Col flex="80px">
					<Popover content={<Menu></Menu>} overlayStyle={{ width: 344 }} arrow={false} placement="bottomLeft" trigger="click">
						<div style={LayoutLogo} className="cursor-pointer" />
					</Popover>
				</Col>
				<IresponsiveMin MinWidth={1100}>
					<Col flex="400px">
						{/* 面包屑 */}
						<div className="pl-2">
							<Crumb></Crumb>
						</div>
					</Col>
				</IresponsiveMin>
				<Col flex="auto">
					<Row justify="end" id="header-icon-function">
						<IresponsiveMin MinWidth={690}>
							<Col>
								{/* 搜索 */}
								<Search></Search>

								{/* 全屏 */}
								<Fullscreen></Fullscreen>
								{/* 组件大小 */}
								<ComponentSize></ComponentSize>
								{/* 消息 */}
								<MessageCenter></MessageCenter>
								{/* 切换颜色主题 */}
								<ToggleTheme></ToggleTheme>
								{/* 仓库地址 */}
								<Warehouse></Warehouse>
							</Col>
						</IresponsiveMin>
						<Col>
							{/* 用户头像 */}
							<UserAvatar></UserAvatar>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};
export default memo(Headerregion);
