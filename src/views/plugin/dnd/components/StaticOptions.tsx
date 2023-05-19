/**
 * @file 静态数据
 * @author ly
 * @createDate 2023年2月16日
 */
import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { formInputItem } from '@/antdComponents/iForm/components/Iinput';
import { formButton } from '@/antdComponents/iForm/components/Ibutton';
import { v4 as uuidv4 } from 'uuid';
import type { Options } from '../itemTypes';
/**
 * @param options 集合
 * @param key 对应key值
 * @param value 修改内容
 * @param id 唯一id
 */
type GetNewOptionsParams = {
	options: Options[];
	key: 'value' | 'label';
	value: string;
	id: string;
};

/**
 * @param options 静态数据
 * @param updateOptions 更新回调
 */
interface StaticOptionsProps {
	options: Options[];
	updateOptions: (data: Options[]) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const StaticOptions: React.FC<StaticOptionsProps> = ({ options, updateOptions }) => {
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

	// label内容
	const labelChange = (value: React.ChangeEvent<HTMLInputElement>, id: string) => {
		const newOptions = getNewOptions({ options, key: 'label', value: value.target.value, id });
		updateOptions(newOptions);
	};

	// value内容
	const valueChange = (value: React.ChangeEvent<HTMLInputElement>, id: string) => {
		const newOptions = getNewOptions({ options, key: 'value', value: value.target.value, id });
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
					<Row key={option.id}>
						<Col span={8}>
							{formInputItem({
								placeholder: 'label',
								value: option.label,
								onChange: (value) => labelChange(value, option.id)
							})}
							{/* <Input placeholder="label" value={option.label} onChange={(value) => labelChange(value, option.id)} /> */}
						</Col>
						<Col span={8}>
							{formInputItem({
								placeholder: 'value',
								value: option.value,
								onChange: (value) => valueChange(value, option.id)
							})}
							{/* <Input placeholder="value" value={option.value} onChange={(value) => valueChange(value, option.id)} /> */}
						</Col>
						<Col span={4}>
							{formButton({
								option: [{ name: '', type: 'add', block: true, btnType: 'dashed', iconFont: <PlusOutlined />, span: 24 }],
								onClick: () => {
									add(option.id);
								}
							})}
							{/* <Button type="dashed" block icon={<PlusOutlined />}></Button> */}
						</Col>
						<Col span={4}>
							{formButton({
								option: [
									{
										name: '',
										type: 'subtract',
										block: true,
										btnType: 'dashed',
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

export default StaticOptions;
