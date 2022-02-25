import React, { useState } from 'react';
import Icard from '@/components/iCard';
import Ifrom from '@/components/iForm';
import { Form, Descriptions, Row, Col, Button } from 'antd';
import getKey from '@/utils/onlyKey';

const Interviewer = () => {
	//表单
	const [form] = Form.useForm();
	// 参数
	const formList = [
		{
			type: 'input',
			name: 'name',
			label: '姓名',
			rules: [],
			key: getKey(),
			span: 6,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'select',
			label: '岗位',
			rules: [],
			key: getKey(),
			span: 6,
			option: [
				{
					name: 'male',
					value: 'male',
					key: getKey()
				},
				{
					name: 'female',
					value: 'female',
					key: getKey()
				}
			],
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'danwei',
			label: '推荐单位',
			rules: [],
			key: getKey(),
			span: 6,
			option: [
				{
					name: 'male',
					value: 'male',
					key: getKey()
				},
				{
					name: 'female',
					value: 'female',
					key: getKey()
				}
			],
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},

		{
			type: 'button',
			name: 'button',
			option: ['搜索', '重置'],
			key: getKey(),
			span: 6,
			style: { float: 'right' }
		}
	];
	const [state, setstate] = useState(formList);
	return (
		<div>
			<Icard styles={{ padding: '16px 16px 0' }}>
				<Ifrom formList={state} form={form} />
			</Icard>
			<div style={{ marginTop: '20px' }}>
				<Row gutter={16}>
					{[1, 1, 1, 1, , 1, 1, 1].map((item, i) => {
						return (
							<Col span={8} style={{ marginTop: '10px' }}>
								<Icard key={i}>
									<Descriptions title="彭翔" column={2} extra={<Button type="link">查看简历</Button>}>
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
		</div>
	);
};

export default Interviewer;
