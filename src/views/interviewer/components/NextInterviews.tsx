import React, { FC, useState, useEffect } from 'react';
import Imodal, { ImodalProps } from '@/components/iModal';
import Iform from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { FormInstance, Row, Col } from 'antd';
import { validatePhoneTwo } from '@/utils/rules';
import { TimeCenter, IselectedAllTagsType } from './InterviewTime';
import Itransition from '@/components/iTransition';

// 邀约面试
interface Iprops extends ImodalProps {
	form: FormInstance;
}
const NextInterviews: FC<Iprops> = ({ title, visible, confirmLoading, handleOk, handleCancel, form }) => {
	// 全部选中数据
	const [selectedAllTags, setSelectedAllTags] = useState<IselectedAllTagsType[]>([
		{
			day: '2022-03-16',
			tags: ['12:00-12:30', '12:30-13:00', '13:00-13:30']
		},
		{
			day: '2022-03-17',
			tags: ['12:00-12:30', '12:30-13:00']
		}
	]);

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
				<Itransition title="查看可面试时间" minHeight="0px" maxHeight="321px">
					<TimeCenter selectedAllTags={selectedAllTags} setSelectedAllTags={setSelectedAllTags}></TimeCenter>
				</Itransition>
			</Imodal>
		</div>
	);
};

export default NextInterviews;

// 邀约面试
const NextInterviewsForm = ({ form }: { form: FormInstance }) => {
	const formList = [
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

			fieldNames: {
				label: 'name',
				value: 'value'
			},
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

			fieldNames: {
				label: 'name',
				value: 'value'
			},
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
			type: 'input',
			name: 'name534',
			label: '面试地址',
			rules: [],
			key: getKey(),
			span: 24,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
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
			<Iform formList={state} form={form} />
		</div>
	);
};
