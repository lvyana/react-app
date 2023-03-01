/**
 * @file 创建按钮
 * @author ly
 * @createDate 2023年2月25日
 */
import React, { FC, useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { formButton } from '@/antdComponents/iForm/components/Ibutton';
import { formInputItem, formInputNumber } from '@/antdComponents/iForm/components/Iinput';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import type { ButtonOptionsParams } from '../EditForm';
import { formSelect } from '@/antdComponents/iForm/components/Iselect';

/**
 * @param options 集合
 * @param key 对应key值
 * @param value 修改内容
 * @param id 唯一id
 */
type GetNewOptionsParams = {
	options: ButtonOptionsParams[];
	key: 'name' | 'type' | 'btType' | 'span' | 'hasPermiss' | 'iconFont';
	value: number | string | null;
	id: string;
};

/**
 * @param options 静态数据
 * @param updateOptions 更新回调
 */
interface CreatButtonProps {
	options: ButtonOptionsParams[];
	updateOptions: (data: ButtonOptionsParams[]) => void;
}

// 按钮类型
type ButtonTypeOptionsParams = {
	type: string;
	value: string;
};
const BUTTON_TYPE_OPTIONS = [
	{ type: 'primary', value: 'primary' },
	{ type: 'ghost', value: 'ghost' },
	{ type: 'dashed', value: 'dashed' },
	{ type: 'link', value: 'link' },
	{ type: 'text', value: 'text' },
	{ type: 'default', value: 'default' }
];
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const CreatButton: FC<CreatButtonProps> = ({ options, updateOptions }) => {
	// 添加表单行
	const add = (id: string) => {
		const addOption = options.find((option) => option.id === id);
		if (addOption) {
			updateOptions([...options, { ...addOption, id: uuidv4() }]);
		}
	};

	// 删除表单行
	const subtract = (id: string) => {
		if (options.length === 1) return;
		const subtractOption = options.filter((option) => option.id !== id);
		updateOptions(subtractOption);
	};

	const onChange = (value: React.ChangeEvent<HTMLInputElement>, key: GetNewOptionsParams['key'], id: string) => {
		const newOptions = getNewOptions({ options, key, value: value.target.value, id });
		updateOptions(newOptions);
	};

	const onInputNumberChange = (value: number | string | null, key: GetNewOptionsParams['key'], id: string) => {
		const newOptions = getNewOptions({ options, key, value: value, id });
		updateOptions(newOptions);
	};

	const onSelectChange = (value: string | number, key: GetNewOptionsParams['key'], id: string) => {
		const newOptions = getNewOptions({ options, key, value: value, id });
		updateOptions(newOptions);
	};

	const getNewOptions = ({ options, key, value, id }: GetNewOptionsParams) => {
		return options.map((option) => {
			if (option.id === id) {
				return { ...option, [key]: value };
			}
			return option;
		});
	};
	return (
		<>
			{options.map((option, i) => {
				return (
					<Row key={option.id} className="m-4" gutter={16}>
						<Col span={12}>
							{formInputItem({
								placeholder: '名字',
								value: option.name,
								onChange: (value) => onChange(value, 'name', option.id)
							})}
						</Col>
						<Col span={12}>
							{formInputItem({
								placeholder: '标识类型',
								value: option.type,
								onChange: (value) => onChange(value, 'type', option.id)
							})}
						</Col>
						<Col span={12}>
							{formSelect<ButtonTypeOptionsParams>({
								placeholder: '组件类型',
								value: option.btType,
								option: BUTTON_TYPE_OPTIONS,
								fieldNames: {
									label: 'type',
									value: 'value'
								},
								onChange: (value) => onSelectChange(value, 'btType', option.id)
							})}
						</Col>
						<Col span={12}>
							{formInputItem({
								placeholder: '权限标识',
								value: option.hasPermiss,
								onChange: (value) => onChange(value, 'hasPermiss', option.id)
							})}
						</Col>
						<Col span={12}>
							{formInputItem({
								placeholder: '图标',
								value: option.iconFont,
								onChange: (value) => onChange(value, 'iconFont', option.id)
							})}
						</Col>
						<Col span={12}>
							{formInputNumber({
								placeholder: 'span',
								value: option.span,
								onChange: (value) => onInputNumberChange(value, 'span', option.id)
							})}
						</Col>
						<Col span={12}>
							{formButton({
								option: [{ name: '', type: 'add', block: true, btType: 'dashed', iconFont: <PlusOutlined />, span: 24 }],
								onClick: () => {
									add(option.id);
								}
							})}
							{/* <Button type="dashed" block icon={<PlusOutlined />}></Button> */}
						</Col>
						<Col span={12}>
							{formButton({
								option: [
									{
										name: '',
										type: 'subtract',
										block: true,
										btType: 'dashed',
										iconFont: <MinusOutlined />,
										span: 24
									}
								],
								onClick: () => {
									subtract(option.id);
								}
							})}
							{/* <Button type="dashed" onClick={() => subtract(option.id)} block icon={<MinusOutlined />}></Button> */}
						</Col>
					</Row>
				);
			})}
		</>
	);
};

export default CreatButton;
