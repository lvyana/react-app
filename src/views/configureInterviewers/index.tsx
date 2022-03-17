import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProjectApi } from '@/redux/actions/configureInterviewers';
import SearchForm from './components/SearchForm';
import useHasPermiss from '@/utils/permissions';
import useHeaderTable, { ItableBt } from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import Ibutton from '@/components/iButton';
import { BTtype, BTeditBtn } from '@/components/iButton/type';
import Imodal, { ImodalProps } from '@/components/iModal';
import EidtInterviewer from './components/EidtInterviewer';
import Paginations from '@/components/pagination';
import { Form } from 'antd';
import { interviewerList, addInterviewerAndProject, updateInterviewerAndProject } from './service';

const ConfigureInterviewers = () => {
	const dispatch = useDispatch();
	// 按钮权限
	const { getPermiss } = useHasPermiss();
	console.log(getPermiss());
	// 表格面试官
	//表单
	const [searchForm] = Form.useForm();
	const [total, setTotal] = useState(0);
	const [pageNum, setPageNum] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [tableLoading, setTableLoading] = useState(false);
	const [data, setdata] = useState([]);
	const [interviewerId, setInterviewerId] = useState<string | undefined>();

	const getTaableData = async () => {
		try {
			let formData = searchForm?.getFieldsValue();
			setTableLoading(true);
			let res = await interviewerList({ ...formData, pageNum, pageSize });
			setTableLoading(false);
			console.log(res);
			setdata(res.data.rows);
		} catch (error) {
			setTableLoading(false);
		}
	};

	useEffect(() => {
		dispatch(getProjectApi());
	}, []);

	useEffect(() => {
		getTaableData();
	}, [pageNum, pageSize]);

	const buttonEvent = (type: string | number, value: ItableBt) => {
		console.log(type, value);
		if (type === '修改') {
			setTitle('修改面试官');
			setVisible(true);
			console.log(value);

			setInterviewerId(value.interviewerId);
			form.setFieldsValue({ projectIds: value.projectIds });
		}
	};

	const buttonList = [
		{
			name: '添加面试官',
			type: '添加面试官',
			btType: 'primary' as BTtype
		}
	];

	const editBtn: BTeditBtn = (type, value) => {
		if (type === '添加面试官') {
			setTitle('添加面试官');
			setVisible(true);
		}
	};

	const { columns } = useHeaderTable({ buttonEvent, getTaableData });

	// 添加面试官
	//表单
	const [form] = Form.useForm();
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		editInterviewer();
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisible(false);
	};

	// 修改和新增面试官
	const editInterviewer = async () => {
		let formData = form.getFieldsValue();
		if (title === '添加面试官') {
			try {
				const values = await form.validateFields();
				setConfirmLoading(true);
				let res = await addInterviewerAndProject({ ...formData });
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
				getTaableData();
			} catch (error) {
				setConfirmLoading(false);
			}
		} else if (title === '修改面试官') {
			try {
				const values = await form.validateFields();
				setConfirmLoading(true);
				let res = await updateInterviewerAndProject({ ...formData, interviewerId });
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisible(false);
				getTaableData();
			} catch (error) {
				setConfirmLoading(false);
			}
		}
	};
	return (
		<div className="animate__animated animate__fadeIn">
			<SearchForm form={searchForm} getTaableData={getTaableData}></SearchForm>
			<div style={{ marginTop: '10px' }}>
				<Icard>
					<Ibutton buttonList={buttonList} editBtn={editBtn}></Ibutton>
					<Itable rowKey={'interviewerId'} columns={columns} data={data} loading={tableLoading} />
					<Paginations
						total={total}
						pageNum={pageNum}
						pageSize={pageSize}
						setPageSize={setPageSize}
						setPageNum={setPageNum}></Paginations>
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
