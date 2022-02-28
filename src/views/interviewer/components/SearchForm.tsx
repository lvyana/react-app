import React, { useState } from 'react';
import Icard from '@/components/iCard';
import Ifrom from '@/components/iForm';
import { Form } from 'antd';
import getKey from '@/utils/onlyKey';

interface IsearchForm {
	name: string;
	select: string;
	danwei: string;
}
const SearchForm = () => {
	//表单
	const [form] = Form.useForm();
	// 参数
	const formList = [
		{
			type: 'input',
			name: 'name',
			label: '姓名',
			rules: [],
			key: getKey(),
			span: 6,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'select',
			label: '岗位',
			rules: [],
			key: getKey(),
			span: 6,
			option: [
				{
					name: 'male',
					value: 'male',
					key: getKey()
				},
				{
					name: 'female',
					value: 'female',
					key: getKey()
				}
			],
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'danwei',
			label: '推荐单位',
			rules: [],
			key: getKey(),
			span: 6,
			option: [
				{
					name: 'male',
					value: 'male',
					key: getKey()
				},
				{
					name: 'female',
					value: 'female',
					key: getKey()
				}
			],
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},

		{
			type: 'button',
			name: 'button',
			option: [
				{ type: 'submit', name: '搜索' },
				{ type: 'onReset', name: '重置' },
				{ type: 'expand', name: '重置' }
			],
			key: getKey(),
			span: 6,
			style: { marginLeft: '10px' }
		}
	];
	const [state, setstate] = useState(formList);

	const onFinish = (value: IsearchForm) => {
		console.log(value);
	};
	return (
		<div>
			<Icard styles={{ padding: '16px 16px 0' }}>
				<Ifrom formList={state} form={form} onFinish={onFinish} />
			</Icard>
		</div>
	);
};

export default SearchForm;
