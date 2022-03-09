import React, { useState } from 'react';
import Ifrom from '@/components/iForm';
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
			type: 'select',
			name: 'select',
			label: '岗位',
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
			type: 'select',
			name: 'danwei',
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
			type: 'select',
			name: 'danwei',
			label: '候选人状态',
			rules: [],
			key: getKey(),
			span: 5,
			option: [
				{
					name: '进行中',
					value: 'male',
					key: getKey()
				},
				{
					name: '面试通过',
					value: 'female',
					key: getKey()
				},
				{
					name: '被拒绝',
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
			style: { marginLeft: '10px' }
		}
	];
	const [state, setstate] = useState(formList);

	const onFinish = (value: IsearchForm) => {
		console.log(value);
	};

	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	return (
		<>
			<Ifrom formList={state} form={form} onFinish={onFinish} />
			<SearchTag selectedTags={selectedTags} setSelectedTags={setSelectedTags} tagsData={tagsData}></SearchTag>
		</>
	);
};

export default SearchForm;

const tagsData = ['待安排面试', '面试进行中', '面试通过', '面试不通过', '候选人放弃面试', '今日待面试'];
