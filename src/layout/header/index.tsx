import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { IresponsiveMin } from '@/components/iResponsive';
import Fullscreen from './Fullscreen';
import ModuleSize from './ModuleSize';
import Crumb from './Crumb';
import Search from './Search';
import Head from './Head';
import MessageCenter from './MessageCenter';

const Headerregion = () => {
	return (
		<>
			<Row justify="space-around" align="middle">
				<Col flex="280px">
					{/* 菜单 */}
					<Crumb></Crumb>
				</Col>
				<Col flex="auto">
					<Row justify="end">
						<IresponsiveMin MinWidth={800}>
							<Col>
								{/* 搜索 */}
								<Search></Search>
								{/* 全屏 */}
								<Fullscreen></Fullscreen>
								{/* 组件大小 */}
								<ModuleSize></ModuleSize>
								{/* 组件大小 */}
								<MessageCenter></MessageCenter>
							</Col>
						</IresponsiveMin>

						<Col>
							{/* 用户头像 */}
							<Head></Head>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};
export default memo(Headerregion);
