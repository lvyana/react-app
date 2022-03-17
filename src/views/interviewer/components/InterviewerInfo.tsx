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
															<div style={{ display: 'flex' }}>{interviewStatus('4,4,3')}</div>
														</Button>
													</Itooltip>
												</span>
											</div>
											<div style={{ fontSize: '12px', color: '#ccc' }}>
												<div>数据应用-测试</div>
												<div>深圳市 初二级 一年以上</div>
											</div>
											{candidateStatus(i + '')}
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
										<Itooltip placement="top" color={'purple'} title={thisInterviewTitle(i + '', i + '')}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('填写本轮面试评价', item)}
												icon={<IconFont type="icon-wenbenbianji" style={{ fontSize: '24px' }}></IconFont>}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={inviteInterviewTitle(i + '', i + '')}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('邀约面试', item)}
												icon={<IconFont type="icon-zhuceyaoqing" style={{ fontSize: '24px' }}></IconFont>}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={endResultTitle(i + '', i + '')}>
											<Button
												shape="circle"
												onClick={() => onCradEidt('确认最终面试结果', item)}
												icon={
													<IconFont type="icon-iconfont_yinzhangguanli" style={{ fontSize: '24px' }}></IconFont>
												}></Button>
										</Itooltip>
									</Col>
									<Col className="gutter-row" span={6}>
										<Itooltip placement="top" color={'purple'} title={CloseThisRoundTitle(i + '', i + '')}>
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

// 候选人面试状态
const candidateStatus = (type: string) => {
	console.log(type);
	if (type === '1') {
		// 待安排
		return (
			<IconFont
				type="icon-daianpai"
				style={{
					fontSize: '60px',
					position: 'absolute',
					top: '-16px',
					right: '-12px'
				}}></IconFont>
		);
	} else if (type === '2') {
		// 进行中
		return (
			<IconFont
				type="icon-jinhang"
				style={{
					fontSize: '60px',
					position: 'absolute',
					top: '-16px',
					right: '-12px'
				}}></IconFont>
		);
	} else if (type === '3') {
		// 通过面试
		return (
			<IconFont
				type="icon-mianshitongguo"
				style={{
					fontSize: '60px',
					position: 'absolute',
					top: '-16px',
					right: '-12px'
				}}></IconFont>
		);
	} else if (type === '4') {
		// 未通过面试
		return (
			<IconFont
				type="icon-mianshishibai"
				style={{
					fontSize: '60px',
					position: 'absolute',
					top: '-16px',
					right: '-12px'
				}}></IconFont>
		);
	} else if (type === '5') {
		// 放弃面试
		return (
			<IconFont
				type="icon-houxuanrenfangqi"
				style={{
					fontSize: '60px',
					position: 'absolute',
					top: '-16px',
					right: '-12px'
				}}></IconFont>
		);
	}
};

// 候选人面试进行中状态 type 4,4,1 轮次状态组合
const interviewStatus = (type: string) => {
	let typeArr = type.split(',');

	return typeArr.map((value, i) => {
		if (value === '1') {
			// 已邀约
			return <Dot color="yellow" key={i} mr={'2px'}></Dot>;
		} else if (value === '2') {
			// 待面试
			return <Dot color="blue" key={i} mr={'2px'}></Dot>;
		} else if (value === '3') {
			// 已终止
			return <Dot color="red" key={i} mr={'2px'}></Dot>;
		} else if (value === '4') {
			// 已进行
			return <Dot color="green" key={i} mr={'2px'}></Dot>;
		}
	});
};

/**
 * candidateType 候选人面试状态
 * interviewType 候选人面试进行中状态
 */
// 填写本轮面试评价按钮提示语句
const thisInterviewTitle = (candidateType: string, interviewType: string) => {
	if (candidateType === '1') {
		// candidateType待安排
		return '面试未安排,无需填写面试评价';
	} else if (candidateType === '2') {
		// candidateType进行中
		if (interviewType === '1') {
			// 已邀约
			return '请等待交付确认本次面试';
		} else if (interviewType === '2') {
			// 待面试
			return '填写面试评价';
		} else if (interviewType === '3') {
			// 已终止
			return '候选人已放弃面试';
		} else if (interviewType === '4') {
			// 已进行
			return '面试未安排，无需填写面试评价';
		}
	} else if (candidateType === '3') {
		// candidateType通过面试
		return '候选人面试通过';
	} else if (candidateType === '4') {
		// candidateType未通过面试
		return '候选人面试不通过';
	} else if (candidateType === '5') {
		// candidateType放弃面试
		return '候选人已放弃面试';
	}
};

// 邀约面试
const inviteInterviewTitle = (candidateType: string, interviewType: string) => {
	if (candidateType === '1') {
		// candidateType待安排
		return '邀约面试';
	} else if (candidateType === '2') {
		// candidateType进行中
		if (interviewType === '1') {
			// 已邀约
			return '本轮面试进行中';
		} else if (interviewType === '2') {
			// 待面试
			return '本轮面试进行中';
		} else if (interviewType === '3') {
			// 已终止
			return '候选人已放弃面试';
		} else if (interviewType === '4') {
			// 已进行
			return '邀约面试';
		}
	} else if (candidateType === '3') {
		// candidateType通过面试
		return '候选人面试通过';
	} else if (candidateType === '4') {
		// candidateType未通过面试
		return '候选人面试不通过';
	} else if (candidateType === '5') {
		// candidateType放弃面试
		return '候选人已放弃面试';
	}
};

// 确认最终面试结果
const endResultTitle = (candidateType: string, interviewType: string) => {
	if (candidateType === '1') {
		// candidateType待安排
		return '确认最终面试结果';
	} else if (candidateType === '2') {
		// candidateType进行中
		if (interviewType === '1') {
			// 已邀约
			return '本轮面试正在进行中';
		} else if (interviewType === '2') {
			// 待面试
			return '本轮面试正在进行中';
		} else if (interviewType === '3') {
			// 已终止
			return '候选人已放弃面试';
		} else if (interviewType === '4') {
			// 已进行
			return '确认最终面试结果';
		}
	} else if (candidateType === '3') {
		// candidateType通过面试
		return '候选人面试通过';
	} else if (candidateType === '4') {
		// candidateType未通过面试
		return '候选人面试不通过';
	} else if (candidateType === '5') {
		// candidateType放弃面试
		return '候选人已放弃面试';
	}
};

// 关闭本轮面试
const CloseThisRoundTitle = (candidateType: string, interviewType: string) => {
	if (candidateType === '1') {
		// candidateType待安排
		return '面试未安排，无需关闭面试';
	} else if (candidateType === '2') {
		// candidateType进行中
		if (interviewType === '1') {
			// 已邀约
			return '关闭本轮面试';
		} else if (interviewType === '2') {
			// 待面试
			return '关闭本轮面试';
		} else if (interviewType === '3') {
			// 已终止
			return '候选人已放弃面试';
		} else if (interviewType === '4') {
			// 已进行
			return '面试未安排，无需关闭面试';
		}
	} else if (candidateType === '3') {
		// candidateType通过面试
		return '候选人面试通过';
	} else if (candidateType === '4') {
		// candidateType未通过面试
		return '候选人面试不通过';
	} else if (candidateType === '5') {
		// candidateType放弃面试
		return '候选人已放弃面试';
	}
};
