import React from 'react';
import SearchForm from './components/SearchForm';
import Icard from '@/components/iCard';
import { message } from 'antd';
import ResumeInfo, { ICradEidt } from './components/ResumeInfo';

const ScreenResumes = () => {
	// 编辑卡片
	const onCradEidt: ICradEidt = (type, value) => {
		console.log(type, value);
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<Icard styles={{ padding: '16px 16px 0' }}>
				<SearchForm></SearchForm>
			</Icard>

			<div style={{ marginTop: '10px' }}>
				<ResumeInfo onCradEidt={onCradEidt}></ResumeInfo>
			</div>
		</div>
	);
};

export default ScreenResumes;
