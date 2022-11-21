import React, { useState } from 'react';
import { TabelDataResponse } from './service';
import { tabelData } from './service';
import { TabelDataParams } from './service';

// 查询表格数据
const useTabelData = () => {
	const [expensesTableData, setExpensesTableData] = useState<TabelDataResponse[]>([]);

	const [total, setTotal] = useState(0);

	const [loading, setLoading] = useState(false);

	const getTabelData = async (params: TabelDataParams) => {
		try {
			setLoading(true);
			const res = await tabelData({ ...params });
			const { data, total } = res;
			setExpensesTableData(data);
			setTotal(total);
		} catch (error) {}
		setLoading(false);
	};

	return { expensesTableData, setExpensesTableData, total, getTabelData, loading };
};

export { useTabelData };
