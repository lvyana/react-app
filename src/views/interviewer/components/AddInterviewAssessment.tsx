import React, { FC, useState, useEffect } from 'react';
import Imodal, { ImodalProps } from '@/components/iModal';
import Iform, { FormInstance } from '@/components/iForm';
import { Form, Rate } from 'antd';
import { Candidate, Jobs } from './InterviewRecords';
import getKey from '@/utils/onlyKey';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

interface Iprops {
	visibleAssessment: boolean;
	setVisibleAssessment: React.Dispatch<React.SetStateAction<boolean>>;
}
const customIcons = [<FrownOutlined />, <FrownOutlined />, <MehOutlined />, <SmileOutlined />, <SmileOutlined />];
const desc = ['很差', '比较差', '一般', '还不错', '很好'];

const AddInterviewAssessment: FC<Iprops> = ({ visibleAssessment, setVisibleAssessment }) => {
	const [title, setTitle] = useState('填写本轮面试评价');

	const [confirmLoading, setConfirmLoading] = useState(false);
	//表单
	const [form] = Form.useForm();

	const handleOk = async () => {
		console.log(form.getFieldsValue());
		try {
			// 校验表单
			const values = await form.validateFields();
			setConfirmLoading(true);
			setTimeout(() => {
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisibleAssessment(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisibleAssessment(false);
	};

	// 印象打分
	const [decValue, setDecValue] = useState(3);

	const onRateChange = (value: number) => {
		setDecValue(value);
		form.setFieldsValue({ date23: value });
	};
	const formList = [
		{
			type: 'select',
			name: 'select4',
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
			name: 'select43',
			label: '面试结果',
			rules: [
				{
					required: true,
					message: '请选择面试结果'
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
			label: '面试官',
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
			type: 'datePicker',
			name: 'date',
			label: '面试日期',
			rules: [
				{
					required: true,
					message: '请选择面试结果'
				}
			],
			key: getKey(),
			span: 12,
			layout: {
				labelCol: { span: 8 },
				wrapperCol: { span: 16 }
			}
		},
		{
			type: 'userDefined',
			name: 'date23',
			key: getKey(),
			span: 24,
			children: (
				<Form.Item
					name="date23"
					label="印象打分"
					rules={[{ required: true, message: '请选择印象打分' }]}
					{...{
						labelCol: { span: 4 },
						wrapperCol: { span: 20 }
					}}>
					<div>
						<Rate
							onChange={onRateChange}
							defaultValue={decValue}
							character={({ index }: { index: number }) => customIcons[index]}
						/>
						{decValue ? <span className="ant-rate-text">{desc[decValue - 1]}</span> : ''}
					</div>
				</Form.Item>
			)
		},
		{
			type: 'textArea',
			name: 'textArea',
			label: '面试评价',
			rules: [{ required: true, message: '请输入面试评价' }],
			key: getKey(),
			span: 24,
			maxLength: 150,
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		}
	];

	return (
		<div>
			{/* 填写本轮面试评价 */}
			<Imodal
				title={title}
				visible={visibleAssessment}
				confirmLoading={confirmLoading}
				handleOk={handleOk}
				handleCancel={handleCancel}
				width="600px">
				<Candidate></Candidate>
				<Jobs></Jobs>
				<div className="ant-descriptions-title mb10 mt10">面试评价</div>
				<Iform formList={formList} form={form} />
			</Imodal>
		</div>
	);
};

export default AddInterviewAssessment;
