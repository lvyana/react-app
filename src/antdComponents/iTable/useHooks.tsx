/**
 * @file 表格api hooks
 * @name ly
 * @createDate 2023年5月19日
 */
import { useState } from 'react';
import { AxiosPromise } from 'axios';

/**
 * @param data 接口返回数据
 * @param total 条数
 */
type AxiosResponseData<D> = {
	data: D[];
	total: number;
};

/**
 * 请求接口数据方法
 * @param seachData 请求参数
 * @param api 请求接口
 * @returns void
 */
type GetTableData<T, D> = (seachData: T, api: (data: T) => AxiosPromise<AxiosResponseData<D>>) => void;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

/**
 * useHooks 获取表格相关数据
 */
const useGetTableData = <T, D>() => {
	const [tableData, setTableData] = useState<AxiosResponseData<D>['data']>([]);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);

	const getTableData: GetTableData<T, D> = async (seachData, api) => {
		setLoading(true);
		const res = await api(seachData);
		const { data, total } = res.data;
		setTableData(data);
		setTotal(total);
		setLoading(false);
	};

	return { tableData, total, loading, getTableData };
};

export default useGetTableData;
