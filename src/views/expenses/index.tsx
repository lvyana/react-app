import React, { useState, useEffect, useRef } from 'react';
import { Form, Tag, Space } from 'antd';
import { Column } from '@antv/g2plot';
import useHeaderTable, { tableProps } from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import SeachForm from './components/SeachForm';
import Paginations from '@/components/pagination';
import { useTabelData } from './useHooksApi';

const Expenses = () => {
	const buttonEvent = (type: string | number, value: tableProps) => {};
	const { columns } = useHeaderTable({ buttonEvent });
	const [form] = Form.useForm();

	const [pageSize, setPageSize] = useState(10);
	const [pageNum, setPageNum] = useState(1);

	const { expensesTableData, total, getTabelData } = useTabelData();

	useEffect(() => {
		let params = form.getFieldsValue();
		getTabelData({ ...params, pageSize, pageNum });
	}, [pageSize, pageNum]);

	const onFinish = () => {
		if (pageNum === 1) {
			let params = form.getFieldsValue();
			return getTabelData({ ...params, pageSize, pageNum });
		}
		setPageNum(1);
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<SeachForm form={form} onFinish={onFinish}></SeachForm>

			<Icard styles={{ marginTop: '40px' }}>
				<Itable rowKey="key" columns={columns} data={expensesTableData} />
				<Paginations
					total={total}
					pageSize={pageSize}
					setPageSize={setPageSize}
					pageNum={pageNum}
					setPageNum={setPageNum}></Paginations>
			</Icard>
			<div id="canvas"></div>
		</div>
	);
};

export default Expenses;
