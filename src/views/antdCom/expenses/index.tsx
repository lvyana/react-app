/**
 * @file expenses
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useEffect, useRef } from 'react';
import { Form } from 'antd';
import useHeaderTable from './components/useTable';
import Itable from '@/antdComponents/iTable';
import Icard from '@/antdComponents/iCard';
import SeachForm from './components/SeachForm';
import Ipaginations from '@/antdComponents/iPagination';
import HeaderEdit from '@/antdComponents/iEditTableHeader';
import { useTabelData } from './useHooksApi';
import useKeepAlive from '@/useHooks/useKeepAlive';
import type { TabelDataParams, TabelDataResponse } from './service';
import type { ButtonType } from './components/SeachForm';

export type ExpensesFormParams = Omit<TabelDataParams, 'pageSize' | 'pageNum'>;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Expenses = () => {
	const buttonEvent = (type: string | number, value: TabelDataResponse) => {};

	const { columns } = useHeaderTable({ buttonEvent });

	const [form] = Form.useForm<ExpensesFormParams>();

	const { expensesTableData, total, getTabelData, loading } = useTabelData();

	// 缓存
	const { initKeepAliveData, setKeepAliveData } = useKeepAlive();

	const page = useRef({
		pageSize: initKeepAliveData?.pageSize || 10,
		pageNum: initKeepAliveData?.pageNum || 1
	});

	const setKeepAlive = (params: TabelDataParams) => {
		setKeepAliveData(params);
	};

	useEffect(() => {
		const { pageNum, pageSize, name, age, status } = initKeepAliveData || {};
		form.setFieldsValue({ name, age, status });
		page.current = { pageNum: pageNum || page.current.pageNum, pageSize: pageSize || page.current.pageSize };
		onFinish('subimt');
	}, []);

	const onFinish = (type: ButtonType) => {
		if (type === 'subimt') {
			let params = form.getFieldsValue();
			setKeepAlive({ ...params, ...page.current });
		} else if (type === 'onReset') {
			form.resetFields();
			let params = form.getFieldsValue();
			setKeepAlive({ ...params, ...page.current });
		}
		let params = form.getFieldsValue();
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
