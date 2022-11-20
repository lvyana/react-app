import React, { useEffect, useRef } from 'react';
import { Form } from 'antd';
import useHeaderTable from './components/useTable';
import Itable from '@/antdComponents/iTable';
import Icard from '@/antdComponents/iCard';
import SeachForm from './components/SeachForm';
import Ipaginations from '@/antdComponents/iPagination';
import HeaderEdit from '@/antdComponents/iTable/HeaderEdit';
import { useTabelData } from './useHooksApi';
import useKeepAlive from '@/useHooks/useKeepAlive';
import type { TabelDataParams, TabelDataResponse } from './service';
import ClassCom from './components/classCom';

const Expenses = () => {
	const buttonEvent = (type: string | number, value: TabelDataResponse) => {};

	const { columns } = useHeaderTable({ buttonEvent });

	const [form] = Form.useForm<Omit<TabelDataParams, 'pageSize' | 'pageNum '>>();

	const { expensesTableData, setExpensesTableData, total, getTabelData, loading } = useTabelData();

	// 缓存
	const { initValue, setValue } = useKeepAlive();

	const page = useRef({
		pageSize: (initValue as TabelDataParams | undefined)?.pageSize || 10,
		pageNum: (initValue as TabelDataParams | undefined)?.pageNum || 1
	});

	const setKeepAlive = (params: unknown) => {
		setValue(params);
	};

	useEffect(() => {
		form.setFieldsValue({ ...(initValue as TabelDataParams | undefined) });
		onFinish();
	}, []);

	const onFinish = () => {
		let params = form.getFieldsValue();
		setKeepAlive({ ...params, ...page.current });
		getTabelData({ ...params, ...page.current });
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<SeachForm form={form} onFinish={onFinish}></SeachForm>
			{/* <ClassCom hh={1}></ClassCom> */}
			<Icard style={{ marginTop: '10px' }}>
				<HeaderEdit type={'expenses'}></HeaderEdit>
				<Itable<TabelDataResponse> rowKey="key" columns={columns} data={expensesTableData} loading={loading} />
				<Ipaginations total={total} page={page} onPaginationChange={onFinish}></Ipaginations>
			</Icard>
		</div>
	);
};

export default Expenses;
