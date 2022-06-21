import React, { useState, useEffect, useRef } from 'react';
import { Form, Tag, Space } from 'antd';
import { Column } from '@antv/g2plot';
import useHeaderTable, { tableProps } from './components/headerTable';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';
import SeachForm from './components/SeachForm';
import Paginations from '@/components/pagination';
import { tabelData } from './service';

const Expenses = () => {
	const buttonEvent = (type: string | number, value: tableProps) => {};
	const { columns } = useHeaderTable({ buttonEvent });
	const [form] = Form.useForm();
	const [expensesTableData, setExpensesTableData] = useState<tableProps[]>([]);
	const [pageSize, setPageSize] = useState(10);
	const [pageNum, setPageNum] = useState(1);
	const [total, setTotal] = useState(0);

	const getTabelData = async () => {
		let params = form.getFieldsValue();
		const res = await tabelData({ ...params, pageSize, pageNum });

		const { data, total } = res.data;
		setExpensesTableData(data);
		setTotal(total);
	};

	useEffect(() => {
		getTabelData();
	}, [pageSize, pageNum]);

	const onFinish = () => {
		if (pageNum === 1) {
			return getTabelData();
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
