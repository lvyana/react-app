import React from 'react';
import { Form, Descriptions, Row, Col, Button, Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Icard from '@/components/iCard';

const InterviewerInfo = () => {
	return (
		<div>
			<Row gutter={16}>
				{[1, 1, 1, 1, , 1, 1, 1].map((item, i) => {
					return (
						<Col span={8} style={{ marginTop: '10px' }} key={i}>
							<Icard key={i}>
								<Descriptions
									title="彭翔"
									column={2}
									extra={
										<Dropdown overlay={menu} arrow>
											<Button type="link">
												<EllipsisOutlined />
											</Button>
										</Dropdown>
									}>
									<Descriptions.Item label="岗位">
										数据应用-测试
										<br />
										深圳市 初二级 1年以上
									</Descriptions.Item>
									<Descriptions.Item label="推荐单位">德科信息</Descriptions.Item>
									<Descriptions.Item label="乙方交付">彭翔</Descriptions.Item>
									<Descriptions.Item label="查看简历">
										<Button type="link" style={{ padding: 0, height: 0 }}>
											查看简历
										</Button>
									</Descriptions.Item>
									<Descriptions.Item label="当前面试轮次">2</Descriptions.Item>
									<Descriptions.Item label="当前面试状态">已进行</Descriptions.Item>
									<Descriptions.Item label="终面结论">通过</Descriptions.Item>
									<br />
									<Descriptions.Item label="终面评价">该候选人面试表现良好,符合招人需求</Descriptions.Item>
								</Descriptions>
							</Icard>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default InterviewerInfo;

const menu = (
	<Menu>
		<Menu.Item>邀约下轮面试</Menu.Item>
		<Menu.Item>关闭面试</Menu.Item>
		<Menu.Item>查看面试记录</Menu.Item>
	</Menu>
);
