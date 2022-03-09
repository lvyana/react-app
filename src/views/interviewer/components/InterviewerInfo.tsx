import React, { FC, useState } from 'react';
import { Avatar, Descriptions, Row, Col, Button, Form, Dropdown } from 'antd';
import Icard from '@/components/iCard';
import IconFont from '@/utils/iconfont';
import Itooltip from '@/components/iTooltip';
import Imodal, { ImodalProps } from '@/components/iModal';
import Ifrom, { FORMtype } from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { FORMITEM } from '@/components/iForm/type';

export type ICradEidt = (type: string, value: object) => void;
interface Iprops {
	onCradEidt: ICradEidt;
}
const InterviewerInfo: FC<Iprops> = ({ onCradEidt }) => {
	// 确认面试结果
	const onConfirmInterviewResults = (type: string, value: object) => {
		setVisible(true);
	};
	//表单
	const [form] = Form.useForm();
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		try {
			// 校验表单
			const values = await form.validateFields();
			setConfirmLoading(true);
			setTimeout(() => {
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisible(false);
	};

	return (
		<div>
			<Row gutter={16}>
				{[{}, {}, {}, {}, {}, {}, {}, {}].map((item, i) => {
					return (
						<Col span={6} style={{ marginBottom: '10px' }} key={i}>
							<Icard key={i}>
								<div style={{ height: '70px' }}>
									<Row gutter={8}>
										<Col flex="70px">
											<Avatar
												src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
												style={{ width: '70px', height: '70px' }}
											/>
										</Col>
										<Col flex="auto">
											<Row gutter={8}>
												<Col span={19}>
													<div>
														<Itooltip placement="top" color={'purple'} title={'查看联系人详情'}>
															<Button type="link" style={{ padding: '4px 0' }}>
																<span style={{ fontSize: '18px', fontWeight: 700 }}>苏大强</span>
															</Button>
														</Itooltip>
														<span style={{ marginLeft: '5px' }}>
															<Itooltip placement="top" color={'purple'} title={'查看面试记录'}>
																<Button
																	type="link"
																	style={{ padding: '4px 0' }}
																	onClick={() => onCradEidt('查看面试记录', item)}>
																	<IconFont type="icon-dengpao" style={{ fontSize: '12px' }}></IconFont>
																</Button>
															</Itooltip>
														</span>
													</div>
													<div style={{ fontSize: '12px', color: '#ccc' }}>
														<div>数据应用-测试</div>
														<div>深圳市 初二级 一年以上</div>
													</div>
												</Col>
												<Col span={5}>
													<div style={{ width: '100%', height: '100%', position: 'relative' }}>
														<IconFont
															type="icon-lianxi-yiguoqi"
															style={{
																fontSize: '60px',
																position: 'absolute',
																top: '-16px',
																right: '-16px'
															}}></IconFont>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>

								<Descriptions column={1} style={{ marginTop: '20px' }}>
									<Descriptions.Item label="推荐单位">德科信息</Descriptions.Item>
									<Descriptions.Item label="面试时间">2022-03-23 08:30-09:00</Descriptions.Item>
									<Descriptions.Item label="乙方交付">彭翔</Descriptions.Item>
									<Descriptions.Item label="面试官">彭翔</Descriptions.Item>
								</Descriptions>

								<Row gutter={16} style={{ textAlign: 'center' }}>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'填写本轮面试评价'}>
											<Button type="link" onClick={() => onCradEidt('填写本轮面试评价', item)}>
												<IconFont type="icon-wenbenbianji" style={{ fontSize: '24px' }}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'邀约面试'}>
											<Button type="link" onClick={() => onCradEidt('邀约面试', item)}>
												<IconFont type="icon-yaoqing" style={{ fontSize: '24px' }}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'确认最终面试结果'}>
											<Button type="link" onClick={() => onConfirmInterviewResults('确认最终面试结果', item)}>
												<IconFont type="icon-iconfont_yinzhangguanli" style={{ fontSize: '24px' }}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'关闭本轮面试'}>
											<Button type="link" onClick={() => onCradEidt('关闭本轮面试', item)}>
												<IconFont type="icon-guanbi2" style={{ fontSize: '24px' }}></IconFont>
											</Button>
										</Itooltip>
									</Col>
								</Row>
							</Icard>
						</Col>
					);
				})}
			</Row>
			{/* 确认面试结果 */}
			<Imodal
				title="确认最终面试结果"
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}
				width="600px">
				<ConfirmInterviewResult form={form}></ConfirmInterviewResult>
			</Imodal>
		</div>
	);
};

export default InterviewerInfo;

const ConfirmInterviewResult = ({ form }: { form: FORMtype }) => {
	// 参数
	const addFormList = [
		{
			type: 'select',
			name: 'select',
			label: '面试结果',
			rules: [],
			key: getKey(),
			span: 24,
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
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		},
		{
			type: 'select',
			name: 'selec2t',
			label: '面试定级',
			rules: [],
			key: getKey(),
			span: 24,
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
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		},
		{
			type: 'textArea',
			name: 'textArea',
			label: '注意事项',
			rules: [],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];
	const [state, setstate] = useState<FORMITEM[]>(addFormList);
	// 确认面试结果
	return (
		<>
			<Descriptions>
				<Descriptions.Item label="候选人">Zhou</Descriptions.Item>
				<Descriptions.Item label="岗位名称">数据应用-测试</Descriptions.Item>
				<Descriptions.Item label="岗位职级">初级-中级</Descriptions.Item>
			</Descriptions>
			<Ifrom formList={state} form={form} />
		</>
	);
};
