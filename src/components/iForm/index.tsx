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
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { FORMITEM } from './type';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { SHOW_PARENT } = TreeSelect;

export type IformLayout = 'horizontal' | 'vertical' | 'inline';
export type FORMtype = FormInstance;
interface PropsType {
	formList?: FORMITEM[];
	form: FORMtype;
	onFinish?: ((values?: any) => void) | undefined;
	setReset?: () => void;
	num?: number;
	setNum?: React.Dispatch<React.SetStateAction<number>>;
	formLayout?: IformLayout;
}
const Ifrom: FC<PropsType> = ({ formList, form, onFinish, setReset, num, formLayout = 'horizontal' }) => {
	// const onFinish = (values: object) => {
	// 	console.log('Success:', values);
	// };
	const [expand, setExpand] = useState(false);
	const [showNum, setShowNum] = useState(num);
	const onReset = () => {
		form.resetFields();
		setReset && setReset();
	};

	// input
	const formInputItem = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item label={item.label} name={item.name} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Input
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
						disabled={item.disabled}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 文本框
	const formInputTextArea = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item label={item.label} name={item.name} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Input.TextArea
						showCount={item.maxLength ? true : false}
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
						maxLength={item.maxLength}
					/>
				</Form.Item>
			</Col>
		);
	};
	// Select
	const formSelect = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Select
						showSearch
						allowClear
						onChange={item.onChange}
						fieldNames={item.fieldNames}
						options={item.option}
						mode={item.mode}
						placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}></Select>
				</Form.Item>
			</Col>
		);
	};
	// 树形下拉
	const formTreeSelect = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
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
			</Col>
		);
	};
	// 联级
	const formCascader = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<Cascader
						fieldNames={item.fieldNames}
						options={item.option}
						allowClear
						onChange={item.onChange}
						placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 日期
	const formDatePicker = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />
				</Form.Item>
			</Col>
		);
	};
	// 区间日期
	const formRangePicker = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />
				</Form.Item>
			</Col>
		);
	};
	// 时间
	const formTimePicker = (item: FORMITEM) => {
		const format = 'HH:mm';
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<TimePicker
						minuteStep={15}
						onChange={item.onChange}
						format={format}
						disabledDate={item.disabledDate}
						style={{ width: '100%' }}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 时间区间
	const formTimeRangePicker = (item: FORMITEM) => {
		const format = 'HH:mm';
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<TimePicker.RangePicker
						onChange={item.onChange}
						minuteStep={15}
						format={format}
						disabledDate={item.disabledDate}
						style={{ width: '100%' }}
					/>
				</Form.Item>
			</Col>
		);
	};
	// 数字
	const formInputNumber = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout} labelAlign={item.labelAlign}>
					<InputNumber min={0} onChange={item.onChange} disabled={item.disabled} />
				</Form.Item>
			</Col>
		);
	};
	// 是否
	const formSwitch = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item
					name={item.name}
					label={item.label}
					rules={item.rules}
					valuePropName="checked"
					{...item.layout}
					labelAlign={item.labelAlign}>
					<Switch onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};

	// 图标单选
	const formRadioIcon = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
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
			</Col>
		);
	};
	// 单选
	const formRadio = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
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
			</Col>
		);
	};
	// 多选
	const formCheckbox = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Checkbox.Group options={item.option} onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};
	// 评分
	const formRate = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Form.Item name={item.name} label={item.label} rules={item.rules} {...item.layout}>
					<Rate tooltips={item.option} onChange={item.onChange} />
				</Form.Item>
			</Col>
		);
	};
	//按钮
	// 按钮图标功能
	const onIconBt = () => {
		if (expand) {
			setHeight('56px');
			setShowNum(num);
		} else {
			let height = Math.ceil((formList && ((formList?.length / 4) as number)) as number) * 56 + 'px';
			setHeight(height);
			setShowNum(formList?.length);
		}
		setExpand(!expand);
	};
	const getBtType = (type: string, name: string) => {
		if (type === 'submit') {
			return (
				<Form.Item>
					<Button type="primary" htmlType="submit">
						{name}
					</Button>
				</Form.Item>
			);
		} else if (type === 'onReset') {
			return (
				<Form.Item>
					<Button htmlType="button" onClick={onReset}>
						{name}
					</Button>
				</Form.Item>
			);
		} else if (type === 'expand') {
			return (
				<Form.Item>
					<Button type="link" onClick={onIconBt}>
						{expand ? <UpOutlined /> : <DownOutlined />}
					</Button>
				</Form.Item>
			);
		} else {
			return (
				<Form.Item>
					<Button>{name}</Button>
				</Form.Item>
			);
		}
	};
	const formButton = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				<Row style={item.style}>
					{item.option?.map((value, i) => {
						return (
							<Col key={i} className="mr10">
								{getBtType(value.type, value.name)}
							</Col>
						);
					})}
				</Row>
			</Col>
		);
	};

	// 自定义组件
	const userDefined = (item: FORMITEM) => {
		return (
			<Col lg={{ span: item.span }} md={{ span: item.span }} xs={{ span: 24 }} key={item.key}>
				{item.children}
			</Col>
		);
	};
	const formItem = (item: FORMITEM) => {
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
			case 'userDefined':
				return userDefined(item);
			default:
				return <div style={{ color: 'red' }}>error:调用组件错误,检查此项数据是否正确</div>;
		}
	};
	// 尺寸
	const size = useSelector<RootState>((state) => state.layout.size);

	// 显示表单个数
	const showForm = (showNum: number | undefined, i: number, item: FORMITEM) => {
		if (!showNum) {
			return formItem(item);
		} else if (showNum > i || i === (formList && formList.length - 1)) {
			return formItem(item);
		} else {
			return <></>;
		}
	};
	// 过度动画
	const [height, setHeight] = useState('56px');

	return (
		<div style={{ height: num ? height : '', transition: 'all 0.5s', overflow: 'hidden' }}>
			<Form form={form} layout={formLayout} onFinish={onFinish} size={size as SizeType}>
				<Row>
					{formList &&
						formList.map((item: FORMITEM, i) => {
							return showForm(showNum, i, item);
						})}
				</Row>
			</Form>
		</div>
	);
};
export default Ifrom;
