import React, { useState } from 'react';
import Icard from '@/components/iCard';
import Iform from '@/components/iForm';
import { Form } from 'antd';
import SearchTag, { onChangeType } from '@/components/iSearchTag';
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
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'name2',
			label: '岗位名称',
			rules: [],
			key: getKey(),
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'name4',
			label: '项目组',
			rules: [],
			key: getKey(),
			span: 5,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'select',
			name: 'select',
			label: '推荐单位',
			rules: [],
			key: getKey(),
			span: 5,
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
				{ type: 'onReset', name: '重置' }
			],
			key: getKey(),
			span: 4,
			style: { float: 'right' }
		}
	];
	const [state, setstate] = useState(formList);

	const onFinish = (value: IsearchForm) => {
		console.log(value);
	};

	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	return (
		<>
			<Iform formList={state} form={form} onFinish={onFinish} />
			<SearchTag selectedTags={selectedTags} setSelectedTags={setSelectedTags} tagsData={tagsData}></SearchTag>
		</>
	);
};

export default SearchForm;
const tagsData = [
	'简历待筛选',
	'简历筛选通过',
	'简历已筛选',
	'简历筛选不通过',
	'简历已收藏',
	'今天推送简历',
	'近三日推送简历',
	'近七日推送简历'
];
