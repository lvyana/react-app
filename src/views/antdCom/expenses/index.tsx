import React, { useState, useEffect, useRef } from 'react';
import { Form, Tag, Space } from 'antd';
import { Column } from '@antv/g2plot';
import useHeaderTable from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import SeachForm from './components/SeachForm';
import Paginations from '@/components/pagination';
import { useTabelData } from './useHooksApi';
import useKeepAlive from '@/useHooks/useKeepAlive';
import { TabelDataResponse } from './service';
import type { TabelDataParams } from './service';

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

			<Icard style={{ marginTop: '10px' }}>
				<Itable rowKey="key" columns={columns} data={expensesTableData} />
				<Paginations total={total} pageSize={pageSize} setPageSize={setPageSize} pageNum={pageNum} setPageNum={setPageNum}></Paginations>
			</Icard>
		</div>
	);
};

export default Expenses;
