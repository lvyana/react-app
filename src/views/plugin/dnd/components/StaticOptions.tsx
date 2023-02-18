/**
 * @file 静态数据
 * @author ly
 * @createDate 2023年2月16日
 */
import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

interface Options {
	value: string;
	lable: string;
	id: number;
}

type GetNewOptionsParams = {
	options: Options[];
	key: 'value' | 'lable';
	value: string;
	id: number;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const StaticOptions: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Received values of form:', values);
	};

	const [options, setoptions] = useState([{ value: '', lable: '', id: 0 }]);

	const add = (id: number) => {
		const addOption = options.find((option) => option.id === id);
		if (addOption) {
			setoptions([...options, { ...addOption, id: id + 1 }]);
		}
	};

	const subtract = (id: number) => {
		if (options.length === 1) return;
		const subtractOption = options.filter((option) => option.id !== id);
		setoptions(subtractOption);
	};

	const lableChange = (value: React.ChangeEvent<HTMLInputElement>, id: number) => {
		console.log(value.target.value);
		const newOptions = getNewOptions({ options, key: 'lable', value: value.target.value, id });
		setoptions(newOptions);
	};

	const valueChange = (value: React.ChangeEvent<HTMLInputElement>, id: number) => {
		const newOptions = getNewOptions({ options, key: 'value', value: value.target.value, id });
		setoptions(newOptions);
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
							<Input placeholder="lable" value={option.lable} onChange={(value) => lableChange(value, option.id)} />
						</Col>
						<Col span={8}>
							<Input placeholder="value" value={option.value} onChange={(value) => valueChange(value, option.id)} />
						</Col>
						<Col span={4}>
							<Button type="dashed" onClick={() => add(option.id)} block icon={<PlusOutlined />}></Button>
						</Col>
						<Col span={4}>
							<Button type="dashed" onClick={() => subtract(option.id)} block icon={<MinusOutlined />}></Button>
						</Col>
					</Row>
				);
			})}
		</>
	);
};

export default StaticOptions;
