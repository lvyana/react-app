import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProjectApi } from '@/redux/actions/configureInterviewers';
import SearchForm from './components/SearchForm';
import useHeaderTable, { ItableBt } from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import Ibutton from '@/components/iButton';
import { BTtype, BTeditBtn } from '@/components/iButton/type';
import ModalInterviewer from './components/ModalInterviewer';
import Paginations from '@/components/pagination';
import { Form } from 'antd';
import { interviewerList } from './service';

const ConfigureInterviewers = () => {
	const dispatch = useDispatch();
	// 搜索表单
	const [searchForm] = Form.useForm();
	// 表格
	const [total, setTotal] = useState(0);
	const [pageNum, setPageNum] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [tableLoading, setTableLoading] = useState(false);
	const [data, setdata] = useState([]);
	// 修改面试官所需要回显的数据
	const [interviewerId, setInterviewerId] = useState<string | undefined>();
	const [projectIds, setProjectIds] = useState<number[]>([]);

	const getTaableData = async () => {
		try {
			let formData = searchForm?.getFieldsValue();
			setTableLoading(true);
			let res = await interviewerList({ ...formData, pageNum, pageSize });
			setTableLoading(false);
			console.log(res);
			setdata(res.data.rows);
			setTotal(res.data.total);
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
			setProjectIds(value.projectIds);
		}
	};

	const buttonList = [
		{
			name: '配置面试官',
			type: '配置面试官',
			btType: 'primary' as BTtype
		}
	];

	const editBtn: BTeditBtn = (type, value) => {
		if (type === '配置面试官') {
			setTitle('配置面试官');
			setVisible(true);
		}
	};

	const { columns } = useHeaderTable({ buttonEvent, getTaableData });

	// 配置面试官
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);

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
			{/* 配置面试官 */}
			<ModalInterviewer
				visible={visible}
				setVisible={setVisible}
				title={title}
				getTaableData={getTaableData}
				interviewerId={interviewerId}
				projectIds={projectIds}></ModalInterviewer>
		</div>
	);
};

export default ConfigureInterviewers;
