import React, { useState, useEffect, Children } from 'react';
import { Form } from 'antd';
import useHeaderTable from './components/useTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import SeachForm from './components/SeachForm';
import Ipaginations from '@/components/iPagination';
import HeaderEdit from '@/components/iTable/HeaderEdit';
import { useTabelData } from './useHooksApi';
import useKeepAlive from '@/useHooks/useKeepAlive';
import type { TabelDataParams, TabelDataResponse } from './service';
import ClassCom from './components/classCom';

const Expenses = () => {
	const buttonEvent = (type: string | number, value: TabelDataResponse) => {};

	const { columns } = useHeaderTable({ buttonEvent });

	const [form] = Form.useForm();

	const { expensesTableData, setExpensesTableData, total, getTabelData } = useTabelData();

	// 缓存
	const { initValue, setValue } = useKeepAlive();

	const [pageSize, setPageSize] = useState(() => {
		return (initValue as TabelDataParams | undefined)?.pageSize || 10;
	});
	const [pageNum, setPageNum] = useState(() => {
		return (initValue as TabelDataParams | undefined)?.pageNum || 1;
	});

	// 更新缓存数据
	useEffect(() => {
		const params = form.getFieldsValue();
		setKeepAlive({ ...params, pageSize, pageNum });
	}, [pageSize, pageNum]);

	const setKeepAlive = (params: unknown) => {
		setValue(params);
	};

	useEffect(() => {
		form.setFieldsValue({ ...(initValue as TabelDataParams | undefined) });
		let params = form.getFieldsValue();
		getTabelData({ ...params, pageSize, pageNum });

		return () => {
			setExpensesTableData([]);
		};
	}, [pageSize, pageNum]);

	const onFinish = () => {
		if (pageNum === 1) {
			let params = form.getFieldsValue();
			setKeepAlive({ ...params, pageSize, pageNum });
			return getTabelData({ ...params, pageSize, pageNum });
		}
		setPageNum(1);
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<SeachForm form={form} onFinish={onFinish}></SeachForm>
			<ClassCom hh={1}></ClassCom>
			<Icard style={{ marginTop: '10px' }}>
				<HeaderEdit type={'expenses'}></HeaderEdit>
				<Itable rowKey="key" columns={columns} data={expensesTableData} />
				<Ipaginations total={total} pageSize={pageSize} setPageSize={setPageSize} pageNum={pageNum} setPageNum={setPageNum}></Ipaginations>
			</Icard>
		</div>
	);
};

export default Expenses;
