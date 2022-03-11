import React, { FC } from 'react';
import { Button } from 'antd';
import getKey from '@/utils/onlyKey';
import Ifrom, { FORMtype } from '@/components/iForm';

interface Iprops {
	onBulkOperation: () => void;
}
// 批量操作
export const BulkOperation: FC<Iprops> = ({ onBulkOperation }) => {
	return (
		<Button type="primary" onClick={onBulkOperation}>
			批量操作
		</Button>
	);
};

// 关闭本轮面试
export const CloseRound = ({ roundForm }: { roundForm: FORMtype }) => {
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
			<Ifrom formList={formList} form={roundForm} />
		</>
	);
};
