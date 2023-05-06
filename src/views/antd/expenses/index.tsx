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

export type ExpensesFormParams = Omit<TabelDataParams, 'pageSize' | 'pageNum' | 'name'>;

export type ColumnsSeachValue = Pick<TabelDataParams, 'name'>;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Expenses = () => {
	const columnsSeachValue = useRef<ColumnsSeachValue>({
		name: []
	});

	const buttonEvent = (type: string | number, value?: TabelDataResponse) => {
		if (type === 'name') {
			page.current.pageNum = 1;
			onFinish('subimt');
		}
	};

	const { columns } = useHeaderTable({ buttonEvent, columnsSeachValue });

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
		form.setFieldsValue({ age, status });
		columnsSeachValue.current.name = name;
		page.current = { pageNum: pageNum || page.current.pageNum, pageSize: pageSize || page.current.pageSize };
		onFinish('subimt');
	}, []);

	const onFinish = (type: ButtonType) => {
		if (type === 'subimt') {
			let params = form.getFieldsValue();
			setKeepAlive({ ...params, ...page.current, ...columnsSeachValue.current });
		} else if (type === 'onReset') {
			form.resetFields();
			let params = form.getFieldsValue();
			setKeepAlive({ ...params, ...page.current, ...columnsSeachValue.current });
		}
		let params = form.getFieldsValue();
		getTabelData({ ...params, ...page.current, ...columnsSeachValue.current });
	};

	return (
		<div>
			<SeachForm form={form} onFinish={onFinish}></SeachForm>
			{/* <ClassCom hh={1}></ClassCom> */}
			<Icard style={{ marginTop: '10px' }}>
				<HeaderEdit type={'expenses'}></HeaderEdit>
				<Itable<TabelDataResponse> rowKey="key" columns={columns} data={expensesTableData} loading={loading} scroll={{ x: '100%' }} />
				<Ipaginations total={total} page={page} onPaginationChange={onFinish}></Ipaginations>
			</Icard>
		</div>
	);
};

export default Expenses;
