import React, { useState } from 'react';
import { Col, Row } from 'antd';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import NextInterviews from './components/NextInterviews';
import InterviewRecords from './components/InterviewRecords';
import InterviewTime from './components/InterviewTime';
import AddInterviewAssessment from './components/AddInterviewAssessment';
import Icard from '@/components/iCard';
import { BulkOperation, CloseRound, ConfirmInterviewResults } from './components/EditBt';
import { pageData } from './service';

const Interviewer = () => {
	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
		if (type === '邀约面试') {
			setVisible(true);
		} else if (type === '关闭本轮面试') {
			setVisibleRound(true);
		} else if (type === '查看面试记录') {
			setLookRecords(true);
		} else if (type === '填写本轮面试评价') {
			setVisibleAssessment(true);
		} else if (type === '确认最终面试结果') {
			setVisibleResults(true);
		}
	};

	// 邀约面试
	const [visible, setVisible] = useState(false);

	// 关闭本轮面试
	const [visibleRound, setVisibleRound] = useState(false);

	// 查看面试记录
	const [lookRecords, setLookRecords] = useState(false);

	// 填写本轮面试评价
	const [visibleAssessment, setVisibleAssessment] = useState(false);

	// 确认最终面试结果
	const [visibleResults, setVisibleResults] = useState(false);

	// 批量操作
	const [isBulk, setIsBulk] = useState(true);
	const [selectId, setSelectId] = useState<(string | number)[]>([]);
	const [bulkOperationLoading, setBulkOperationLoading] = useState(false);

	return (
		<div className="animate__animated animate__fadeIn">
			<Icard styles={{ padding: '16px 16px 0' }}>
				<SearchForm></SearchForm>
			</Icard>

			{/* 添加面试时间 */}
			<Row gutter={8} style={{ marginTop: '10px' }}>
				<Col>
					<InterviewTime></InterviewTime>
				</Col>
				<Col>
					<BulkOperation
						setIsBulk={setIsBulk}
						isBulk={isBulk}
						bulkOperationLoading={bulkOperationLoading}
						setBulkOperationLoading={setBulkOperationLoading}></BulkOperation>
				</Col>
			</Row>

			<div style={{ marginTop: '10px' }}>
				{/* 面试人员信息 */}
				<InterviewerInfo
					onCradEidt={onCradEidt}
					isBulk={isBulk}
					selectId={selectId}
					setSelectId={setSelectId}
					bulkOperationLoading={bulkOperationLoading}></InterviewerInfo>
			</div>

			{/* 邀约面试 */}
			<NextInterviews visible={visible} setVisible={setVisible}></NextInterviews>

			{/* 查看面试记录 */}
			<InterviewRecords lookRecords={lookRecords} setLookRecords={setLookRecords}></InterviewRecords>

			{/* 关闭本轮面试 */}
			<CloseRound visibleRound={visibleRound} setVisibleRound={setVisibleRound} />

			{/* 填写本轮面试评价 */}
			<AddInterviewAssessment
				visibleAssessment={visibleAssessment}
				setVisibleAssessment={setVisibleAssessment}></AddInterviewAssessment>

			{/* 确认最终面试结果 */}
			<ConfirmInterviewResults visibleResults={visibleResults} setVisibleResults={setVisibleResults}></ConfirmInterviewResults>
		</div>
	);
};

export default Interviewer;
