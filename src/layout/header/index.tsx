/**
 * @file 实现顶部组件
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { memo } from 'react';
import { Row, Col, Button, Avatar } from 'antd';
import { IresponsiveMin } from '@/pluginComponents/iResponsive';
import Fullscreen from './fullscreen';
import ComponentSize from './componentSize';
import Crumb from './crumb';
import Search from './search';
import UserAvatar from './userAvatar';
import MessageCenter from './messageCenter';
import ToggleTheme from './toggleTheme';
import Warehouse from './warehouse';

const Headerregion = () => {
	return (
		<>
			<Row justify="space-around" align="middle">
				<Col flex="355px">
					{/* 面包屑 */}
					<div className="pl-2">
						<Crumb></Crumb>
					</div>
				</Col>
				<Col flex="auto">
					<Row justify="end" id="header-icon-function">
						<IresponsiveMin MinWidth={1040}>
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
