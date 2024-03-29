import React from 'react';
import { useRequest } from 'ahooks';
import { editPersonnelTableDataApi } from '../../service';

// 获取编辑团队表格信息
export const useEditPersonnelTable = () => {
	const { data, loading, run } = useRequest(editPersonnelTableDataApi, {
		manual: true,
		debounceWait: 1000
	});

	return { editPersonnelTableData: data?.data || [], editPersonnelTableLoading: loading, run };
};
