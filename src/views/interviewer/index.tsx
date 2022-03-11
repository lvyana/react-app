import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'antd';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import NextInterviews from './components/NextInterviews';
import InterviewRecords from './components/InterviewRecords';
import InterviewTime from './components/InterviewTime';
import Imodal, { ImodalProps } from '@/components/iModal';
import AddInterviewAssessment from './components/AddInterviewAssessment';
import Icard from '@/components/iCard';
import { BulkOperation, CloseRound, ConfirmInterviewResults } from './components/EditBt';
import { pageData } from './service';

const Interviewer = () => {
	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
		if (type === '邀约面试') {
			setTitle(type);
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
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	//表单
	const [form] = Form.useForm();

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

	// 关闭本轮面试
	const [roundForm] = Form.useForm();
	const [visibleRound, setVisibleRound] = useState(false);
	const [confirmRound, setConfirmRound] = useState(false);

	const handleOkRound = async () => {
		try {
			// 校验表单
			const values = await roundForm.validateFields();
			setConfirmRound(true);
			setTimeout(() => {
				roundForm.resetFields(); //重置表单数据
				setConfirmRound(false);
				setVisibleRound(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancelRound = () => {
		roundForm.resetFields(); //重置表单数据
		setVisibleRound(false);
	};

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
	const onBulkOperation = () => {
		setIsBulk(!isBulk);
	};
	useEffect(() => {
		if (isBulk) {
			setSelectId([]);
		}
	}, [isBulk]);
	// 提交操作
	const submitBulkOperation = () => {
		setBulkOperationLoading(true);
		setTimeout(() => {
			onBulkOperation();
			setBulkOperationLoading(false);
		}, 2000);
	};
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
						onBulkOperation={onBulkOperation}
						submitBulkOperation={submitBulkOperation}
						isBulk={isBulk}
						bulkOperationLoading={bulkOperationLoading}></BulkOperation>
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
			<NextInterviews
				form={form}
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}></NextInterviews>
			{/* 查看面试记录 */}
			<InterviewRecords lookRecords={lookRecords} setLookRecords={setLookRecords}></InterviewRecords>
			{/* 关闭本轮面试 */}
			<Imodal
				title="关闭本轮面试"
				visible={visibleRound}
				confirmLoading={confirmRound}
				handleOk={handleOkRound}
				handleCancel={handleCancelRound}
				width="600px">
				<CloseRound roundForm={roundForm}></CloseRound>
			</Imodal>
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
