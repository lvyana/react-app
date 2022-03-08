import React, { useState } from 'react';
import { Form } from 'antd';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import NextInterviews from './components/NextInterviews';
import InterviewRecords from './components/InterviewRecords';
import InterviewTime from './components/InterviewTime';
import useIconfirm from '@/components/iModal/Iconfirm';
import { pageData } from './service';

const Interviewer = () => {
	const { onConfirm } = useIconfirm();

	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
		if (type === '邀约面试') {
			setTitle(type);
			setVisible(true);
		} else if (type === '关闭面试') {
			ClosingInterview();
		} else if (type === '查看面试记录') {
			setLookRecords(true);
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
	// 关闭面试
	const onCallback = async () => {
		// 接口
		await pageData();
	};
	const ClosingInterview = () => {
		onConfirm(`您确定关闭鹏翔的面试吗?`, onCallback);
	};
	// 查看面试记录
	const [lookRecords, setLookRecords] = useState(false);
	return (
		<div className="animate__animated animate__fadeIn">
			<SearchForm></SearchForm>
			{/* 添加面试时间 */}
			<InterviewTime></InterviewTime>
			<div style={{ marginTop: '10px' }}>
				{/* 面试人员信息 */}
				<InterviewerInfo onCradEidt={onCradEidt}></InterviewerInfo>
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
		</div>
	);
};

export default Interviewer;
