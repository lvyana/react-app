/**
 * @file 首页
 * @author ly
 * @createDate 2022年12月11日
 */
import React from 'react';
import { Col, Row } from 'antd';
import Icard from '@/antdComponents/iCard';
import DemoLine from './components/Line';
import DemoArea from './components/Area';
import DemoColumn from './components/Column';
import DemoPie from './components/Pie';
import DemoOrganizationGraph from './components/OrganizationGraph';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Home = () => {
	return (
		<>
			<Row gutter={16}>
				<Col span={12} className="mb-4">
					<Icard>
						<DemoLine></DemoLine>
					</Icard>
				</Col>
				<Col span={12} className="mb-4">
					<Icard>
						<DemoArea></DemoArea>
					</Icard>
				</Col>
				<Col span={12}>
					<Icard>
						<DemoColumn></DemoColumn>
					</Icard>
				</Col>
				<Col span={12}>
					<Icard>
						<DemoPie></DemoPie>
					</Icard>
				</Col>
				<Col span={24} className="mt-4">
					<Icard>
						<DemoOrganizationGraph></DemoOrganizationGraph>
					</Icard>
				</Col>
			</Row>
		</>
	);
};

export default Home;
