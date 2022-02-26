import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import InterviewerInfo, { ICradEidt } from './components/InterviewerInfo';
import { CradEidt } from './components/CradEidt';

const Interviewer = () => {
	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);

		setTitle(type);
		setVisible(true);
	};
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setConfirmLoading(false);
			setVisible(false);
		}, 2000);
	};
	const handleCancel = () => {
		setVisible(false);
	};
	return (
		<div className="animate__animated animate__fadeIn">
			<SearchForm></SearchForm>
			<div style={{ marginTop: '20px' }}>
				<InterviewerInfo onCradEidt={onCradEidt}></InterviewerInfo>
			</div>
			<CradEidt
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}></CradEidt>
		</div>
	);
};

export default Interviewer;
