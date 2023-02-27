/**
 * @file 导入JSON
 * @author ly
 * @createDate 2023年1月12日
 */
import React, { FC } from 'react';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import Iform from '@/antdComponents/iForm';
import type { FormInstance } from 'antd/lib/form/hooks/useForm';
import type { FormTextAreaType } from '@/antdComponents/iForm/type';
import { Rule } from 'antd/es/form';

type ImportJsonProps = {
	open: boolean;
	onOkOrCancel: OnOkOrCancelType;
	confirmLoading: boolean;
	form: FormInstance<importJsonForm>;
};

export type importJsonForm = {
	json: string;
};

type formListParams = [FormTextAreaType];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ImportJson: FC<ImportJsonProps> = ({ form, open, onOkOrCancel, confirmLoading }) => {
	const formList: formListParams = [
		{
			type: 'textArea',
			key: '1',
			label: 'JSON',
			name: 'json',
			rows: 20,
			span: 24,
			rules: [
				{
					validator: (rule: Rule, str: string) => {
						if (typeof str === 'string') {
							try {
								let obj = JSON.parse(str);
								if (typeof obj === 'object' && obj) {
									return Promise.resolve();
								} else {
									return Promise.reject('格式不对');
								}
							} catch (e) {
								return Promise.reject('格式不对');
							}
						}
					}
				}
			],
			layout: { labelCol: { span: 2 }, wrapperCol: { span: 22 } }
		}
	];
	return (
		<Imodal width={1000} title={'导入dnd-json'} open={open} onOkOrCancel={onOkOrCancel} confirmLoading={confirmLoading}>
			<Iform form={form} formList={formList} />
		</Imodal>
	);
};

export default ImportJson;
