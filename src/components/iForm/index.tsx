/**
 *	@name 实现表单
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC } from 'react';
import { Form, Row, Col, FormInstance } from 'antd';

import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import FORM_ITEM_MAP from './components/formItemMap';
import type { FormItemParam, FormItem } from './type';
export type IformLayout = 'horizontal' | 'vertical' | 'inline';

/**
 * @param formList 表单json
 * @param form 表单实例
 * @param onFinish 表单确认
 * @param formLayout 表单格式
 * @param self 是否自适应
 */
interface IformProps<T, F> {
	formList: T;
	form: FormInstance<F>;
	onFinish?: (type?: string) => void;
	formLayout?: IformLayout;
	self?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iform = <T extends FormItem[], F extends object>({
	formList,
	form,
	onFinish,
	formLayout = 'horizontal',
	self = false
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
		if (item.show === false) return;
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
		if (item.type === 'TimePicker') {
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
			return FORM_ITEM_MAP[item.type](item, onFinish);
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
		if (item.type === 'userDefined') {
			return FORM_ITEM_MAP[item.type](item);
		}
		// return FORM_ITEM_MAP[item.type](item, onFinish);
	};

	// 尺寸
	const size = useAppSelector(GET_SIZE);

	return (
		<>
			<Form form={form} layout={formLayout} size={size as SizeType}>
				<Row>
					{formList &&
						formList.map((item) => {
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

export type { FormInstance, FormItemParam, FormItem };
export default Iform;
