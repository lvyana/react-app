import React, { FC, useState } from 'react';
import { Button, Form, Descriptions } from 'antd';
import Iform, { FormInstance } from '@/components/iForm';
import Imodal, { ImodalProps } from '@/components/iModal';
import getKey from '@/utils/onlyKey';
import { FORMITEM } from '@/components/iForm/type';

interface Iprops {
	onBulkOperation: () => void;
	submitBulkOperation: () => void;
	isBulk: boolean;
	bulkOperationLoading: boolean;
}
// 批量操作
export const BulkOperation: FC<Iprops> = ({ onBulkOperation, submitBulkOperation, isBulk, bulkOperationLoading }) => {
	return isBulk ? (
		<Button type="primary" onClick={onBulkOperation}>
			批量操作
		</Button>
	) : (
		<>
			<Button onClick={onBulkOperation} className="mr10">
				取消
			</Button>
			<Button type="primary" loading={bulkOperationLoading} onClick={submitBulkOperation}>
				提交批量操作
			</Button>
		</>
	);
};

// 关闭本轮面试
export const CloseRound = ({ roundForm }: { roundForm: FormInstance }) => {
	// 参数
	const formList = [
		{
			type: 'textArea',
			name: 'textArea',
			label: '关闭理由',
			rules: [{ required: true, message: '请输入关闭理由' }],
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
		<>
			<Iform formList={formList} form={roundForm} />
		</>
	);
};

// 确认最终面试结果
interface ConfirmInterviewResultsType {
	visibleResults: boolean;
	setVisibleResults: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ConfirmInterviewResults: FC<ConfirmInterviewResultsType> = ({ visibleResults, setVisibleResults }) => {
	//表单
	const [form] = Form.useForm();

	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		try {
			// 校验表单
			const values = await form.validateFields();
			setConfirmLoading(true);
			setTimeout(() => {
				form.resetFields(); //重置表单数据
				setConfirmLoading(false);
				setVisibleResults(false);
			}, 2000);
		} catch (error) {}
	};

	const handleCancel = () => {
		form.resetFields(); //重置表单数据
		setVisibleResults(false);
	};
	return (
		<Imodal
			title="确认最终面试结果"
			visible={visibleResults}
			confirmLoading={confirmLoading}
			handleOk={handleOk}
			handleCancel={handleCancel}
			width="600px">
			<ConfirmInterviewResult form={form}></ConfirmInterviewResult>
		</Imodal>
	);
};
const ConfirmInterviewResult = ({ form }: { form: FormInstance }) => {
	// 参数
	const addFormList = [
		{
			type: 'select',
			name: 'select',
			label: '面试结果',
			rules: [],
			key: getKey(),
			span: 24,

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
				labelCol: { span: 4 },
				wrapperCol: { span: 20 }
			}
		},
		{
			type: 'select',
			name: 'selec2t',
			label: '面试定级',
			rules: [],
			key: getKey(),
			span: 24,

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
	const [state, setstate] = useState<FORMITEM[]>(addFormList);
	// 确认面试结果
	return (
		<>
			<Descriptions>
				<Descriptions.Item label="候选人">Zhou</Descriptions.Item>
				<Descriptions.Item label="岗位名称">数据应用-测试</Descriptions.Item>
				<Descriptions.Item label="岗位职级">初级-中级</Descriptions.Item>
			</Descriptions>
			<Iform formList={state} form={form} />
		</>
	);
};
