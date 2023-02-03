/**
 * @file 编辑团队
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { FC, useEffect } from 'react';
import { Form } from 'antd';
import Idrawer from '@/antdComponents/iDrawer';
import EditPersonnelTable from './EditPersonnelTable';
import EditPersonnelSearch from './EditPersonnelSearch';
import { useEditPersonnelTable } from './useApiHooks';
import type { EditPersonnelSearchFormParmas } from './EditPersonnelSearch';
import type { OnValuesChange } from '@/antdComponents/iForm';

interface EditPersonnelProps {
	open: boolean;
	onClose: () => void;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnel: FC<EditPersonnelProps> = ({ open, onClose }) => {
	const { editPersonnelTableData, editPersonnelTableLoading, run } = useEditPersonnelTable();

	useEffect(() => {
		if (open) {
			const params = EditPersonnelSearchForm.getFieldsValue();
			run(params);
		}
	}, [open]);

	const [EditPersonnelSearchForm] = Form.useForm<EditPersonnelSearchFormParmas>();

	const onEditPersonnelSearchFrom: OnValuesChange<EditPersonnelSearchFormParmas> = (changedValues, values) => {
		run(values);
	};
	return (
		<>
			<Idrawer title="调整团队" onClose={onClose} open={open} width={800}>
				<EditPersonnelSearch form={EditPersonnelSearchForm} onValuesChange={onEditPersonnelSearchFrom}></EditPersonnelSearch>
				<EditPersonnelTable data={editPersonnelTableData} loading={editPersonnelTableLoading}></EditPersonnelTable>
			</Idrawer>
		</>
	);
};

export default EditPersonnel;
