import React, { useState } from 'react';
import { Form } from 'antd';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import NextInterviews from './components/NextInterviews';
import InterviewRecords from './components/InterviewRecords';
import InterviewTime from './components/InterviewTime';
import useIconfirm from '@/components/iModal/Iconfirm';
import Imodal, { ImodalProps } from '@/components/iModal';
import Ifrom, { FORMtype } from '@/components/iForm';
import AddInterviewAssessment from './components/AddInterviewAssessment';
import Icard from '@/components/iCard';
import { pageData } from './service';
import getKey from '@/utils/onlyKey';

const Interviewer = () => {
	const { onConfirm } = useIconfirm();

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
	return (
		<div className="animate__animated animate__fadeIn">
			<Icard styles={{ padding: '16px 16px 0' }}>
				<SearchForm></SearchForm>
			</Icard>
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
		</div>
	);
};

export default Interviewer;

// 关闭本轮面试
const CloseRound = ({ roundForm }: { roundForm: FORMtype }) => {
	// 参数
	const formList = [
		{
			type: 'textArea',
			name: 'textArea',
			label: '关闭理由',
			rules: [{ required: true, message: '请输入关闭理由' }],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];
	return (
		<>
			<Ifrom formList={formList} form={roundForm} />
		</>
	);
};
