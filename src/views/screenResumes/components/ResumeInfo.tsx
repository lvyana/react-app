import React, { FC, useState, useEffect } from 'react';
import { Avatar, Descriptions, Row, Col, Button, Divider, Dropdown } from 'antd';
import Icard from '@/components/iCard';
import IconFont from '@/utils/iconfont';
import Itooltip from '@/components/iTooltip';
import IinfiniteScroll from '@/components/iInfiniteScroll';

export type ICradEidt = (type: string, value: object) => void;
interface Iprops {
	setVisibleRefuse: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResumeInfo: FC<Iprops> = ({ setVisibleRefuse }) => {
	// 懒加载
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
	const loadMoreDataApi = () => {
		setTimeout(() => {
			setData([...data, ...data]);
			setLoading(false);
		}, 1500);
	};

	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
		if (type === '拒绝') {
			setVisibleRefuse(true);
		}
	};

	// 收藏
	const onCollect = () => {};

	const [scrollHeight, setScrollHeight] = useState(0);
	useEffect(() => {
		let height = document.documentElement.clientHeight - 240;
		console.log(height);
		setScrollHeight(height);
	}, []);
	return (
		<IinfiniteScroll
			current={data.length}
			total={50}
			loading={loading}
			setLoading={setLoading}
			height={scrollHeight}
			loadMoreDataApi={loadMoreDataApi}>
			<Row gutter={16}>
				{data.map((item, i) => {
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
															<Itooltip placement="top" color={'purple'} title={'查看简历'}>
																<IconFont type="icon-jianli" style={{ fontSize: '16px' }}></IconFont>
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
														<Itooltip placement="top" color={'purple'} title={'收藏'}>
															<IconFont
																type="icon-shoucang1"
																style={{ fontSize: '24px' }}
																onClick={onCollect}></IconFont>
														</Itooltip>
														<Itooltip placement="top" color={'purple'} title={'已收藏'}>
															<IconFont
																type="icon-shoucang"
																style={{ fontSize: '24px' }}
																onClick={onCollect}></IconFont>
														</Itooltip>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>

								<Descriptions column={1} style={{ marginTop: '20px' }}>
									<Descriptions.Item label="推荐单位">德科信息</Descriptions.Item>
									<Descriptions.Item label="推荐人">彭翔</Descriptions.Item>
									<Descriptions.Item label="毕业院校">上海戏剧学院</Descriptions.Item>
									<Descriptions.Item label="工作年限">3</Descriptions.Item>
									<Descriptions.Item label="专业">计算机科学与技术</Descriptions.Item>
									<Descriptions.Item label="推荐理由">
										<Itooltip
											placement="top"
											color={'purple'}
											title={'合适合适合适合适合适合适合适合适合适合合适合适合适合适合适合适合适合适合'}>
											<div style={{ width: '170px' }} className="omit">
												合适合适合适合适合适合适合适合适合适合适合
											</div>
										</Itooltip>
									</Descriptions.Item>
									<Descriptions.Item label="推荐时间">2020-03-15</Descriptions.Item>
									<Descriptions.Item label="拒绝理由">
										<Itooltip
											placement="top"
											color={'purple'}
											title={'拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝'}>
											<div style={{ width: '170px' }} className="omit">
												拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝拒绝
											</div>
										</Itooltip>
									</Descriptions.Item>
								</Descriptions>

								<Row gutter={16} style={{ textAlign: 'center' }}>
									<Col className="gutter-row" span={12}>
										<Button onClick={() => onCradEidt('拒绝', item)}>拒绝</Button>
									</Col>
									<Col className="gutter-row" span={12}>
										<Button type="primary" onClick={() => onCradEidt('可面试', item)}>
											可面试
										</Button>
									</Col>
								</Row>
							</Icard>
						</Col>
					);
				})}
			</Row>
		</IinfiniteScroll>
	);
};

export default ResumeInfo;
