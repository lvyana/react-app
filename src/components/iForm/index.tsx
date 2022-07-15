import React, { FC, useState } from 'react';
import {
	Form,
	Input,
	Button,
	Row,
	Col,
	Select,
	TreeSelect,
	Cascader,
	DatePicker,
	InputNumber,
	Switch,
	Radio,
	Checkbox,
	Rate,
	FormInstance,
	TimePicker
} from 'antd';
import IconFont from '@/utils/iconfont';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { FormItemParam } from './type';

const { RangePicker } = DatePicker;
const { SHOW_PARENT } = TreeSelect;

export type IformLayout = 'horizontal' | 'vertical' | 'inline';
export type { FormInstance, FormItemParam };

/**
 * @param formList 表单json
 * @param form 表单实例
 * @param onFinish 表单确认
 * @param formLayout 表单格式
 * @param self 是否自适应
 */
interface IProps {
	formList?: FormItemParam[];
	form: FormInstance;
	onFinish?: (type?: string) => void;
	formLayout?: IformLayout;
	self?: boolean;
}
/**
 *
 * @param PropsType
 * @returns 表单组件
 */
const Iform: FC<IProps> = ({ formList, form, onFinish, formLayout = 'horizontal', self = false }) => {
	// input
	const formInputItem = (item: FormItemParam) => {
		return (
			<Form.Item
				label={item.label}
				tooltip={item.tooltip}
				name={item.name}
				validateTrigger={item.validateTrigger}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}
				getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}>
				<Input
					onChange={item.onChange}
					onBlur={item.onBlur}
					placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
					disabled={item.disabled}
					allowClear
				/>
			</Form.Item>
		);
	};
	// 文本框
	const formInputTextArea = (item: FormItemParam) => {
		return (
			<Form.Item
				label={item.label}
				tooltip={item.tooltip}
				name={item.name}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<Input.TextArea
					showCount={!!item.maxLength}
					onChange={item.onChange}
					placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
					maxLength={item.maxLength}
					allowClear
				/>
			</Form.Item>
		);
	};
	// Select
	const formSelect = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<Select
					showSearch
					allowClear
					onChange={item.onChange}
					fieldNames={item.fieldNames}
					options={item.option}
					mode={item.mode}
					placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
					optionFilterProp={item.fieldNames?.label}
					filterOption={(input, option) =>
						option[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
					// filterSort={(optionA, optionB) =>
					// 	optionA[item.fieldNames?.label ? item.fieldNames?.label : 'label']
					// 		.toLowerCase()
					// 		.localeCompare(optionB[item.fieldNames?.label ? item.fieldNames?.label : 'label'].toLowerCase())
					// }
				></Select>
			</Form.Item>
		);
	};

	// 远程搜索
	const formSeachSelect = (item: FormItemParam) => {
		return (
			<Form.Item name={item.name} label={item.label} tooltip={item.tooltip} rules={item.rules} {...item.layout}>
				<Select
					style={{ width: '100%' }}
					showSearch
					allowClear
					// labelInValue={true}
					placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
					defaultActiveFirstOption={false}
					showArrow={false}
					filterOption={false}
					onSearch={item.handleSearch}
					options={item.option}
					// fieldNames={{ label: 'name', value: 'id' }}
					notFoundContent={null}></Select>
			</Form.Item>
		);
	};

	// 树形下拉
	const formTreeSelect = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<TreeSelect
					treeData={item.option}
					showCheckedStrategy={SHOW_PARENT}
					treeCheckable={item.checkbox}
					fieldNames={item.fieldNames}
					allowClear
					onChange={item.onChange}
					placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
				/>
			</Form.Item>
		);
	};
	// 联级
	const formCascader = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<Cascader
					fieldNames={item.fieldNames}
					options={item.option}
					allowClear
					onChange={item.onChange}
					placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
				/>
			</Form.Item>
		);
	};
	// 日期
	const formDatePicker = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />
			</Form.Item>
		);
	};
	// 区间日期
	const formRangePicker = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />
			</Form.Item>
		);
	};
	// 时间
	const formTimePicker = (item: FormItemParam) => {
		const format = 'HH:mm';
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<TimePicker minuteStep={15} onChange={item.onChange} format={format} disabledDate={item.disabledDate} style={{ width: '100%' }} />
			</Form.Item>
		);
	};
	// 时间区间
	const formTimeRangePicker = (item: FormItemParam) => {
		const format = 'HH:mm';
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<TimePicker.RangePicker
					onChange={item.onChange}
					minuteStep={15}
					format={format}
					disabledDate={item.disabledDate}
					style={{ width: '100%' }}
				/>
			</Form.Item>
		);
	};
	// 数字
	const formInputNumber = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				<InputNumber min={0} onChange={item.onChange} disabled={item.disabled} />
			</Form.Item>
		);
	};
	// 是否
	const formSwitch = (item: FormItemParam) => {
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				valuePropName="checked"
				{...item.layout}
				labelAlign={item.labelAlign}>
				<Switch onChange={item.onChange} />
			</Form.Item>
		);
	};

	// 图标单选
	const formRadioIcon = (item: FormItemParam) => {
		return (
			<Form.Item name={item.name} label={item.label} tooltip={item.tooltip} rules={item.rules} {...item.layout}>
				<Radio.Group onChange={item.onChange}>
					{item.option &&
						item.option.map((value) => {
							return (
								<Radio key={value.key} value={value.value}>
									<IconFont type={value.name} />
								</Radio>
							);
						})}
				</Radio.Group>
			</Form.Item>
		);
	};
	// 单选
	const formRadio = (item: FormItemParam) => {
		return (
			<Form.Item name={item.name} label={item.label} tooltip={item.tooltip} rules={item.rules} {...item.layout}>
				<Radio.Group onChange={item.onChange}>
					{item.option &&
						item.option.map((value) => {
							return (
								<Radio key={value.key} value={value.value}>
									{value.name}
								</Radio>
							);
						})}
				</Radio.Group>
			</Form.Item>
		);
	};
	// 多选
	const formCheckbox = (item: FormItemParam) => {
		return (
			<Form.Item name={item.name} label={item.label} tooltip={item.tooltip} rules={item.rules} {...item.layout}>
				<Checkbox.Group options={item.option} onChange={item.onChange} />
			</Form.Item>
		);
	};
	// 评分
	const formRate = (item: FormItemParam) => {
		return (
			<Form.Item name={item.name} label={item.label} tooltip={item.tooltip} rules={item.rules} {...item.layout}>
				<Rate tooltips={item.option} onChange={item.onChange} />
			</Form.Item>
		);
	};

	//按钮
	const formButton = (item: FormItemParam) => {
		return (
			<Form.Item {...item.layout}>
				<Row style={{ ...item.style }} wrap={false}>
					{item.option?.map((value, i) => {
						return (
							<Col key={i} className="ml10">
								<Button
									type={value.BTtype}
									onClick={() => onFinish && onFinish(value.type)}
									icon={value.iconType && <IconFont type={value.iconType} />}>
									{value.name}
								</Button>
							</Col>
						);
					})}
				</Row>
			</Form.Item>
		);
	};

	// 自定义组件
	const userDefined = (item: FormItemParam) => {
		return item.children;
	};

	const formItem = (item: FormItemParam) => {
		if (item.show === false) return;
		switch (item.type) {
			case 'input':
				return formInputItem(item);
			case 'select':
				return formSelect(item);
			case 'treeselect':
				return formTreeSelect(item);
			case 'cascader':
				return formCascader(item);
			case 'datePicker':
				return formDatePicker(item);
			case 'rangePicker':
				return formRangePicker(item);
			case 'TimePicker':
				return formTimePicker(item);
			case 'timeRangePicker':
				return formTimeRangePicker(item);
			case 'inputNumber':
				return formInputNumber(item);
			case 'switch':
				return formSwitch(item);
			case 'button':
				return formButton(item);
			case 'radioIcon':
				return formRadioIcon(item);
			case 'radio':
				return formRadio(item);
			case 'checkbox':
				return formCheckbox(item);
			case 'rate':
				return formRate(item);
			case 'textArea':
				return formInputTextArea(item);
			case 'seachSelect':
				return formSeachSelect(item);
			case 'userDefined':
				return userDefined(item);
			default:
				return <div style={{ color: 'red' }}>error:调用组件错误,检查此项数据是否正确</div>;
		}
	};

	// 尺寸
	const size = useAppSelector(GET_SIZE);

	return (
		<div>
			<Form form={form} layout={formLayout} size={size as SizeType}>
				<Row>
					{formList &&
						formList.map((item: FormItemParam, i) => {
							return (
								<Col
									{...(self
										? {
												xxl: { span: item.span },
												xl: { span: 6 },
												lg: { span: 8 },
												md: { span: 12 },
												xs: { span: 24 }
										  }
										: {
												lg: { span: item.span },
												md: { span: item.span },
												xs: { span: 24 }
										  })}
									key={item.key}>
									{formItem(item)}
								</Col>
							);
						})}
				</Row>
			</Form>
		</div>
	);
};
export default Iform;
