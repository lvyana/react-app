import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import useHasPermiss from '@/utils/permissions';
import useHeaderTable, { ItableBt } from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import Ibutton from '@/components/iButton';
import { BTtype, BTeditBtn } from '@/components/iButton/type';
import Imodal, { ImodalProps } from '@/components/iModal';
import EidtInterviewer from './components/EidtInterviewer';
import { Form } from 'antd';

const ConfigureInterviewers = () => {
	// 按钮权限
	const { getPermiss } = useHasPermiss();
	console.log(getPermiss());

	const buttonEvent = (type: string, value: ItableBt) => {
		console.log(type, value);
		if (type === '修改') {
			setTitle('修改面试官');
			setVisible(true);
		}
	};

	const buttonList = [
		{
			name: '添加面试官',
			type: 'primary' as BTtype
		}
	];
	const editBtn: BTeditBtn = (type, value) => {
		if (type === '添加面试官') {
			setTitle('添加面试官');
			setVisible(true);
		}
	};
	const { columns } = useHeaderTable({ buttonEvent });

	// 添加面试官
	//表单
	const [form] = Form.useForm();
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

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
	return (
		<div>
			<SearchForm></SearchForm>
			<div style={{ marginTop: '10px' }}>
				<Icard>
					<Ibutton buttonList={buttonList} editBtn={editBtn}></Ibutton>
					<Itable columns={columns} data={data} />
				</Icard>
			</div>
			{/* 添加面试官 */}
			<Imodal title={title} visible={visible} confirmLoading={confirmLoading} handleOk={handleOk} handleCancel={handleCancel}>
				<EidtInterviewer form={form} type={title}></EidtInterviewer>
			</Imodal>
		</div>
	);
};

export default ConfigureInterviewers;
const data = [
	{
		key: '1',
		name: 'John Brown',
		nickName: 'Brown',
		email: '1345646@qq.com',
		phone: '12388845646',
		project: ['nice', 'developer'],
		status: '1'
	},
	{
		key: '2',
		name: 'John Brown',
		nickName: 'Brown',
		email: '1345646@qq.com',
		phone: '12388845646',
		project: ['nice', 'developer'],
		status: '0'
	},
	{
		key: '3',
		name: 'John Brown',
		nickName: 'Brown',
		email: '1345646@qq.com',
		phone: '12388845646',
		project: ['nice', 'developer'],
		status: '1'
	}
];
