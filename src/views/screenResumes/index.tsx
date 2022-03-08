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
		<div>
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
const data = [
	{
		key: '1',
		name: 'John Brown',
		nickName: 'Brown',
		email: '1345646@qq.com',
		phone: '12388845646',
		project: ['nice', 'developer'],
		status: '1'
	}
];
