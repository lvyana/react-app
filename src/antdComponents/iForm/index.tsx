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
import type {
	AlonePicker,
	BothPicker,
	ButtonType,
	CascaderType,
	CheckboxType,
	FormItem,
	InputNumberType,
	InputType,
	RadioType,
	RateType,
	SeachSelectType,
	SelectType,
	SliderSingleType,
	SliderType,
	SwitchType,
	TextAreaType,
	TreeselectType,
	UploadType,
	UserDefinedType
} from './type';
import type { formRadioOptionsParams } from './components/Iradio';
import type { CheckboxOptionType } from 'antd/lib/checkbox/Group';
import { DefaultOptionType } from 'antd/es/select';
import { BaseOptionType } from 'antd/es/cascader';

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
	formList: FormItemAndCom<T>;
	form: FormInstance<F>;
	onValuesChange?: OnValuesChange<F>;
	formLayout?: IformLayout;
	self?: boolean;
}

type FormItemAndCom<T> = {
	[K in keyof T]: T[K] & FormItem; // keyof T 返回联合类型 in 再遍历该联合类型
};

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
			const { value, label, disabled, allowClear, onChange, onBlur, placeholder, maxLength, style } = item as InputType;
			return FORM_ITEM_MAP[item.type]({ value, label, disabled, allowClear, onChange, onBlur, placeholder, maxLength, style });
		}

		if (item.type === 'select') {
			const { label, disabled, allowClear, onChange, mode, placeholder, option, fieldNames, style, children } =
				item as SelectType<DefaultOptionType>;
			return FORM_ITEM_MAP[item.type]({
				label,
				disabled,
				allowClear,
				onChange,
				mode,
				placeholder,
				option,
				fieldNames,
				style,
				children
			});
		}

		if (item.type === 'treeselect') {
			const { label, disabled, allowClear, onChange, placeholder, option, checkbox, fieldNames, style, children } =
				item as TreeselectType<DefaultOptionType>;
			return FORM_ITEM_MAP[item.type]({
				label,
				disabled,
				allowClear,
				onChange,
				placeholder,
				option,
				checkbox,
				fieldNames,
				style,
				children
			});
		}

		if (item.type === 'cascader') {
			const { label, validateTrigger, disabled, allowClear, onChange, placeholder, option, fieldNames, style, children } =
				item as CascaderType<BaseOptionType>;
			return FORM_ITEM_MAP[item.type]({
				label,
				validateTrigger,
				disabled,
				allowClear,
				onChange,
				placeholder,
				option,
				fieldNames,
				style,
				children
			});
		}

		if (item.type === 'datePicker') {
			const { disabled, allowClear, onChange, placeholder, style, disabledDate, children } = item as AlonePicker;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, style, disabledDate, children });
		}

		if (item.type === 'rangePicker') {
			const { disabled, allowClear, onChange, placeholder, style, disabledDate, children } = item as BothPicker;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, style, disabledDate, children });
		}

		if (item.type === 'timePicker') {
			const { disabled, allowClear, onChange, placeholder, style, disabledDate, children } = item as AlonePicker;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, style, disabledDate, children });
		}

		if (item.type === 'timeRangePicker') {
			const { disabled, allowClear, onChange, placeholder, style, disabledDate, children } = item as BothPicker;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, style, disabledDate, children });
		}

		if (item.type === 'inputNumber') {
			const { label, disabled, allowClear, onChange, placeholder, checkbox, style, children } = item as InputNumberType;
			return FORM_ITEM_MAP[item.type]({ label, disabled, allowClear, onChange, placeholder, checkbox, style, children });
		}

		if (item.type === 'switch') {
			const { disabled, allowClear, onChange, placeholder, style, children } = item as SwitchType;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, style, children });
		}

		if (item.type === 'button') {
			const { option, style, children, onClick } = item as ButtonType<unknown>;
			return FORM_ITEM_MAP[item.type]({ option, style, children, onClick });
		}

		if (item.type === 'radio') {
			const { disabled, allowClear, onChange, option, style, children, optionType } = item as RadioType<formRadioOptionsParams>;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, option, style, children, optionType });
		}

		if (item.type === 'checkbox') {
			const { disabled, allowClear, onChange, option, style, children } = item as CheckboxType<CheckboxOptionType>;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, option, style, children });
		}

		if (item.type === 'rate') {
			const { disabled, allowClear, onChange, placeholder, option, style, children } = item as RateType<string>;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, placeholder, option, style, children });
		}

		if (item.type === 'textArea') {
			const { label, disabled, allowClear, onChange, maxLength, placeholder, style, children, rows } = item as TextAreaType;
			return FORM_ITEM_MAP[item.type]({ label, disabled, allowClear, onChange, maxLength, placeholder, style, children, rows });
		}

		if (item.type === 'seachSelect') {
			const { label, disabled, allowClear, mode, placeholder, option, checkbox, fieldNames, style, handleSearch, children } =
				item as SeachSelectType<DefaultOptionType>;
			return FORM_ITEM_MAP[item.type]({
				label,
				disabled,
				allowClear,
				mode,
				placeholder,
				option,
				checkbox,
				fieldNames,
				style,
				handleSearch,
				children
			});
		}

		if (item.type === 'slider') {
			const { disabled, allowClear, onChange, range, style, max, min } = item as SliderType & SliderSingleType;
			return FORM_ITEM_MAP[item.type]({ disabled, allowClear, onChange, range, style, max, min });
		}

		if (item.type === 'upload') {
			const { name, onChange, mode, style, children, multiple, action } = item as UploadType;
			return FORM_ITEM_MAP[item.type]({ name, onChange, mode, style, children, multiple, action });
		}

		if (item.type === 'userDefined') {
			const { children } = item as UserDefinedType;
			return FORM_ITEM_MAP[item.type]({ children });
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
