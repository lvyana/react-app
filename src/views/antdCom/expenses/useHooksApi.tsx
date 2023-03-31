/**
 * @file expenses hooks
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { useState } from 'react';
import { tabelData } from './service';
import type { TabelDataResponse, TabelDataParams } from './service';

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

	return { expensesTableData, total, getTabelData, loading };
};

export { useTabelData };
