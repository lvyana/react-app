import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Icard from '@/components/iCard';
import { message } from 'antd';
import ResumeInfo, { ICradEidt } from './components/ResumeInfo';
import Refuse from './components/Refuse';
const ScreenResumes = () => {
	// 拒绝面试
	const [visibleRefuse, setVisibleRefuse] = useState(false);

	return (
		<div className="animate__animated animate__fadeIn">
			<Icard styles={{ padding: '16px 16px 0' }}>
				<SearchForm></SearchForm>
			</Icard>

			<div style={{ marginTop: '10px' }}>
				<ResumeInfo setVisibleRefuse={setVisibleRefuse}></ResumeInfo>
			</div>
			<Refuse visibleRefuse={visibleRefuse} setVisibleRefuse={setVisibleRefuse}></Refuse>
		</div>
	);
};

export default ScreenResumes;
