import React, { FC } from 'react';
import { Avatar, Descriptions, Row, Col, Button, Menu, Dropdown } from 'antd';
import Icard from '@/components/iCard';
import IconFont from '@/utils/iconfont';
import Itooltip from '@/components/iTooltip';

export type ICradEidt = (type: string, value: object) => void;
interface Iprops {
	onCradEidt: ICradEidt;
}
const InterviewerInfo: FC<Iprops> = ({ onCradEidt }) => {
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
															<Itooltip placement="top" color={'purple'} title={'当前面试轮次'}>
																<IconFont type="icon-dengpao" style={{ fontSize: '12px' }}></IconFont>
																<IconFont type="icon-dengpao" style={{ fontSize: '12px' }}></IconFont>
																<IconFont type="icon-dengpao" style={{ fontSize: '12px' }}></IconFont>
															</Itooltip>
														</span>
													</div>
													<div style={{ fontSize: '12px', color: '#ccc' }}>
														<div>数据应用-测试</div>
														<div>深圳市 初二级 一年以上</div>
													</div>
												</Col>
												<Col span={5}>
													<div style={{ width: '100%', height: '100%' }}>
														<Itooltip placement="top" color={'purple'} title={'面试状态'}>
															<IconFont type="icon-yishen" style={{ fontSize: '24px' }}></IconFont>
														</Itooltip>
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
										<Itooltip placement="top" color={'purple'} title={'填写面试评价'}>
											<Button type="link">
												<IconFont type="icon-wenbenbianji" style={{ fontSize: '24px' }}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'邀约面试'}>
											<Button type="link">
												<IconFont
													type="icon-yaoqing"
													style={{ fontSize: '24px' }}
													onClick={() => onCradEidt('邀约面试', item)}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'查看面试记录'}>
											<Button type="link">
												<IconFont
													type="icon-chakanlishibanben"
													style={{ fontSize: '24px' }}
													onClick={() => onCradEidt('查看面试记录', item)}></IconFont>
											</Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'关闭面试'}>
											<Button type="link">
												<IconFont
													type="icon-guanbi2"
													style={{ fontSize: '24px' }}
													onClick={() => onCradEidt('关闭面试', item)}></IconFont>
											</Button>
										</Itooltip>
									</Col>
								</Row>
							</Icard>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default InterviewerInfo;
