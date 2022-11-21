import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { editPersonnelTableDataApi } from '../../service';
import type { EditPersonnelTableDataParams } from './EditPersonnelTable';
import type { EditPersonnelSearchFormParmas } from './EditPersonnelSearch';

// 获取编辑团队表格信息
export const useEditPersonnelTable = () => {
	const { data, loading, run } = useRequest(editPersonnelTableDataApi, {
		manual: true,
		debounceWait: 1000
	});

	return { editPersonnelTableData: data?.data || [], editPersonnelTableLoading: loading, run };
};
