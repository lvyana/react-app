import React, { useState } from 'react';
import { tableProps } from './components/headerTable';
import { tabelData } from './service';

const useTabelData = () => {
	const [expensesTableData, setExpensesTableData] = useState<tableProps[]>([]);

	const [total, setTotal] = useState(0);

	const getTabelData = async (params: any) => {
		const res = await tabelData({ ...params });
		const { data, total } = res.data;
		setExpensesTableData(data);
		setTotal(total);
	};

	return { expensesTableData, total, getTabelData };
};

export { useTabelData };
