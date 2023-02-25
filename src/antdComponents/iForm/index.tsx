/**
 * @file 封装表单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, Fragment } from 'react';
import { Form, Row, Col, FormInstance } from 'antd';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';
import FORM_ITEM_MAP from './components/formItemMap';
import type { FormItem } from './type';

export * from './type';
export type IformLayout = 'horizontal' | 'vertical' | 'inline';

export type OnValuesChange<F> = (changedValues: F, values: F) => void;
/**
 * 表单参数
 * @param T 表单渲染数据
 * @param F 表单对象
 * @param formList 表单json
 * @param form 表单实例
 * @param onValuesChange 表单发生变化
 * @param formLayout 表单格式
 * @param self 是否自适应
 */
interface IformProps<T, F> {
	formList: T;
	form: FormInstance<F>;
	onValuesChange?: OnValuesChange<F>;
	formLayout?: IformLayout;
	self?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iform = <T extends FormItem[], F extends object>({
	formList,
	form,
	formLayout = 'horizontal',
	self = false,
	onValuesChange
}: IformProps<T, F>) => {
	const formItem = (item: FormItem) => {
		if (item.type === 'input') {
			return (
				<Form.Item
					name={item.name}
					valuePropName={item.valuePropName}
					label={item.label}
					tooltip={item.tooltip}
					rules={item.rules}
					{...item.layout}
					labelAlign={item.labelAlign}
					getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}>
					{formItemCom(item)}
				</Form.Item>
			);
		}
		return (
			<Form.Item
				name={item.name}
				valuePropName={item.valuePropName}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				{formItemCom(item)}
			</Form.Item>
		);
	};

	const formItemCom = (item: FormItem) => {
		if (item.type === 'input') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'select') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'treeselect') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'cascader') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'datePicker') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'rangePicker') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'timePicker') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'timeRangePicker') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'inputNumber') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'switch') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'button') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'radio') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'checkbox') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'rate') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'textArea') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'seachSelect') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'slider') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'upload') {
			return FORM_ITEM_MAP[item.type](item);
		}
		if (item.type === 'userDefined') {
			return FORM_ITEM_MAP[item.type](item);
		}
	};

	// 尺寸
	const size = useAppSelector(GET_SIZE);

	return (
		<>
			<Form form={form} layout={formLayout} size={size} onValuesChange={onValuesChange}>
				<Row>
					{formList &&
						formList.map((item) => {
							if (item.show === false) return <Fragment key={item.key}></Fragment>;
							return (
								<Col
									{...(self
										? { xxl: { span: item.span }, xl: { span: 6 }, lg: { span: 8 }, md: { span: 12 }, xs: { span: 24 } }
										: { lg: { span: item.span }, md: { span: item.span }, xs: { span: 24 } })}
									key={item.key}>
									{formItem(item)}
								</Col>
							);
						})}
				</Row>
			</Form>
		</>
	);
};

export type { FormInstance };
export default Iform;
