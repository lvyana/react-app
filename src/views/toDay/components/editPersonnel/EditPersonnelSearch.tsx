/**
 * @file 编辑团队搜索
 * @author ly
 * @createDate 2022年11月20日
 */
import React, { FC } from 'react';
import Iform, { OnValuesChange, FormInputType } from '@/antdComponents/iForm';
import type { FormInstance } from 'antd';

type FormListParams = [FormInputType];

export interface EditPersonnelSearchFormParmas {
	name: string;
}
interface EditPersonnelSearchProps {
	form: FormInstance;
	onValuesChange: OnValuesChange<EditPersonnelSearchFormParmas>;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const EditPersonnelSearch: FC<EditPersonnelSearchProps> = ({ form, onValuesChange }) => {
	const formList: FormListParams = [
		{
			type: 'input',
			label: '姓名',
			name: 'name',
			key: '1',
			span: 12,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];

	return <Iform form={form} formList={formList} onValuesChange={onValuesChange}></Iform>;
};

export default EditPersonnelSearch;
