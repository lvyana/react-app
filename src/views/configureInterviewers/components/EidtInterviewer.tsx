import React, { FC, useState } from 'react';
import { Button } from 'antd';
import Ifrom, { FORMtype } from '@/components/iForm';
import getKey from '@/utils/onlyKey';
import { PlusOutlined } from '@ant-design/icons';
import { MODE } from '@/components/iForm/type';

interface Iprops {
	form: FORMtype;
}
const EidtInterviewer: FC<Iprops> = ({ form }) => {
	// 参数
	const formList = [
		{
			type: 'select',
			name: 'select',
			label: '请选择用户作为面试官:',
			placeholder: '请选择用户作为面试官:',
			rules: [],
			key: getKey(),
			span: 24,
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
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		},
		{
			type: 'userDefined',
			name: 'select34',
			key: getKey(),
			span: 24,
			children: (
				<Button type="dashed" style={{ width: '301px', marginLeft: '38px', marginBottom: '24px' }} icon={<PlusOutlined />}>
					添加面试官账号
				</Button>
			)
		},
		{
			type: 'select',
			name: 'select343',
			label: '请选择该面试官关联的项目:',
			placeholder: '请选择该面试官关联的项目:',
			rules: [],
			mode: 'multiple' as MODE,
			key: getKey(),
			span: 24,
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
				labelCol: { span: 24 },
				wrapperCol: { offset: 2, span: 16 }
			}
		}
	];
	const [state, setstate] = useState(formList);

	return (
		<div>
			<Ifrom formList={state} form={form} formLayout={'vertical'} />
		</div>
	);
};

export default EidtInterviewer;
