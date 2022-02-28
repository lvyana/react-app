import React, { useState } from 'react';
import { Form, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import { CradEidt } from './components/NextInterviews';
import InterviewRecords from './components/InterviewRecords';
const { confirm } = Modal;

const Interviewer = () => {
	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
		if (type === '邀约下轮面试') {
			setTitle(type);
			setVisible(true);
		} else if (type === '关闭面试') {
			ClosingInterview();
		} else if (type === '查看面试记录') {
			setLookRecords(true);
		}
	};

	// 邀约下轮面试
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
	const ClosingInterview = () => {
		confirm({
			title: '您确定关闭鹏翔的面试吗?',
			icon: <ExclamationCircleOutlined />,

			onOk() {
				return new Promise((resolve, reject) => {
					setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {
				console.log('Cancel');
			}
		});
	};
	// 查看面试记录
	const [lookRecords, setLookRecords] = useState(false);
	return (
		<div className="animate__animated animate__fadeIn">
			<SearchForm></SearchForm>
			<div style={{ marginTop: '20px' }}>
				<InterviewerInfo onCradEidt={onCradEidt}></InterviewerInfo>
			</div>

			<CradEidt
				form={form}
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}></CradEidt>
			{/* 查看面试记录 */}
			<InterviewRecords lookRecords={lookRecords} setLookRecords={setLookRecords}></InterviewRecords>
		</div>
	);
};

export default Interviewer;
