import React from 'react';
import SearchForm from './components/SearchForm';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import useHeaderTable, { ItableBt } from './components/headerTable';
import { message } from 'antd';

const ScreenResumes = () => {
	const buttonEvent = (type: string | number, value: ItableBt) => {
		console.log(type, value);
		if (type === '通过') {
			message.success('通过已提成功');
		} else if (type === '拒绝') {
			message.success('拒绝已提成功');
		}
	};

	const { columns } = useHeaderTable({ buttonEvent });

	return (
		<div>
			<SearchForm></SearchForm>
			<div style={{ marginTop: '10px' }}>
				<Icard>
					<Itable columns={columns} data={data} />
				</Icard>
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
