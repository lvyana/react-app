import React, { FC, useState } from 'react';
import Imodal, { ImodalProps } from '@/components/iModal';
import Ifrom from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { Form, FormInstance } from 'antd';
import { validatePhoneTwo } from '@/utils/rules';

// 邀约下轮面试
interface Iprops extends ImodalProps {
	form: FormInstance;
}
export const CradEidt: FC<Iprops> = ({ title, visible, confirmLoading, handleOk, handleCancel, form }) => {
	return (
		<div>
			<Imodal
				title={title}
				visible={visible}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}
				width="800px">
				<NextInterviewsForm form={form}></NextInterviewsForm>
			</Imodal>
		</div>
	);
};

// 下一轮面试
const NextInterviewsForm = ({ form }: { form: FormInstance }) => {
	const formList = [
		{
			type: 'rangePicker',
			name: 'rangePicker1',
			label: '可面试日期',
			rules: [
				{
					required: true,
					message: '请选择日期'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		},
		{
			type: 'timeRangePicker',
			name: 'timeRangePicker2',
			label: '可面试时间',
			rules: [
				{
					required: true,
					message: '请选择时间'
				}
			],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		},
		{
			type: 'select',
			name: 'select3',
			label: '面试方式',
			rules: [
				{
					required: true,
					message: '请选择面试方式'
				}
			],
			key: getKey(),
			span: 12,
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
			name: 'select4',
			label: '面试官',
			rules: [
				{
					required: true,
					message: '请选择面试官'
				}
			],
			key: getKey(),
			span: 12,
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
			type: 'input',
			name: 'name5',
			label: '面试官电话',
			rules: [],
			disabled: true,
			key: getKey(),
			span: 12,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'nam6e',
			label: '面试官邮箱',
			disabled: true,
			rules: [],
			key: getKey(),
			span: 12,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'na7me',
			label: '面试对接人',
			rules: [],
			key: getKey(),
			span: 12,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'input',
			name: 'na8me',
			label: '面试对接人电话',
			rules: [{ validator: validatePhoneTwo }],
			key: getKey(),
			span: 12,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'textArea',
			name: 'textArea',
			label: '注意事项',
			rules: [],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];

	const [state, setState] = useState(formList);
	return (
		<div>
			<div style={{ marginBottom: '10px' }}>
				<span style={{ marginLeft: '54px' }}>面试轮次 :</span>
				<span style={{ marginLeft: '10px' }}>一面</span>
			</div>
			<Ifrom formList={state} form={form} />
		</div>
	);
};
