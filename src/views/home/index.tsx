/**
 * @file 首页
 * @author ly
 * @createDate 2022年12月11日
 * https://antv.antgroup.com/
 */
import React from 'react';
import { Col, Row } from 'antd';
import Icard from '@/antdComponents/iCard';
import DemoLine from './components/Line';
import DemoArea from './components/Area';
import DemoColumn from './components/Column';
import DemoPie from './components/Pie';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Home = () => {
	return (
		<>
			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} className="mb-4">
					<Icard>
						<DemoLine></DemoLine>
					</Icard>
				</Col>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} className="mb-4">
					<Icard>
						<DemoArea></DemoArea>
					</Icard>
				</Col>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} className="mb-4">
					<Icard>
						<DemoColumn></DemoColumn>
					</Icard>
				</Col>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} className="mb-4">
					<Icard>
						<DemoPie></DemoPie>
					</Icard>
				</Col>
			</Row>
		</>
	);
};

export default Home;
