/**
 * @file 实现顶部组件
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { CSSProperties, FC, memo } from 'react';
import { Row, Col } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';
import { IresponsiveMin } from '@/pluginComponents/iResponsive';
import Fullscreen from './fullscreen';
import ComponentSize from './componentSize';
import Crumb from './crumb';
import Search from './search';
import UserAvatar from './userAvatar';
import MessageCenter from './messageCenter';
import ToggleTheme from './toggleTheme';
import Warehouse from './warehouse';

type HeaderProps = {
	children: React.ReactNode;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Header: FC<HeaderProps> = ({ children }) => {
	const { token } = useThemeHooks();

	const headerStyle: CSSProperties = {
		position: 'sticky',
		top: 0,
		width: '100%',
		alignItems: 'center',
		backgroundColor: token.colorBgBase,
		zIndex: 999,
		padding: '0 16px'
	};

	return (
		<>
			<AntHeader style={headerStyle}>
				<Row justify="space-around" align="middle">
					{/* 卡片菜单 */}
					<Col flex="64px">{children}</Col>

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
			</AntHeader>
		</>
	);
};

export default memo(Header);
