import React, { FC, useState, useEffect } from 'react';
import { Avatar, Descriptions, Row, Col, Button, message } from 'antd';
import Icard from '@/components/iCard';
import IconFont from '@/utils/iconfont';
import Itooltip from '@/components/iTooltip';
import IinfiniteScroll from '@/components/iInfiniteScroll';
import { Dot } from './InterviewRecords';
import styles from '../index.module.scss';

export type ICradEidt = (type: string, value: object) => void;
/**
 *
 * onCradEidt 卡片内的操作功能
 * selectId 选中的卡片
 * setSelectId 更新选中的卡片
 * isBulk 是否可批量操作
 * bulkOperationLoading 提交批量操作中
 */
interface Iprops {
	onCradEidt: ICradEidt;
	selectId: (string | number)[];
	setSelectId: React.Dispatch<React.SetStateAction<(string | number)[]>>;
	isBulk: boolean;
	bulkOperationLoading: boolean;
}
const InterviewerInfo: FC<Iprops> = ({ onCradEidt, isBulk, selectId, setSelectId, bulkOperationLoading }) => {
	// 选中卡片
	const onSelectCard = (index: number) => {
		if (isBulk) return;
		if (bulkOperationLoading) {
			return message.warning('提交中不可操作');
		}
		let isSelect = selectId.indexOf(index) === -1;
		if (isSelect) {
			setSelectId([...selectId, index]);
		} else {
			let newSelectId = selectId.filter((item) => item !== index);
			setSelectId(newSelectId);
		}
	};

	useEffect(() => {
		if (isBulk) {
			setSelectId([]);
		}
	}, [isBulk]);

	// 懒加载
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
	const loadMoreDataApi = () => {
		setTimeout(() => {
			setData([...data, ...data]);
			setLoading(false);
		}, 1500);
	};

	const [scrollHeight, setScrollHeight] = useState(0);
	useEffect(() => {
		let height = document.documentElement.clientHeight - 280;
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
			<Row gutter={16} style={{ marginLeft: '0px', marginRight: '0px', overflow: 'hidden' }}>
				{data.map((item, i) => {
					return (
						<Col span={6} style={{ marginBottom: '10px' }} key={i} onClick={() => onSelectCard(i)}>
							<Icard
								key={i}
								styles={{
									padding: '16px',
									boxShadow: isBulk ? '' : '5px 5px 5px skyblue',
									border: selectId.indexOf(i) > -1 ? '2px solid blue' : ''
								}}>
								<div style={{ height: '70px' }}>
									<Row gutter={8}>
										<Col flex="70px">
											<Avatar
												src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
												style={{ width: '70px', height: '70px' }}
											/>
										</Col>
										<Col flex="auto">
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
															<div style={{ display: 'flex' }}>
																<Dot color="green" mr={'2px'}></Dot>
																<Dot color="green" mr={'2px'}></Dot>
																<Dot color="red"></Dot>
															</div>
														</Button>
													</Itooltip>
												</span>
											</div>
											<div style={{ fontSize: '12px', color: '#ccc' }}>
												<div>数据应用-测试</div>
												<div>深圳市 初二级 一年以上</div>
											</div>
											<IconFont
												type="icon-lianxi-yiguoqi"
												style={{
													fontSize: '60px',
													position: 'absolute',
													top: '-16px',
													right: '-12px'
												}}></IconFont>
										</Col>
									</Row>
								</div>

								<Descriptions column={1} style={{ marginTop: '20px' }}>
									<Descriptions.Item label="推荐单位">德科信息</Descriptions.Item>
									<Descriptions.Item label="面试时间">2022-03-23 08:30-09:00</Descriptions.Item>
									<Descriptions.Item label="乙方交付">彭翔</Descriptions.Item>
									<Descriptions.Item label="面试官">彭翔</Descriptions.Item>
								</Descriptions>

								<Row className={styles.interviewBtn} gutter={16} style={{ textAlign: 'center' }}>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'填写本轮面试评价'}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('填写本轮面试评价', item)}
												icon={<IconFont type="icon-wenbenbianji" style={{ fontSize: '24px' }}></IconFont>}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'邀约面试'}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('邀约面试', item)}
												icon={<IconFont type="icon-zhuceyaoqing" style={{ fontSize: '24px' }}></IconFont>}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'确认最终面试结果'}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('确认最终面试结果', item)}
												icon={
													<IconFont type="icon-iconfont_yinzhangguanli" style={{ fontSize: '24px' }}></IconFont>
												}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={'关闭本轮面试'}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('关闭本轮面试', item)}
												icon={<IconFont type="icon-guanbi2" style={{ fontSize: '24px' }}></IconFont>}></Button>
										</Itooltip>
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

export default InterviewerInfo;
