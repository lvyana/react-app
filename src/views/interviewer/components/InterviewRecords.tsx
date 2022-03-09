import React, { FC, useState } from 'react';
import ILookModal from '@/components/iLookModal';
import { Descriptions, Timeline } from 'antd';

interface Iprops {
	lookRecords: boolean;
	setLookRecords: React.Dispatch<React.SetStateAction<boolean>>;
}
const InterviewRecords: FC<Iprops> = ({ lookRecords, setLookRecords }) => {
	const handleCancel = () => {
		console.log('guanbi');
		setLookRecords(false);
	};
	return (
		<ILookModal visible={lookRecords} title="查看面试记录" handleCancel={handleCancel} width={'750px'}>
			<Candidate></Candidate>
			<Jobs></Jobs>
			<Records></Records>
			<InterviewResult></InterviewResult>
		</ILookModal>
	);
};

export default InterviewRecords;

// 候选人
export const Candidate = () => {
	return (
		<>
			<Descriptions title="候选人信息" column={4}>
				<Descriptions.Item label="供应商">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="候选人姓名">1810000000</Descriptions.Item>
				<Descriptions.Item label="性别">Hangzhou, Zhejiang</Descriptions.Item>
				<Descriptions.Item label="联系方式">empty</Descriptions.Item>
			</Descriptions>
		</>
	);
};

// 岗位
export const Jobs = () => {
	return (
		<>
			<Descriptions title="岗位信息">
				<Descriptions.Item label="项目组">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="岗位类别">1810000000</Descriptions.Item>
				<Descriptions.Item label="岗位职级">Hangzhou, Zhejiang</Descriptions.Item>
				<Descriptions.Item label="城市">empty</Descriptions.Item>
				<Descriptions.Item label="经验要求">empty</Descriptions.Item>
			</Descriptions>
		</>
	);
};

// 面试记录
const Records = () => {
	return (
		<>
			<div style={{ color: 'rgba(0, 0, 0, 0.85)', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5715', marginBottom: '20px' }}>
				面试记录
			</div>
			<Timeline>
				{[1, 2, 3].map((item, index) => {
					return (
						<Timeline.Item color={index % 2 === 0 ? 'red' : 'green'} key={index}>
							<Descriptions title="" column={2}>
								<Descriptions.Item label="面试轮次">Zhou Maomao</Descriptions.Item>
								<Descriptions.Item label="当前轮次面试状态">Zhou Maomao</Descriptions.Item>
								<Descriptions.Item label="面试方式">1810000000</Descriptions.Item>
								<Descriptions.Item label="面试官">empty</Descriptions.Item>
								<Descriptions.Item label="面试日期">Hangzhou, Zhejiang</Descriptions.Item>
								<Descriptions.Item label="面试时间">Hangzhou, Zhejiang</Descriptions.Item>
								<Descriptions.Item label="综合打分">empty</Descriptions.Item>
								<Descriptions.Item label="此轮面试结果">empty</Descriptions.Item>
								<Descriptions.Item label="面试评价">empty</Descriptions.Item>
								<br />
								<Descriptions.Item label="面试关闭原因">empty</Descriptions.Item>
								<br />
								<Descriptions.Item label="评价时间">只有</Descriptions.Item>
							</Descriptions>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</>
	);
};

// 面试最终结果
const InterviewResult = () => {
	return (
		<>
			<Descriptions title="面试最终结果" column={2}>
				<Descriptions.Item label="最终结果">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="面试定级">1810000000</Descriptions.Item>
			</Descriptions>
		</>
	);
};
