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
		</ILookModal>
	);
};

export default InterviewRecords;

// 候选人
const Candidate = () => {
	return (
		<>
			<Descriptions title="候选人信息" column={4}>
				<Descriptions.Item label="供应商">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="候选人姓名">1810000000</Descriptions.Item>
				<Descriptions.Item label="性别">Hangzhou, Zhejiang</Descriptions.Item>
				<Descriptions.Item label="联系人">empty</Descriptions.Item>
			</Descriptions>
		</>
	);
};

// 岗位
const Jobs = () => {
	return (
		<>
			<Descriptions title="岗位信息">
				<Descriptions.Item label="项目组">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="岗位类别">1810000000</Descriptions.Item>
				<Descriptions.Item label="岗位要求">Hangzhou, Zhejiang</Descriptions.Item>
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
								<Descriptions.Item label="面试方式">1810000000</Descriptions.Item>
								<Descriptions.Item label="面试结果">Hangzhou, Zhejiang</Descriptions.Item>
								<Descriptions.Item label="面试官">empty</Descriptions.Item>
								<Descriptions.Item label="面试官电话">empty</Descriptions.Item>
								<Descriptions.Item label="面试官邮箱">empty</Descriptions.Item>
								<Descriptions.Item label="面试定级">只有终面才会出现</Descriptions.Item>
							</Descriptions>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</>
	);
};
